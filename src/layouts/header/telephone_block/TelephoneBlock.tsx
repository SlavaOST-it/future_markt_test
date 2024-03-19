import React from "react";

import s from './TelephoneBlock.module.scss'
import sprite from "../../../assets/icons/sprite.svg";
import {useDeviceType} from "../../../utils/hooks/useDeviceType";

export const TelephoneBlock = () => {
    const isMobile = useDeviceType()

    return (
        <div className={s.telephone_block}>
            <a href={'tel: 83451233445'}>
                <svg className={s.logo_phone}>
                    <use xlinkHref={`${sprite}#phone_logo`}/>
                </svg>

                {!isMobile && <span> 8-345-123-34-45</span>}
            </a>
        </div>
    )
}
