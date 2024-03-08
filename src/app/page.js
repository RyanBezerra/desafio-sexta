'use client'

import Input from "@/components/input";
import { cepSchema } from "@/components/zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Home() {
  const { register, handleSubmit, getValues, setValue, formState: {errors} } = useForm({
    resolver: zodResolver(cepSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <h1 className="text-3xl text-white font-bold">Formulário de Endereço</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-4 w-1/3 space-y-4">

        <Input
          id="cep"
          label="CEP"
          register={register}
          error={errors.cep}
          schema="cep"
          type="text"
        />
        <Input
          id="rua"
          label="Rua"
          register={register}
          error={errors.rua}
          schema="rua"
          type="text"
        />
        <Input
          id="bairro"
          label="Bairro"
          register={register}
          error={errors.bairro}
          schema="bairro"
          type="text"
        />
        <Input
          id="cidade"
          label="Cidade"
          register={register}
          error={errors.cidade}
          schema="cidade"
          type="text"
        />
        <Input
          id="estado"
          label="Estado"
          register={register}
          error={errors.estado}
          schema="estado"
          type="text"
        />
        <Input
          id="numero"
          label="Número"
          register={register}
          error={errors.numero}
          schema="numero"
          type="text"
        />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
        </form>
    </main>
  );
}
