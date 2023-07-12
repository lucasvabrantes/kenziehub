import Logo from "../../assets/Logo.svg";
import {
    StyledContainer,
    StyledFlexContainer,
    StyledPasswordField,
} from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/index";
import { useContext, useState } from "react";
import { loginPageFormSchema } from "./loginPageFormSchema";
import { Form } from "../../components/Form/index";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { StyledTitleOne } from "../../styles/typography";
import Eye from "../../assets/Eye.svg";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
    const { loading, handleLogin } = useContext(UserContext);
    const [isTypePassword, setIsTypePassword] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginPageFormSchema),
    });

    return (
        <StyledFlexContainer>
            <div>
                <figure>
                    <img src={Logo} alt="Logo na cor rosa escrita Kenzie Hub" />
                </figure>
                <StyledContainer>
                    <StyledTitleOne fontSize="lg">Login</StyledTitleOne>
                    <Form submitfunction={handleSubmit(handleLogin)}>
                        <Input
                            label="E-mail"
                            type="email"
                            placeholder="Digite aqui seu e-mail"
                            {...register("email")}
                            error={errors.email}
                        />
                        <StyledPasswordField>
                            <Input
                                autoComplete="on"
                                label="Senha"
                                type={isTypePassword ? "password" : "text"}
                                {...register("password")}
                                placeholder="Digite aqui sua senha"
                            />

                            <img
                                onClick={() =>
                                    setIsTypePassword(!isTypePassword)
                                }
                                src={Eye}
                                alt="Botão em formato de olho que revela e esconde a senha"
                            />
                        </StyledPasswordField>
                        {errors.password?.message ? (
                            <p>{errors.password.message}</p>
                        ) : null}

                        <StyledButton
                            type="submit"
                            buttoncolor="pink"
                            disabled={loading}
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </StyledButton>
                        <span>Ainda não possui uma conta?</span>
                        <StyledLink to="/register" buttoncolor="lightGray">
                            Cadastre-se
                        </StyledLink>
                    </Form>
                </StyledContainer>
            </div>
        </StyledFlexContainer>
    );
};
