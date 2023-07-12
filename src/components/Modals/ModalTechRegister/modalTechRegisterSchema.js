import { z } from "zod";

export const modalTechRegisterSchema = z.object({
    title: z.string().nonempty("O título é obrigatório"),
    status: z.string().min(1, "A escolha de um status é obrigatória"),
});
