import { useContext, useEffect, useState } from "react"
import { Contexts } from "../contexts/Context";
import socket from "../socket";



export default function HomePage() {
    const [count, setCount] = useState(5000);
    // const [settingcount, setsettingcount] = useState(0)
    // const [lastbit, setlastbit] = useState(0)
    const [log, setLog] = useState([]);

    const [dataBid, setDataBid] = useState([])

    // const handlebit = () => {
    //     try {
    //         // console.log(settingcount)
    //         setlastbit(settingcount);
    //         setLog([...log, `Rp.${lastbit}`]);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // const postdata = () => {
    //     try {


    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const handleevent = (e) => {
    //     setsettingcount(e.target.value)
    //     // setlastbit(e.target.value)
    // }
    // console.log(dataBid);
    const handleAdd = () => {
        let newValue = count + 1000;
        setCount(newValue)
        console.log(newValue, `ini data dari handle`);

        socket.emit('count',
            {
                latestBid: newValue,
                username: "dadang",
                // productId: 1
            }
        );
    }

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


        // socket.on('product-' + productId, () => {

        // })


        return () => {
            socket.off('message');
            socket.off('result');
            socket.off('count');
        }
    }, []);


    // const { isDarkMode, setIsDarkMode, data, setData, fectData } = useContext(Contexts)
    // // {

    // //      console.log(isDarkMode);
    // //      console.log(data);
    // //  console.log(data.length);
    // // }

    // useEffect(() => {
    //     data
    // }, []);

    return (
        <div className="flex h-screen bg-white">
            <div className="w-4/6 border border-ghost p-4">
                <div className="px-4 py-3 mx-32 mt-8">
                    <img className="rounded" src="https://img.antaranews.com/cache/1200x800/2022/06/07/antarafoto-2022-06-06t190737z_440389118_rc2imu94t7um_rtrmadp_3_apple-developer.jpg.webp" alt="" />
                </div>

                <div className="border border-black shadow mt-8 mx-52 h-10 text-black text-center font-bold">
                    <h1>
                        {/* Harga terakhir Bet {data[data.length - 1].author} */}
                        {/* Harga terakhir Bid :  */}
                        {count}
                        {/* {data.length > 0 && <h1>Harga terakhir Bid {data[data.length - 1].author}</h1>} */}
                    </h1>
                </div>

              
                    <div className="flex justify-center mt-4">
                        <button className="btn btn-success" type="submit">BID</button>
                        <button className='bg-blue-600 px-4 py-2 rounded-full text-white' onClick={handleAdd}>Increment Count</button>
                    </div>
          

            </div>
            <div className="w-1/3 border border-ghost p-4">
                <div className="p-4 h-full shadow border border-black text-center text-black font-bold">
                    Bet History

                    {dataBid.map((el, i) => (
                        <div key={i}>
                            <h1>{el.username}</h1>
                            <h1>{el.latestBid}</h1>
                        </div>
                    ))}

                    {/* {log.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))} */}
                </div>
            </div>
        </div>
    )
}