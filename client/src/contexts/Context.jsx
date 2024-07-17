import { createContext, useEffect, useState } from "react";
// import ServerApi from "../helpers/ServerApi";
import socket from "../socket";

const Context = createContext({});

const ContextProvider = ({ children }) => {
 
    const [count, setCount] = useState(5000);
    const [dataBid, setDataBid] = useState([])


    useEffect(() => {
        // handleGetDAta()
        socket.on('message', (data) => {
            console.log(data, 'aaaa');
            setDataBid(data)

            // set initial count pas halaman dibuka
            if (data.length) {
                setCount(data[data.length - 1].latestBid)
            }
        });

        socket.on('result', (args) => {
            // console.log(args.lastBid, "<<----");
            setDataBid(lastData => lastData.concat(args))
            // set count saat ada bid baru dari siapapun
            setCount(args.latestBid)

        })

        return () => {
            socket.off('message');
            socket.off('result');
            socket.off('count');
        }
    }, []);


    return (
        <Context.Provider value={{
            count,
            setCount,
            dataBid,
            setDataBid
            
        }}>
            {children}
        </Context.Provider>
    );
};

export const Contexts = Context;

export default ContextProvider;


