import React, {FC} from 'react';

import s from './QuantityInfo.module.scss'


type QuantityInfoType = {
    value: string | undefined,
    description: string,

}

export const QuantityInfo: FC<QuantityInfoType> = ({description, value}) => {
    return (
        <div className={s.quantity_info}>
            <span className={s.value}>{value ? value : 0}</span>
            <p className={s.description}>
                {description}
            </p>
        </div>
    );
};
