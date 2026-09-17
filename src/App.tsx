import Hero11 from '@/components/originkit/hero-11'
import '@/components/originkit/hero-11.css'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-neutral-950 font-sans text-neutral-100 antialiased selection:bg-cyan-500 selection:text-black">
      {/* Background Subtle Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      {/* Main Content Stage */}
      <main className="relative z-10 flex min-h-screen w-full flex-col justify-center">
        <Hero11 />
      </main>

      {/* Subtle Bottom Glow Divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
    </div>
  )
}