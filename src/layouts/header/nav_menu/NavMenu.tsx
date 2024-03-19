import React from 'react';
import {NavLink} from "react-router-dom";

import s from './NavMenu.module.scss'
import sprite from '../../../assets/icons/sprite.svg'

import {PATH} from "../../../utils/routes/routes";
import {useDeviceType} from "../../../utils/hooks/useDeviceType";


// данный массив можно вынести в отдельный файл
const item = [
    { link: PATH.about, title: 'Обо мне' },
    { link: PATH.mentoring, title: 'Наставничество' },
    { link: PATH.events, title: 'Мероприятия' },
    { link: PATH.cases, title: 'Кейсы' },
    { link: PATH.reviews, title: 'Отзывы' },
    { link: PATH.contacts, title: 'Контакты' },
];

export const NavMenu = () => {
    const isMobile = useDeviceType()

    return (
        <nav>
            {isMobile
                ? <svg className={s.logo_phone}>
                    <use xlinkHref={`${sprite}#menu_mobile`}/>
                </svg>

                : <ul className={s.nav_menu}>
                    {item.map((el, index) => (
                        <li key={index}>
                            <NavLink to={el.link}
                                     className={({isActive}) => isActive ? s.active_link : s.link}>
                                {el.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            }

        </nav>
    );
};

