import React, {FC} from 'react';

import s from './CustomCheckbox.module.scss'


type CustomCheckboxType = {
    formik: any,
    showError: boolean;
}

export const CustomCheckbox: FC<CustomCheckboxType> = ({formik, showError}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.checkbox_group}>
                <input
                    className={s.custom_checkbox}
                    type={'checkbox'}
                    id={'consent'}
                    name={"consent"}
                    onChange={formik.handleChange}
                    checked={formik.values.consent}


                /> <span>Согласен на сохранение и обработку <br/>
            персональных данных</span>

            </div>

            {(!formik.values.consent && showError) &&
                <div>{formik.errors.consent}</div>}
        </div>
    );
};
