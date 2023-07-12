import { StyledModalBox, StyledModalOverlay } from "./style";
import closeBtn from "../../../assets/closeButton.svg";
import { Input } from "../../Input/index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalTechRegisterSchema } from "./modalTechRegisterSchema";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext/index";
import { Form } from "../../Form/index";
import { StyledButton } from "../../../styles/buttons";

export const ModalTechRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(modalTechRegisterSchema),
    });

    const { addTech, setIsRegModalOpen } = useContext(TechContext);

    return (
        <StyledModalOverlay role="dialog">
            <StyledModalBox>
                <div className="modalHeader">
                    <span>Cadastrar Tecnologia</span>
                    <button onClick={() => setIsRegModalOpen(false)}>
                        <img src={closeBtn} alt="Botão para fechar o modal" />
                    </button>
                </div>
                <div className="modalContent">
                    <Form submitfunction={handleSubmit(addTech)} noValidate>
                        <Input
                            type="text"
                            label="Nome"
                            placeholder="Digite aqui o nome da tecnologia"
                            {...register("title")}
                            error={errors.title}
                        />
                        <label htmlFor="status">Selecionar Status</label>
                        <select {...register("status")}>
                            <option value="">Selecionar Status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors.status ? <p>{errors.status.message}</p> : null}
                        <StyledButton buttoncolor="pink" type="submit">
                            Cadastrar Tecnologia
                        </StyledButton>
                    </Form>
                </div>
            </StyledModalBox>
        </StyledModalOverlay>
    );
};
