"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Check, CreditCard, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PagamentoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[#00ff00] mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página principal
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-shadow-green">FINALIZAR SUA COMPRA</h1>
          <p className="text-gray-400">Complete seu pedido para acessar o PRL imediatamente</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-zinc-900 border-zinc-800 shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
              <CardHeader>
                <CardTitle>Informações de Pagamento</CardTitle>
                <CardDescription>Preencha os dados abaixo para finalizar sua compra</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" placeholder="Digite seu nome completo" className="bg-zinc-800 border-zinc-700" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="bg-zinc-800 border-zinc-700" />
                </div>

                <div className="space-y-2">
                  <Label>Forma de Pagamento</Label>
                  <RadioGroup defaultValue="cartao" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 rounded-md border border-zinc-800 p-3 bg-zinc-800/50">
                      <RadioGroupItem value="cartao" id="cartao" />
                      <Label htmlFor="cartao" className="flex-1 cursor-pointer">
                        Cartão de Crédito
                      </Label>
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border border-zinc-800 p-3 bg-zinc-800/50">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="flex-1 cursor-pointer">
                        Pix
                      </Label>
                      <div className="h-5 w-5 text-gray-400 flex items-center justify-center font-bold text-xs">
                        PIX
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cartao">Número do Cartão</Label>
                  <Input id="cartao" placeholder="0000 0000 0000 0000" className="bg-zinc-800 border-zinc-700" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="validade">Validade</Label>
                    <Input id="validade" placeholder="MM/AA" className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="bg-zinc-800 border-zinc-700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parcelas">Parcelas</Label>
                  <Select>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Selecione as parcelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1x de R$197,00 sem juros</SelectItem>
                      <SelectItem value="2">2x de R$98,50 sem juros</SelectItem>
                      <SelectItem value="3">3x de R$65,67 sem juros</SelectItem>
                      <SelectItem value="4">4x de R$49,25 sem juros</SelectItem>
                      <SelectItem value="5">5x de R$39,40 sem juros</SelectItem>
                      <SelectItem value="6">6x de R$32,83 sem juros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold py-6 text-lg shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)]">
                  <Lock className="mr-2 h-4 w-4" /> FINALIZAR COMPRA SEGURA
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="bg-zinc-900 border-zinc-800 shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md bg-black flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#00ff00]/10 animate-pulse"></div>
                    <span className="text-[#00ff00] font-bold text-xl">PRL</span>
                  </div>
                  <div>
                    <h3 className="font-bold">PRL - Plano Profissional</h3>
                    <p className="text-sm text-gray-400">Acesso vitalício</p>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Subtotal</span>
                    <span>R$197,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Desconto</span>
                    <span className="text-[#00ff00]">-R$0,00</span>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-2xl">R$197,00</span>
                  </div>
                  <div className="text-[#00ff00] text-sm mt-1 flex items-center">
                    <Check className="h-4 w-4 mr-1" /> Pagamento 100% seguro
                  </div>
                </div>

                <div className="bg-zinc-800/50 p-4 rounded-md mt-4">
                  <h4 className="font-bold mb-2 flex items-center">
                    <Check className="h-4 w-4 text-[#00ff00] mr-2" /> O que você recebe:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#00ff00] mr-2 mt-0.5" />
                      <span>Acesso completo ao sistema PRL</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#00ff00] mr-2 mt-0.5" />
                      <span>Suporte prioritário 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#00ff00] mr-2 mt-0.5" />
                      <span>Atualizações vitalícias</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#00ff00] mr-2 mt-0.5" />
                      <span>Garantia de 30 dias</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 flex items-center justify-center text-center">
              <div className="flex items-center text-gray-400 text-sm">
                <Lock className="h-4 w-4 mr-2" />
                <span>Pagamento 100% seguro e criptografado</span>
              </div>
            </div>

            <div className="mt-4 flex justify-center space-x-2">
              <Image
                src="/placeholder.svg?height=30&width=40"
                width={40}
                height={30}
                alt="Visa"
                className="opacity-70"
              />
              <Image
                src="/placeholder.svg?height=30&width=40"
                width={40}
                height={30}
                alt="Mastercard"
                className="opacity-70"
              />
              <Image
                src="/placeholder.svg?height=30&width=40"
                width={40}
                height={30}
                alt="Pix"
                className="opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

