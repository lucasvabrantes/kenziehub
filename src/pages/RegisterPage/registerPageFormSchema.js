import { z } from "zod";

export const registerPageFormSchema = z
    .object({
        name: z.string().nonempty("O nome é obrigatório"),
        email: z
            .string()
            .min(1, "O email é obrigatório")
            .email("Forneça um e-mail válido"),
        password: z
            .string()
            .min(8, "A senha precisa conter pelo menos 8 caracteres.")
            .regex(
                /(?=.*?[A-Z])/,
                "É necessário pelo menos uma letra maiúscula."
            )
            .regex(
                /(?=.*?[a-z])/,
                "É necessário pelo menos uma letra minúscula."
            )
            .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
            .regex(
                /(?=.*?[#?!@$%^&*-])/,
                "É necessário que sua senha contenha um caractere especial(símbolo)"
            ),
        confirm: z.string().min(1, "Confirmar a senha é obrigatório"),
        bio: z.string().nonempty("A descrição é obrigatória"),
        contact: z
            .string()
            .min(1, "O número de telefone para contato é obrigatório"),
        course_module: z
            .string()
            .min(1, "A escolha de um módulo é obrigatória"),
    })
    .refine(({ confirm, password }) => confirm === password, {
        message: "A confirmação e a senha precisam ser iguais",
        path: ["confirm"],
    });
