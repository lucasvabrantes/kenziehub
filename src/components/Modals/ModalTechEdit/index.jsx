import { useContext } from "react";
import { StyledModalBox, StyledModalOverlay } from "./style";
import { TechContext } from "../../../providers/TechContext";
import { Form } from "../../Form";
import closeBtn from "../../../assets/closeButton.svg";
import { useForm } from "react-hook-form";
import { Input } from "../../Input/index";
import { StyledButton } from "../../../styles/buttons";
import { modalTechEditSchema } from "./modalTechEditSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const ModalTechEdit = () => {
    const { setIsEditModalOpen, editTech, object, deleteTech } =
        useContext(TechContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(modalTechEditSchema),
    });

    return (
        <StyledModalOverlay role="dialog">
            <StyledModalBox>
                <div className="modalHeader">
                    <span>Tecnologia Detalhes</span>
                    <button onClick={() => setIsEditModalOpen(false)}>
                        <img src={closeBtn} alt="Botão para fechar o modal" />
                    </button>
                </div>
                <div className="modalContent">
                    <Form submitfunction={handleSubmit(editTech)}>
                        <Input
                            {...register("title")}
                            label="Nome da tecnologia"
                            placeholder={object.title}
                            disabled
                        />
                        <label htmlFor="status">Status</label>
                        <select {...register("status")} name="status">
                            <option value="">Selecione um Status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {errors.status ? <p>{errors.status.message}</p> : null}
                        <div className="footerButtons">
                            <StyledButton buttoncolor="red" type="submit">
                                Salvar alterações
                            </StyledButton>
                            <StyledButton
                                onClick={() => deleteTech(object.id)}
                                buttoncolor="lightGray"
                                type="button"
                            >
                                Excluir
                            </StyledButton>
                        </div>
                    </Form>
                </div>
            </StyledModalBox>
        </StyledModalOverlay>
    );
};
