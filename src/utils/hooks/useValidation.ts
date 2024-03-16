import {useFormik} from "formik";
import * as Yup from "yup";


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export type FormValuesType = {
    from_name: string;
    number_phone: string;
    consent: boolean;
};

export const useValidation = () => {
    const formik = useFormik({
        initialValues: {
            from_name: '',
            number_phone: '',
            consent: false,
        },

        validationSchema: Yup.object({
            from_name: Yup.string().required('* Обязательное поле'),
            number_phone: Yup.string().required('* Обязательное поле').matches(phoneRegExp, 'Не валидный номер'),
            consent: Yup.boolean().required('* Обязательное поле')
                .oneOf([true], "* Подтвердите согласие")
        }),

        onSubmit: (values) => {
            if (values.consent === true) {
                localStorage.setItem('formValues', JSON.stringify({
                    name: values.from_name,
                    phone_number: values.number_phone,
                    consent: values.consent
                }));

                formik.resetForm();
            }
        }
    })

    return {
        formik
    }
}