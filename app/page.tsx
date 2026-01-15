export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <main className="mx-auto max-w-[1000px] px-6 py-16 md:py-24">
        {/* Hero Video */}
        <section className="mb-8">
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <video
              src="/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </section>

        {/* Title + Subheader */}
        <section className="mb-6 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
            RSVP R<span className="text-[#E85D5D]">e</span>ader
          </h1>
          <p className="text-lg text-gray-400">
            Speed read anything.
          </p>
        </section>

        {/* Download Button */}
        <section className="mb-56 text-center">
          <a
            href="/RSVPReader.dmg"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for Mac
          </a>
        </section>

        {/* Toggle Shortcut */}
        <section className="mb-16 text-center">
          <p className="text-gray-400">
            Toggle with{" "}
            <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-sm text-white">
              Alt + /
            </kbd>
          </p>
        </section>

        {/* Why RSVP */}
        <section className="mb-16 max-w-2xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-gray-300">
            Traditional reading wastes time on <span className="text-[#E85D5D]">eye movement</span>.
            RSVP feeds words directly to your focus point—so you read{" "}
            <span className="text-white font-bold">faster</span>, with{" "}
            <span className="text-white font-bold">less eye strain</span>, and{" "}
            <span className="text-white font-bold">deeper focus</span>.
          </p>
        </section>

        {/* Support Section */}
        <section className="mb-12 text-center">
          <p className="mb-4 text-lg text-gray-300">
            Any support means the world 🙏
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://buy.stripe.com/test_00wfZg52z5a38Au5ku6AM03"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-gray-800"
            >
              $5
            </a>
            <a
              href="https://buy.stripe.com/test_bJeaEW66D9qj9Ey8wG6AM04"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-gray-800"
            >
              $10
            </a>
            <a
              href="https://buy.stripe.com/test_9B6aEWbqX8mfaICaEO6AM05"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-gray-800"
            >
              $20
            </a>
            <a
              href="https://buy.stripe.com/test_00wcN43Yv7ib7wqeV46AM06"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium text-white transition-colors hover:bg-gray-800"
            >
              $50
            </a>
          </div>
        </section>

        {/* Demo Section */}
        <section className="mb-12">
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
