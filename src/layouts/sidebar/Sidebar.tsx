import React, {FC, useState} from 'react';

import s from './Sidebar.module.scss'
import sprite from "../../assets/icons/sprite.svg";

import {FeedbackForm} from "./feedback_form/FeedbackForm";
import {FeedbackMessage} from "./feedback_message/FeedbackMessage";

import {FormikHelpers} from 'formik';
import {FormValuesType, useValidation} from "../../utils/hooks/useValidation";


type SidebarType = {
    isOpenSidebar: boolean,
    setIsOpenSidebar: (isOpenSidebar: boolean) => void
}

export const Sidebar: FC<SidebarType> = ({isOpenSidebar, setIsOpenSidebar}) => {
    const [showMessage, setShowMessage] = useState(false)

    const {formik} = useValidation()

    const closeSidebar = (formik: FormikHelpers<FormValuesType>) => {
        setIsOpenSidebar(false);
        formik.resetForm();
        setShowMessage(false);
    }

    return (
        <>
            {isOpenSidebar && (
                <div className={s.overlay} onClick={() => closeSidebar(formik)}></div>
            )}

            <aside className={isOpenSidebar
                ? s.sidebar + ' ' + s.is_open
                : s.sidebar + ' ' + s.is_close}
            >

                <div className={s.button_group}>
                    <button className={s.close_btn} onClick={() => closeSidebar(formik)}>
                        <svg className={s.cross_icon}>
                            <use xlinkHref={`${sprite}#cross`}/>
                        </svg>
                    </button>
                </div>

                {showMessage
                    ? <FeedbackMessage/>
                    : <FeedbackForm formik={formik} setShowMessage={setShowMessage}/>
                }
            </aside>
        </>
    );
};
