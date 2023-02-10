import React from 'react';

export function useForm<T>(props) {
    const [values, setValues] = React.useState<T>(props.initialValues);

    return {
        values,
        handleChange: (e: any) => {
            const { value, name } = e.target;

            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm: () => setValues(props.initialValues)
    };
}