import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground: React.FC = () => {
    // Inicializamos el motor de partículas. Usamos 'any' para evitar errores estrictos de TypeScript.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        // Las partículas reaccionan y se conectan al pasar el mouse
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: {
                        grab: { distance: 150, links: { opacity: 0.5 } },
                    },
                },
                particles: {
                    color: { value: "#dc2626" }, // Tu Rojo Blood Angel
                    links: {
                        color: "#dc2626",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1, // Movimiento táctico lento
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 50, // Cantidad exacta para que no sature la pantalla
                    },
                    opacity: { value: 0.4 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;