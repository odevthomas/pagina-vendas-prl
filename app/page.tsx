"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Star, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-pulse hover:animate-none"
      >
        <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 relative">
          <MessageCircle className="h-7 w-7 text-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
            1
          </span>
        </div>
      </a>

      {/* Seção Hero */}
      <section className="relative w-full py-10 md:py-16 overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* Efeito de fumaça verde animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full opacity-40 animate-pulse">
            <Image
              src="/placeholder.svg?height=800&width=800"
              width={800}
              height={800}
              alt="Efeito de fumaça"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Partículas flutuantes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#00ff00] rounded-full opacity-30 shadow-[0_0_10px_#00ff00]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div
              className="inline-block bg-[#00ff00] text-black font-bold px-5 py-1 text-sm rounded-full mb-4 animate-bounce shadow-[0_0_15px_rgba(0,255,0,0.7)]"
              style={{ animationDuration: "2s" }}
            >
              REVOLUCIONÁRIO
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-white animate-fadeIn text-center text-shadow-green">
                A FÓRMULA <span className="text-[#00ff00] animate-pulse shadow-text-strong">SECRETA</span> PARA
                RESULTADOS EXTRAORDINÁRIOS
              </h1>
              <p className="max-w-[700px] text-gray-400 text-lg animate-slideUp text-center mx-auto">
                Descubra como o PRL está transformando vidas e negócios com resultados comprovados
              </p>
              <div
                className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fadeIn mt-6"
                style={{ animationDelay: "0.5s" }}
              >
                <Link href="/pagamento">
                  <Button
                    size="lg"
                    className="bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold px-8 py-5 text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,0.8)] w-full sm:w-auto"
                  >
                    QUERO RESULTADOS AGORA <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-8 animate-float">
              <div className="relative mx-auto">
                <div className="absolute inset-0 bg-[#00ff00] opacity-20 blur-xl rounded-full animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=350"
                  width={350}
                  height={400}
                  alt="Resultados PRL"
                  className="rounded-lg object-cover relative z-10 hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios com ícones circulares */}
      <section className="w-full py-10 bg-zinc-900 relative overflow-hidden">
        {/* Efeito de luz */}
        <div
          className="absolute w-full h-full bg-[#00ff00] rounded-full filter blur-[150px] opacity-20"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "pulse 4s infinite",
          }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto">
            {[
              { title: "RESULTADOS RÁPIDOS", desc: "Veja transformações em apenas 7 dias de uso" },
              { title: "FÓRMULA EXCLUSIVA", desc: "Desenvolvida por especialistas para máxima eficácia" },
              { title: "GARANTIA TOTAL", desc: "30 dias de garantia ou seu dinheiro de volta" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-black border-2 border-[#00ff00] flex items-center justify-center mb-3 relative group shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]">
                  <div className="absolute inset-0 rounded-full bg-[#00ff00] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 rounded-full bg-[#00ff00] flex items-center justify-center animate-pulse shadow-inner">
                    <Check className="h-8 w-8 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-shadow-green">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Componentes com efeito de folha */}
      <section className="relative w-full py-10 overflow-hidden bg-black">
        {/* Efeito de folha verde animado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <Image
              src="/placeholder.svg?height=800&width=800"
              width={800}
              height={800}
              alt="Efeito de folha"
              className="object-cover h-full w-full animate-float"
              style={{ animationDuration: "15s" }}
            />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4 animate-fadeIn text-shadow-green">
              COMPONENTES{" "}
              <span className="text-[#00ff00] relative shadow-text-strong">
                PODEROSOS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ff00] animate-expandWidth shadow-[0_0_10px_#00ff00]"></span>
              </span>
            </h2>
            <p
              className="max-w-[700px] mx-auto text-gray-400 text-lg animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              Cada elemento do PRL foi cuidadosamente selecionado para garantir resultados extraordinários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {[
              {
                title: "COMPONENTE 1",
                desc: "Potencializa seus resultados em até 300%, com efeito comprovado cientificamente.",
              },
              {
                title: "COMPONENTE 2",
                desc: "Acelera o processo de transformação, garantindo eficiência máxima em cada etapa.",
              },
              {
                title: "COMPONENTE 3",
                desc: "Proporciona estabilidade e consistência nos resultados, mesmo em condições adversas.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-[#00ff00] transition-colors duration-300 transform hover:translate-y-[-5px] transition-transform duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] shadow-[0_5px_20px_rgba(0,0,0,0.5)] text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-[#00ff00]/20 flex items-center justify-center mb-4 animate-spin-slow mx-auto shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                  <Check className="h-8 w-8 text-[#00ff00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-shadow-green">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="w-full py-10 bg-zinc-900 relative overflow-hidden">
        {/* Efeito de luz dinâmico */}
        <div
          className="absolute w-full h-full bg-gradient-to-b from-[#00ff00]/10 to-transparent"
          style={{
            top: 0,
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, Math.min(0.3, scrollY / 1000)),
          }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4 animate-fadeIn text-shadow-green">
              DEPOIMENTOS DE <span className="text-[#00ff00] shadow-text-strong">CLIENTES</span>
            </h2>
            <p
              className="max-w-[700px] mx-auto text-gray-400 text-lg animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              Veja o que dizem as pessoas que já transformaram suas vidas com o PRL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
            {[
              {
                name: "Carlos S.",
                role: "Empresário",
                text: "Nunca imaginei que resultados tão extraordinários fossem possíveis. O PRL transformou completamente minha vida!",
              },
              {
                name: "Ana P.",
                role: "Profissional Liberal",
                text: "Em apenas 2 semanas já notei diferenças significativas. Os resultados são reais e consistentes!",
              },
              {
                name: "Marcos R.",
                role: "Gerente",
                text: "Minha equipe aumentou a produtividade em 300% após implementarmos o PRL. Investimento que valeu cada centavo!",
              },
              {
                name: "Juliana M.",
                role: "Empreendedora",
                text: "Já testei diversos produtos similares, mas nenhum se compara ao PRL. Os resultados são simplesmente impressionantes!",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black border-zinc-800 hover:border-[#00ff00] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#00ff00] text-[#00ff00] drop-shadow-[0_0_3px_rgba(0,255,0,0.5)]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-3 text-sm">"{item.text}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 mr-2 overflow-hidden shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                      <div className="w-full h-full bg-gradient-to-br from-[#00ff00]/30 to-transparent animate-pulse"></div>
                    </div>
                    <div>
                      <p className="font-bold text-shadow-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Dispositivos */}
      <section className="w-full py-10 bg-black relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute inset-0">
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00ff00]/10 to-transparent"
            style={{
              transform: `translateY(${Math.min(0, scrollY * 0.05 - 100)}px)`,
              opacity: Math.max(0, Math.min(0.5, scrollY / 1500)),
            }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4 animate-fadeIn text-shadow-green">
              DISPONÍVEL PARA{" "}
              <span className="text-[#00ff00] animate-pulse shadow-text-strong">TODOS OS DISPOSITIVOS</span>
            </h2>
            <p
              className="max-w-[700px] mx-auto text-gray-400 text-lg animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              Acesse o PRL de qualquer lugar, a qualquer momento, em qualquer dispositivo
            </p>
          </div>

          <div className="relative h-[200px] md:h-[300px] mx-auto animate-float" style={{ animationDuration: "6s" }}>
            <div className="absolute inset-0 bg-[#00ff00]/10 blur-3xl rounded-full"></div>
            <Image
              src="/placeholder.svg?height=300&width=600"
              width={600}
              height={300}
              alt="PRL em múltiplos dispositivos"
              className="object-contain w-full h-full relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </section>

      {/* Seção CTA Final */}
      <section className="w-full py-12 bg-gradient-to-r from-black to-zinc-900 border-t border-zinc-800 relative overflow-hidden">
        {/* Efeito de luz pulsante */}
        <div
          className="absolute w-full h-full top-0 left-0 bg-[#00ff00]/5 animate-pulse opacity-0"
          style={{
            animationDuration: "3s",
            opacity: Math.max(0, Math.min(0.3, scrollY / 2000)),
          }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10 max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mx-auto">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl animate-fadeIn text-shadow-green">
                PRONTO PARA{" "}
                <span className="text-[#00ff00] relative shadow-text-strong">
                  TRANSFORMAR
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ff00] animate-expandWidth shadow-[0_0_10px_#00ff00]"></span>
                </span>{" "}
                SUA VIDA?
              </h2>
              <p className="text-gray-400 text-lg animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                Junte-se a milhares de pessoas que já estão alcançando resultados extraordinários com o PRL
              </p>
            </div>
            <div className="pt-4 animate-bounce" style={{ animationDuration: "3s" }}>
              <Link href="/pagamento">
                <Button
                  size="lg"
                  className="bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold px-8 py-6 text-lg hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(0,255,0,0.5)] hover:shadow-[0_0_40px_rgba(0,255,0,0.8)] w-full sm:w-auto"
                >
                  QUERO COMEÇAR AGORA <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 pt-2 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              Garantia de 30 dias ou seu dinheiro de volta. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="w-full py-6 bg-black border-t border-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2023 PRL. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-[#00ff00] transition-colors duration-300">
                Termos
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00ff00] transition-colors duration-300">
                Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00ff00] transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

