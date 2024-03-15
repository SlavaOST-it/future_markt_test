import React from "react";

import s from './TelephoneBlock.module.scss'
import sprite from "../../../assets/icons/sprite.svg";

export const TelephoneBlock = () => {
    return (
        <div className={s.telephone_block}>
            <svg className={s.logo_phone}>
                <use xlinkHref={`${sprite}#phone_logo`}/>
            </svg>

            <a href={'tel: 83451233445'}> 8-345-123-34-45</a>
        </div>
    )
}
