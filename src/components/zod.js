import z from "zod"

export const cepSchema = z.object({
    cep: z.string().min(8, 'CEP deve ter no minimo 8 dígitos'),
    rua: z.string().min(1, 'Esse campo é obrigatório'),
    numero: z.string().min(1, 'Esse campo é obrigatório'),
    bairro: z.string().min(1, 'Esse campo é obrigatório'),
    cidade: z.string().min(1, 'Esse campo é obrigatório'),
    estado: z.string().min(1, 'Esse campo é obrigatório'),
})