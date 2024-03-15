import React from 'react';

import s from './NavMenu.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/routes/routes";


// данный массив можно вынести в отдельный файл
const item = [
    { link: PATH.about, title: 'Обо мне' },
    { link: PATH.mentoring, title: 'Наставничество' },
    { link: PATH.events, title: 'Мероприятия' },
    { link: PATH.cases, title: 'Кейсы' },
    { link: PATH.reviews, title: 'Отзывы' },
    { link: PATH.contacts, title: 'Контакты' },
];


// для активной ссылки добавляется класс active
export const NavMenu = () => {
    return (
        <nav>
            <ul className={s.nav_menu}>
                {item.map((el, index) => (
                    <li key={index}>
                        <NavLink to={el.link}
                                 className={({isActive}) => isActive ? s.active_link : s.link}>
                            {el.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

