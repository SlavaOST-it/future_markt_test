import React from 'react';

import s from './Logotype.module.scss'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../utils/routes/routes";

export const Logotype = () => {
    return (
        <div>
            <NavLink to={PATH.homepage} className={s.logo}>ALEX. SHEVTSOV</NavLink>
        </div>
    );
};
