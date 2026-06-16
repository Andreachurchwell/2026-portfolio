import { useEffect, useRef } from "react";
import "./MouseRibbon.css";

const POINT_COUNT = 18;

function buildPath(points) {
    const visiblePoints = points.filter((point) => point.active);

    if (visiblePoints.length < 2) {
        return "";
    }

    return visiblePoints
        .map((point, index) => {
            if (index === 0) {
                return `M ${point.x} ${point.y}`;
            }

            const previous = visiblePoints[index - 1];
            const midX = (previous.x + point.x) / 2;
            const midY = (previous.y + point.y) / 2;

            return `Q ${previous.x} ${previous.y} ${midX} ${midY}`;
        })
        .join(" ");
}

function MouseRibbon() {
    const pathRefs = useRef([]);
    const pointsRef = useRef([]);
    const targetRef = useRef({ x: 0, y: 0, active: false });
    const frameRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const isFinePointer = window.matchMedia("(pointer: fine)");

        if (prefersReducedMotion.matches || !isFinePointer.matches) {
            return undefined;
        }

        pointsRef.current = Array.from({ length: POINT_COUNT }, () => ({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            active: false,
        }));

        const handlePointerMove = (event) => {
            targetRef.current = {
                x: event.clientX,
                y: event.clientY,
                active: true,
            };
        };

        const handlePointerLeave = () => {
            targetRef.current.active = false;
        };

        const animate = () => {
            const points = pointsRef.current;
            const target = targetRef.current;

            points.forEach((point, index) => {
                const leader = index === 0 ? target : points[index - 1];
                const ease = index === 0 ? 0.24 : 0.36;

                point.x += (leader.x - point.x) * ease;
                point.y += (leader.y - point.y) * ease;
                point.active = target.active;
            });

            const path = buildPath(points);

            pathRefs.current.forEach((pathElement) => {
                if (pathElement) {
                    pathElement.setAttribute("d", path);
                }
            });

            frameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("pointermove", handlePointerMove);
        document.documentElement.addEventListener("pointerleave", handlePointerLeave);
        frameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            document.documentElement.removeEventListener("pointerleave", handlePointerLeave);

            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <svg className="mouse-ribbon" aria-hidden="true">
            <defs>
                <linearGradient id="mouse-ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F1D5DC" stopOpacity=".2" />
                    <stop offset="34%" stopColor="var(--rose)" stopOpacity=".62" />
                    <stop offset="72%" stopColor="#C993A0" stopOpacity=".5" />
                    <stop offset="100%" stopColor="var(--sage)" stopOpacity=".26" />
                </linearGradient>
            </defs>

            <path
                ref={(element) => {
                    pathRefs.current[0] = element;
                }}
                className="mouse-ribbon-path mouse-ribbon-shadow"
            />
            <path
                ref={(element) => {
                    pathRefs.current[1] = element;
                }}
                className="mouse-ribbon-path mouse-ribbon-body"
            />
            <path
                ref={(element) => {
                    pathRefs.current[2] = element;
                }}
                className="mouse-ribbon-path mouse-ribbon-highlight"
            />
        </svg>
    );
}

export default MouseRibbon;
