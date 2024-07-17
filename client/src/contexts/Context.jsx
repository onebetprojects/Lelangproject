import { createContext, useEffect, useState } from "react";
import ServerApi from "../helpers/ServerApi";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [data, setData] = useState();

    async function fectData() {
        try {
            let dataApi = await ServerApi({
                url: '/v2/top-headlines?country=id&apiKey=c8381381b29e4cb9a2228ec1431e06c5',
                method: 'GET',
                // headers: {
                //     "Authorization": `Bearer ${localStorage.getItem(`token`)}`
                // }

            });

            console.log(dataApi.data);
            setData(dataApi.data.articles)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(data);

    useEffect(() => {
        fectData();
    }, []);
    return (
        <Context.Provider value={{ isDarkMode, setIsDarkMode, data, setData }}>
            {children}
        </Context.Provider>
    );
};

export const Contexts = Context;

export default ContextProvider;


