"use client"  

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Star, MessageCircle, Rocket, Shield } from "lucide-react"
import { FaCode, FaRobot, FaLifeRing } from "react-icons/fa"
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
    

      <section className="relative w-full py-10 md:py-16 overflow-hidden flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full opacity-40 animate-pulse">
            <Image
              src="/bg.jpg?height=0800&width=80"
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
                  src="/ebook-ofc.png?height=400&width=350"
                  width={350}
                  height={400}
                  alt="Resultados PRL"
                  className="rounded-lg object-cover relative z-10 hover:scale-105 transition-transform duration-500  mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="w-full py-10 bg-black relative overflow-hidden">
  <div className="container px-4 md:px-6 relative z-10 max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto">
      {[
        { title: "RESULTADOS EM CÓDIGO", desc: "Transforme seu conhecimento em programação em apenas 7 dias", icon: <FaCode className="h-8 w-8 text-[#000]" /> },
        { title: "ALGORITMO SECRETO", desc: "Desenvolvido para otimizar sua jornada e potencializar seu aprendizado", icon: <FaRobot className="h-8 w-8 text-[#000]" /> },
        { title: "SUPORTE TOTAL", desc: "Acesso ilimitado a recursos e suporte durante 30 dias para garantir sua evolução", icon: <FaLifeRing className="h-8 w-8 text-[#000]" /> },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="w-20 h-20 rounded-full bg-black border-2 border-[#00ff00] flex items-center justify-center mb-3 relative group shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]">
            <div className="absolute inset-0 rounded-full bg-[#00ff00] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="w-14 h-14 rounded-full bg-[#00ff00] flex items-center justify-center animate-pulse shadow-inner">
              {item.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-1 text-shadow-green">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="relative w-full py-10 overflow-hidden bg-black">
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <Image
        src="/bg-section.jpg?height=800&width=800"
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
        Cada elemento do PRL foi cuidadosamente selecionado para garantir resultados extraordinários.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
      {[ 
        {
          title: "Supercarregador de Energia",
          desc: "Aumenta sua produtividade em até 300%, com resultados visíveis rapidamente.",
          icon: <Star className="h-8 w-8 text-[#00ff00]" />,  // Ícone de estrela
        },
        {
          title: "Acelerador de Resultados",
          desc: "Potencializa cada etapa do processo com eficiência máxima e velocidade.",
          icon: <Rocket className="h-8 w-8 text-[#00ff00]" />,  // Ícone de foguete
        },
        {
          title: "Escudo de Estabilidade",
          desc: "Garante resultados consistentes e estáveis, mesmo sob condições extremas.",
          icon: <Shield className="h-8 w-8 text-[#00ff00]" />,  // Ícone de escudo
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-black p-6 rounded-lg border border-black hover:border-[#00ff00] transition-colors duration-300 transform hover:translate-y-[-5px] transition-transform duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] shadow-[0_5px_20px_rgba(0,0,0,0.5)] text-center"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="w-16 h-16 rounded-full bg-[#00ff00]/20 flex items-center justify-center mb-4 animate-spin-slow mx-auto shadow-[0_0_15px_rgba(0,255,0,0.3)]">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-shadow-green">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     
      <section className="w-full py-10 bg-black relative overflow-hidden">
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
          image: "/Avatar/avatar1.jpg", // Caminho para a imagem do primeiro avatar
          text: "Nunca imaginei que resultados tão extraordinários fossem possíveis. O PRL transformou completamente minha vida!",
        },
        {
          image: "/Avatar/avatar2.jpg", // Caminho para a imagem do segundo avatar
          text: "Em apenas 2 semanas já notei diferenças significativas. Os resultados são reais e consistentes!",
        },
        {
          image: "/Avatar/avatar3.jpg", // Caminho para a imagem do terceiro avatar
          text: "Minha equipe aumentou a produtividade em 300% após implementarmos o PRL. Investimento que valeu cada centavo!",
        },
        {
          image: "/Avatar/avatar4.jpg", // Caminho para a imagem do quarto depoimento
          text: "Já testei diversos produtos similares, mas nenhum se compara ao PRL. Os resultados são simplesmente impressionantes!",
        },
      ].map((item, index) => (
        <Card
          key={index}
          className="bg-black border-black hover:border-[#00ff00] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
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
              <div className="w-10 h-10 rounded-full bg-black mr-2 overflow-hidden shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                <Image
                  src={item.image}
                  alt="Depoimento"
                  className="w-full h-full object-cover"
                  width={40}
                  height={40}
                />
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
            <div className="absolute inset-0 bg-[#00ff00]/10 blur-3xl "></div>
            <Image
              src="/ebook-ofc.png?height=600&width=600"
              width={600}
              height={300}
              alt="PRL em múltiplos dispositivos"
              className="object-contain w-full h-full relative z-10 "
            />
          </div>
        </div>
      </section>

    
      <section className="w-full py-12 bg-gradient-to-r from-black to-black border-t border-black relative overflow-hidden">
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
      <footer className="w-full py-6 bg-black border-t border-black">
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

