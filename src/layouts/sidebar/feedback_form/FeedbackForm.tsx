import React, {FC, useState} from "react";

import s from "../Sidebar.module.scss";

import {CustomInput} from "../../../common/components/custom_input/CustomInput";
import {ButtonRequest} from "../../../common/components/button_request/ButtonRequest";
import {CustomCheckbox} from "../../../common/components/custom_checkbox/CustomCheckbox";


type FeedbackFormType = {
    formik: any,
    setShowMessage: (isShowMessage: boolean) => void
}

export const FeedbackForm: FC<FeedbackFormType> = ({formik, setShowMessage}) => {
    const [showError, setShowError] = useState(false);


    const submitForm = (formik: any) => {
        setShowError(true)

        if (formik.values.consent && Object.keys(formik.errors).length === 0) {
            setShowError(false)
            formik.submitForm()
            setShowMessage(true)
        }
    }

    return (
        <div>
            <h3>
                Закажите <br/>
                обратный звонок
            </h3>

            <form onSubmit={formik.handleSubmit}>
                <div className={s.input_group}>
                    <CustomInput formik={formik} id={'from_name'} placeholder={'ИМЯ'}/>
                    <CustomInput formik={formik} id={'number_phone'} placeholder={'ТЕЛЕФОН'}/>
                </div>

                <CustomCheckbox formik={formik} showError={showError}/>

                <ButtonRequest title={'Заказать обратный звонок'}
                               theme_btn={"dark"}
                               onClick={() => submitForm(formik)}
                               disabled={formik.isSubmitting}
                />
            </form>
        </div>
    )
}
