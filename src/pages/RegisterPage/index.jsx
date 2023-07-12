import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { StyledFlexContainer, StyledFormContainer } from "./style";
import { StyledButton } from "../../styles/buttons";
import { registerPageFormSchema } from "./registerPageFormSchema";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input/index";
import { Select } from "./Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledTitleOne } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterPage = () => {
    const { registerUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerPageFormSchema),
    });

    return (
        <StyledFlexContainer>
            <Header to="/" buttonText="Voltar" />
            <StyledFormContainer>
                <div>
                    <StyledTitleOne fontSize="lg">
                        Crie sua conta
                    </StyledTitleOne>
                    <p>Rápido e grátis, vamos nessa</p>
                </div>
                <Form submitfunction={handleSubmit(registerUser)} noValidate>
                    <Input
                        label="Nome"
                        placeholder="Digite aqui seu nome"
                        type="text"
                        {...register("name")}
                        error={errors.name}
                    />

                    <Input
                        label="E-mail"
                        placeholder="Digite aqui seu e-mail"
                        type="email"
                        {...register("email")}
                        error={errors.email}
                    />

                    <Input
                        autoComplete="on"
                        label="Senha"
                        placeholder="Digite aqui sua senha"
                        type="password"
                        {...register("password")}
                        error={errors.password}
                    />

                    <Input
                        autoComplete="on"
                        label="Confirmar senha"
                        placeholder="Digite novamente sua senha"
                        type="password"
                        {...register("confirm")}
                        error={errors.confirm}
                    />

                    <Input
                        label="Bio"
                        placeholder="Fale sobre você"
                        type="text"
                        {...register("bio")}
                        error={errors.bio}
                    />
                    <Input
                        label="Contato"
                        placeholder="Digite aqui seu número de telefone"
                        type="tel"
                        {...register("contact")}
                        error={errors.contact}
                    />

                    <Select
                        {...register("course_module")}
                        error={errors.course_module}
                    />
                    <StyledButton buttoncolor="red">Cadastrar</StyledButton>
                </Form>
            </StyledFormContainer>
        </StyledFlexContainer>
    );
};
