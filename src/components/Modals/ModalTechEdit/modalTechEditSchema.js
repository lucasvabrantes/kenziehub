import { z } from "zod";

export const modalTechEditSchema = z.object({
    status: z.string().min(1, "Selecione uma opção"),
});
