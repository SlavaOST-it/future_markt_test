import React from "react";

import s from "./FeedbackMessage.module.scss";

import {Logotype} from "../../../common/components/logotype/Logotype";


export const FeedbackMessage = () => {
    return (
        <div className={s.feedback_message}>
            <div className={s.text_group}>
                <h3 className={s.title}>Спасибо <br/>
                    за заявку
                </h3>

                <p className={s.text}>
                    Я обязательно <br/>
                    свяжусь с вами <br/>
                    в ближайшее время.
                </p>
            </div>

            <div className={s.logo}>
                <Logotype/>
            </div>
        </div>
    )
}
