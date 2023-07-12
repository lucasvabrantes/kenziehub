import { z } from "zod";

export const loginPageFormSchema = z.object({
    email: z
        .string()
        .min(1, "O e-mail é obrigatório")
        .email("O e-mail fornecido é inválido."),
    password: z.string().nonempty("A senha é obrigatória"),
});
