"use client";

import React, { useId } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const particlesInit = async (engine: any) => {
  await loadSlim(engine);
};

export function ParticlesBackground() {
  const particleId = useId();

  return (
    <ParticlesProvider init={particlesInit}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-70">
        <Particles
          id={particleId}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#38BDF8", "#7DD3FC", "#BAE6FD", "#FFFFFF"],
              },
              links: {
                color: "#38BDF8",
                distance: 120,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1000,
                  height: 1000,
                },
                value: 100,
              },
              opacity: {
                value: { min: 0.2, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>
    </ParticlesProvider>
  );
}
