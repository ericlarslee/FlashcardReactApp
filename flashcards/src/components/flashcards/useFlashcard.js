import { useState } from 'react';

export const useFlashcard = initialValues => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.values
            });
        }
    ];
};