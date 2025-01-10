'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-foreground">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 bg-[#8B95C9] text-white">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5">
            <Image
              src="/images/logo.jpg"
              alt="Vero Dieppe - Psicología"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Vero Dieppe</span>
            <span className="text-sm text-white/90">Psicología</span>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white hover:text-white/90" asChild>
            <Link href="/about">Sobre mí</Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-white/90" asChild>
            <Link href="/services">Servicios</Link>
          </Button>
          <Button size="sm" className="bg-white text-[#8B95C9] hover:bg-white/90" asChild>
            <Link href="/contact">Contáctame</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative bg-gradient-to-b from-[#8B95C9]/10 to-white">
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 text-sm text-white mb-8 bg-[#8B95C9]/20 rounded-full fade-in">
              <span>Tu Camino hacia el Bienestar Mental</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight fade-in delay-1 text-white">
              Terapia<br />Psicológica
            </h1>
            <p className="text-xl text-white mb-4 max-w-2xl mx-auto fade-in delay-2">
              DESCUENTOS EN LA PRIMERA CONSULTA
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto fade-in delay-2">
              Soy Vero Dieppe, dedicada a hacer felices a las personas y sus familias.
              ¡Te mereces una vida perfecta! ¡Puedo ayudarte a cambiar tu vida ahora mismo!
            </p>
            <div className="fade-in delay-3">
              <Button size="lg" className="rounded-full bg-[#8B95C9] text-white hover:bg-[#7A84B8]">
                SABER MÁS
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6 scroll-animation scroll-delay-1">
                <h3 className="text-xl font-semibold mb-4 text-[#4A4A4A]">Terapia Individual</h3>
                <p className="text-[#6B6B6B]">Apoyo personalizado para tu viaje de salud mental, ayudándote a superar desafíos y crecer.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 scroll-animation scroll-delay-2">
                <h3 className="text-xl font-semibold mb-4 text-[#4A4A4A]">Consejería Familiar</h3>
                <p className="text-[#6B6B6B]">Fortalece los lazos familiares y mejora la comunicación a través de orientación y apoyo experto.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 scroll-animation scroll-delay-3">
                <h3 className="text-xl font-semibold mb-4 text-[#4A4A4A]">Terapia de Parejas</h3>
                <p className="text-[#6B6B6B]">Construye relaciones más sólidas con apoyo profesional para parejas que enfrentan desafíos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animation">
                <h2 className="text-4xl font-bold mb-6 text-white">¿Por Qué Elegirme?</h2>
                <div className="space-y-4">
                  <p className="text-white/80">Con años de experiencia y un enfoque compasivo, proporciono un espacio seguro para la sanación y el crecimiento.</p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-[#F5A7A7]">✓</span> Psicóloga Profesional Licenciada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#F5A7A7]">✓</span> Enfoques de Tratamiento Basados en Evidencia
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#F5A7A7]">✓</span> Ambiente Cómodo y Confidencial
                    </li>
                  </ul>
                </div>
              </div>
              <div className="scroll-animation scroll-delay-2">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white">¿Lista para Empezar?</h3>
                  <p className="text-white/80 mb-6">Da el primer paso hacia una vida mejor. Agenda tu consulta hoy.</p>
                  <Button className="w-full bg-[#F5A7A7] text-white hover:bg-[#F5A7A7]/90">
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#8B95C9] text-white py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white p-0.5">
              <Image
                src="/images/logo.jpg"
                alt="Vero Dieppe - Psicología"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Vero Dieppe</span>
              <span className="text-xs text-white/90">Psicología</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/90 hover:text-white">Política de Privacidad</Link>
            <Link href="/terms" className="text-sm text-white/90 hover:text-white">Términos de Servicio</Link>
            <Link href="/contact" className="text-sm text-white/90 hover:text-white">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}