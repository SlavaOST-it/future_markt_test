import React from 'react';

import './App.scss';
import container from '../common/styles/commonStyles.module.scss'
import {Header} from "../layouts/header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/main/MainPage";
import {PATH} from "../utils/routes/routes";
import {Sidebar} from "../layouts/sidebar/Sidebar";

export const App = () => {
    return (
        <main className={"app"} >
            <div className={'wrapper_color'} >
                <div className={container.container}>
                    <Header/>

                    <Routes>
                        <Route path={PATH.homepage} element={<MainPage/>}/>
                    </Routes>

                </div>
            </div>
        </main>
    );
}
