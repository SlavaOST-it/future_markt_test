import React, {FC} from 'react';
import s from "./CustomInput.module.scss";


type CustomInputType = {
    formik: any,
    id: string,
    type?: string,
    placeholder: string,
}
export const CustomInput: FC<CustomInputType> = ({formik, id, placeholder,type}) => {
    return (
        <div className={s.group}>
            <input
                type={type ? type : 'text'}
                id={id}
                placeholder={placeholder}
                {...formik.getFieldProps(id)}
            />
            <span className={s.highlight}></span>
            <span className={s.bar}></span>


            {formik.touched[id] && formik.errors[id] &&
                <div>{formik.errors[id]}</div>}
        </div>
    );
};
