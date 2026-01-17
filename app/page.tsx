"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Shader Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Shader Background */}
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#000000", "#E85D5D", "#1a1a1a", "#3a1a1a", "#000000"]}
          speed={0.15}
          distortion={0.4}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-40"
          colors={["#000000", "#ff6b6b", "#000000", "#2a1a1a"]}
          speed={0.1}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 py-16 md:py-24">
          {/* Hero Video */}
          <div className="mb-8 w-full max-w-[800px]">
            <div className="overflow-hidden rounded-2xl">
              <video
                src="/demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full mix-blend-screen"
              />
            </div>
          </div>

          {/* Title + Subheader */}
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-5xl font-bold tracking-tight md:text-6xl">
              RSVP R<span className="text-[#E85D5D]">e</span>ader
            </h1>
            <p className="text-xl text-white/60">
              Speed read anything.
            </p>
          </div>

          {/* Download Button */}
          <a
            href="/RSVPReader.dmg"
            download
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition-all duration-200 hover:bg-white/90 hover:scale-105"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for Mac
          </a>

          {/* Toggle Shortcut */}
          <p className="mt-6 text-white/50 text-sm">
            Toggle with{" "}
            <kbd className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
              Alt + /
            </kbd>
          </p>
        </div>
      </section>

      {/* Rest of Content */}
      <main className="mx-auto max-w-[1000px] px-6 py-16">
        {/* Why RSVP */}
        <section className="mb-24 max-w-2xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-gray-300">
            Most people read at <span className="text-white font-bold">200-250 WPM</span>.
            RSVP eliminates eye movement and lets you hit{" "}
            <span className="text-[#E85D5D] font-bold">500-1000+ WPM</span>—that's{" "}
            <span className="text-white font-bold">2-4x faster</span> with{" "}
            <span className="text-white font-bold">less eye strain</span> and{" "}
            <span className="text-white font-bold">deeper focus</span>.
          </p>
        </section>

        {/* Demo Section */}
        <section className="mb-24">
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <video
              src="/rsvp-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-24 text-center">
          <p className="mb-6 text-lg text-gray-300">
            Support development
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://buy.stripe.com/aFa00i7aHdGz1824gq6AM00"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
            >
              $5
            </a>
            <a
              href="https://buy.stripe.com/9B6dR866DgSL7wq5ku6AM01"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
            >
              $10
            </a>
            <a
              href="https://buy.stripe.com/cNi9ASdz5dGzbMGcMW6AM02"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
            >
              $20
            </a>
            <a
              href="https://buy.stripe.com/00wfZg52z5a38Au5ku6AM03"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
            >
              $50
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          <p>
            Made by Dan •{" "}
            <a
              href="https://github.com/tuuundra"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
