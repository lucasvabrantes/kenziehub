import { forwardRef } from "react";

export const Select = forwardRef(({ error, ...rest }, ref) => {
    return (
        <>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select
                refname="course_module"
                id="course_module"
                {...rest}
                ref={ref}
            >
                <option value="">Selecionar Módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                    Primeiro módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                    Segundo módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                    Terceiro módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                    Quarto módulo
                </option>
            </select>
            {error ? <p>{error.message}</p> : null}
        </>
    );
});
