"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollFrameAnimationOptions {
    /** Total number of frames in the sequence */
    frameCount: number;
    /** Path template for frames - use {frame} as placeholder for frame number */
    framePath: string;
    /** Number of digits to pad frame numbers (e.g., 3 for 001, 002...) */
    padDigits?: number;
    /** Preload priority: how many frames to preload initially */
    preloadCount?: number;
}

interface UseScrollFrameAnimationReturn {
    /** Current frame index (0-based) */
    currentFrame: number;
    /** Ref to attach to the scroll container section */
    sectionRef: React.RefObject<HTMLElement | null>;
    /** Ref to attach to the canvas element */
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    /** Whether initial frames are loaded */
    isLoaded: boolean;
    /** Loading progress (0-100) */
    loadProgress: number;
}

/**
 * High-performance scroll-driven frame animation hook
 * Uses requestAnimationFrame and canvas for smooth 60fps playback
 */
export function useScrollFrameAnimation({
    frameCount,
    framePath,
    padDigits = 3,
    preloadCount = 20,
}: UseScrollFrameAnimationOptions): UseScrollFrameAnimationReturn {
    const sectionRef = useRef<HTMLElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
    const currentFrameRef = useRef(0);
    const rafIdRef = useRef<number | null>(null);

    const [currentFrame, setCurrentFrame] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    // Generate frame path with zero-padded number
    const getFramePath = useCallback((index: number) => {
        const frameNumber = (index + 1).toString().padStart(padDigits, "0");
        return framePath.replace("{frame}", frameNumber);
    }, [framePath, padDigits]);

    // Draw frame to canvas
    const drawFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const image = imagesRef.current[frameIndex];

        if (!canvas || !ctx || !image || !image.complete) return;

        // Set canvas size to match image (only once or on resize)
        if (canvas.width !== image.naturalWidth || canvas.height !== image.naturalHeight) {
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
    }, []);

    // Calculate scroll progress and update frame
    const handleScroll = useCallback(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress through section (0 to 1)
        // Animation starts when section top hits viewport top
        // Animation ends when section bottom approaches viewport top
        const scrollableDistance = sectionHeight - viewportHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

        // Map progress to frame index
        const targetFrame = Math.floor(progress * (frameCount - 1));
        const clampedFrame = Math.max(0, Math.min(frameCount - 1, targetFrame));

        if (clampedFrame !== currentFrameRef.current) {
            currentFrameRef.current = clampedFrame;
            setCurrentFrame(clampedFrame);
            drawFrame(clampedFrame);
        }
    }, [frameCount, drawFrame]);

    // RAF-based scroll handler for smooth performance
    const onScroll = useCallback(() => {
        if (rafIdRef.current !== null) {
            cancelAnimationFrame(rafIdRef.current);
        }
        rafIdRef.current = requestAnimationFrame(handleScroll);
    }, [handleScroll]);

    // Preload images
    useEffect(() => {
        const images: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
        let loadedCount = 0;
        let priorityLoaded = 0;

        const loadImage = (index: number, isPriority: boolean) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    images[index] = img;
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / frameCount) * 100));

                    if (isPriority) {
                        priorityLoaded++;
                        // Set loaded once priority frames are ready
                        if (priorityLoaded >= Math.min(preloadCount, frameCount)) {
                            setIsLoaded(true);
                            // Draw first frame immediately
                            if (index === 0) {
                                imagesRef.current = images;
                                drawFrame(0);
                            }
                        }
                    }
                    resolve();
                };
                img.onerror = () => {
                    console.warn(`Failed to load frame: ${getFramePath(index)}`);
                    resolve();
                };
                img.src = getFramePath(index);
            });
        };

        // Load priority frames first (first N frames for immediate playback)
        const priorityPromises = [];
        for (let i = 0; i < Math.min(preloadCount, frameCount); i++) {
            priorityPromises.push(loadImage(i, true));
        }

        // Then load remaining frames in background
        Promise.all(priorityPromises).then(() => {
            imagesRef.current = images;

            // Load remaining frames
            for (let i = preloadCount; i < frameCount; i++) {
                loadImage(i, false);
            }
        });

        return () => {
            // Cleanup
            images.forEach((img) => {
                if (img) img.src = "";
            });
        };
    }, [frameCount, preloadCount, getFramePath, drawFrame]);

    // Attach scroll listener
    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        // Initial calculation
        handleScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [onScroll, handleScroll]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            drawFrame(currentFrameRef.current);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [drawFrame]);

    return {
        currentFrame,
        sectionRef,
        canvasRef,
        isLoaded,
        loadProgress,
    };
}
