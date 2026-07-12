import { useEffect, useRef } from "react";

const randomColors = (count) =>
  Array.from({ length: count }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );

export default function TubesBackground({ children, enableClickInteraction = true }) {
  const canvasRef = useRef(null);
  const tubesRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      if (!canvasRef.current) return;
      try {
        const module = await import(
          /* @vite-ignore */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        if (!mounted) return;
        const app = module.default(canvasRef.current, {
          tubes: {
            colors: ["#6b8ec4", "#1e3a6e", "#a8c0e0"],
            lights: {
              intensity: 200,
              colors: ["#6b8ec4", "#a8c0e0", "#2b4a7e", "#0d4a8e"],
            },
          },
        });
        tubesRef.current = app;
      } catch (err) {
        console.error("TubesCursor load error:", err);
      }
    };

    init();
    return () => { mounted = false; };
  }, []);

  const handleCanvasClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ background: "#06111f" }}>
      {/* Canvas sits behind everything, captures clicks for color change */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: "none" }}
      />
      {/* Content sits on top with full pointer events so links/buttons work */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
