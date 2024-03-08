'use client'
import Input from "@/components/input";
import { cepSchema } from "@/components/zod";
import { useForm } from 'react-hook-form'
import { zodRessolver } from '@hookform/resolvers/zod'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <h1 className="text-3xl text-white font-bold">Formulário de Endereço</h1>
        <form className="flex flex-col py-4 w-1/3 space-y-4">

            <Input id="cep" type="text" label="CEP"/>
            <Input id="rua" type="text" label="Rua"/>
            <Input id="numero" type="number" label="Número"/>
            <Input id="bairro" type="text" label="Bairro"/>
            <Input id="cidade" type="text" label="Cidade"/>
            <Input id="estado" type="text" label="Estado"/>
            
        </form>
    </main>
  );
}
