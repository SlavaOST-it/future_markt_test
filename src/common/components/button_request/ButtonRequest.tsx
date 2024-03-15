import React, {ButtonHTMLAttributes, FC} from 'react';

import s from './ButtonRequest.module.scss'
import sprite from '../../../assets/icons/sprite.svg'

type ButtonRequestType = {
    title: string,
    className?: string,
    theme_btn: 'light' | 'dark'

    onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonRequest: FC<ButtonRequestType> = ({title, onClick, theme_btn, className, ...props}) => {
    return (
        <button onClick={onClick} className={theme_btn === 'light'
            ? s.button_request + ' ' + s.light
            : s.button_request + ' ' + s.dark}
                {...props}
        >
            <span>{title}</span>

            <div className={s.icon_block}>
                <svg className={s.arrow_icon}>
                    <use xlinkHref={`${sprite}#arrow`}/>
                </svg>
            </div>
        </button>
    );
};
