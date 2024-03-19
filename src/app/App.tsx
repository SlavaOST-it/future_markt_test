import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";

import './App.scss';
import container from '../common/styles/commonStyles.module.scss'

import {Header} from "../layouts/header/Header";
import {MainPage} from "../pages/main/MainPage";
import {Sidebar} from "../layouts/sidebar/Sidebar";

import {PATH} from "../utils/routes/routes";


export const App = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    return (
        <main className={"app"} >
            <div className={'wrapper_color'} >
                <div className={container.container}>
                    <Header/>

                    <Sidebar
                        isOpenSidebar={isOpenSidebar}
                        setIsOpenSidebar={setIsOpenSidebar}
                    />

                    <Routes>
                        <Route path={PATH.homepage} element={<MainPage setIsOpenSidebar={setIsOpenSidebar}/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    );
}
