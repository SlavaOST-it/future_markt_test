import React, {FC} from 'react';

import s from './MainPage.module.scss'
import img_mentor from '../../assets/images/mentor.png'

import {QuantityInfo} from "../../common/components/quantity_info/QuantityInfo";
import {ButtonRequest} from "../../common/components/button_request/ButtonRequest";

import {dateSum} from "../../utils/support_functions/calculateDateSum";
import {useExchangeRateFetcher} from "../../utils/hooks/useExchangeRateFetcher";


type MainPageType = {
    setIsOpenSidebar: (isOpen: boolean)=>void
}

export const MainPage: FC<MainPageType> = ({setIsOpenSidebar}) => {
    const productivity = useExchangeRateFetcher('GBP')

    const activeSidebarHandler = () => {
        setIsOpenSidebar(true)
    }

    return (
        <main className={s.mainPage}>
            <div className={s.block_info}>
                <h1>Создаю условия <br/>
                    для вашего успеха
                </h1>

                <p className={s.subtitle}>
                    Когда ваше время и энергия лучше сфокусированы, стремление к новым <br/>
                    возможностям становится реальностью, ваш успех зависит от ваших действий
                </p>

                <div className={s.block_buttons}>
                    <ButtonRequest title={'Записаться на консультацию'}
                                   onClick={() => {
                                   }}
                                   theme_btn={"light"}
                    />

                    <ButtonRequest title={'Бесплатная консультация'}
                                   onClick={activeSidebarHandler}
                                   theme_btn={"dark"}
                    />
                </div>

                <div className={s.quantity_block}>
                    <QuantityInfo value={dateSum.toString() + '+'} description={'техника для достижения целей'}/>
                    <QuantityInfo value={productivity?.toString() + '%'} description={'увеличение личной продуктивности'}/>
                </div>
            </div>

            <div className={s.block_img}>
                <img className={s.img_mentor} src={img_mentor} alt={'mentor'}/>
            </div>
        </main>
    );
};
