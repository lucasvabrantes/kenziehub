import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, id, ...rest }, ref) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input {...rest} ref={ref} />
            {error ? <p>{error.message}</p> : null}
        </>
    );
});
