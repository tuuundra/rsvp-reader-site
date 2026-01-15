export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <main className="mx-auto max-w-[640px] px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            RSVP Reader
          </h1>
          <p className="text-xl text-gray-400">
            Speed read anything. 500+ WPM.
          </p>
        </section>

        {/* Demo Video */}
        <section className="mb-12">
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

        {/* Download Section */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-lg font-medium text-gray-300">
            Download Free
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href="/RSVPReader.zip"
              download
              className="rounded-lg bg-[#E85D5D] px-6 py-3 font-medium text-white transition-colors hover:bg-[#d14d4d]"
            >
              .zip
            </a>
            <a
              href="/RSVPReader.dmg"
              download
              className="rounded-lg bg-[#E85D5D] px-6 py-3 font-medium text-white transition-colors hover:bg-[#d14d4d]"
            >
              .dmg
            </a>
          </div>
        </section>

        {/* Tip Section */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-lg font-medium text-gray-300">
            Like it? Buy me a coffee
          </h2>
          <div className="flex justify-center gap-3">
            <a
              href="https://buy.stripe.com/test_aFa00i7aHdGz1824gq6AM00"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium transition-colors hover:border-[#E85D5D] hover:text-[#E85D5D]"
            >
              $5
            </a>
            <a
              href="https://buy.stripe.com/test_9B6dR866DgSL7wq5ku6AM01"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium transition-colors hover:border-[#E85D5D] hover:text-[#E85D5D]"
            >
              $10
            </a>
            <a
              href="https://buy.stripe.com/test_cNi9ASdz5dGzbMGcMW6AM02"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-700 px-5 py-2.5 font-medium transition-colors hover:border-[#E85D5D] hover:text-[#E85D5D]"
            >
              $20
            </a>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="mb-12">
          <h2 className="mb-4 text-center text-lg font-medium text-gray-300">
            Keyboard Shortcuts
          </h2>
          <div className="rounded-lg border border-gray-800 bg-[#111111] p-4">
            <div className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Play / Pause</span>
                <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-xs">
                  Space
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Skip word</span>
                <div className="flex gap-1">
                  <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-xs">
                    ←
                  </kbd>
                  <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-xs">
                    →
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Adjust speed</span>
                <div className="flex gap-1">
                  <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-xs">
                    ↑
                  </kbd>
                  <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-xs">
                    ↓
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Activate</span>
                <kbd className="rounded bg-gray-800 px-2 py-1 font-mono text-xs">
                  ⌘+Shift+V
                </kbd>
              </div>
            </div>
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
