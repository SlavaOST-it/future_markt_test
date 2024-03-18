import { useState, useEffect } from "react";


type ResponseType = {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: ValuteListType;
};

type ValuteListType = {
    [key: string]: ValuteType;
};

type ValuteType = {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
};

export const useExchangeRateFetcher = (nameValute: string) => {
    const [exchangeRates, setExchangeRates] = useState<ValuteType | null>(null);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
                const data: ResponseType = await response.json();

                if (data.Valute && data.Valute[nameValute]) {
                    setExchangeRates(data.Valute[nameValute]);
                } else {
                    console.log(`Информация о курсе валюты ${nameValute} не найдена`);
                }
            } catch (error) {
                console.error('Произошла ошибка при получении данных:', error);
            }
        };

        fetchExchangeRates();
    }, [nameValute]);

    const result = exchangeRates?.Value ? exchangeRates.Value : 0
    return Math.round(result);
};