import React from 'react';

import s from './Header.module.scss'

import {Logotype} from "../../common/components/logotype/Logotype";
import {TelephoneBlock} from "./telephone_block/TelephoneBlock";
import {NavMenu} from "./nav_menu/NavMenu";

export const Header = () => {
    return (
        <header className={s.header}>
            <Logotype/>
            <NavMenu/>
            <TelephoneBlock/>
        </header>
    );
};

