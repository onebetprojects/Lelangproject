import { useContext, useEffect, useState } from "react"
import { Contexts } from "../contexts/Context";
import socket from "../socket";



export default function HomePage() {
    const [count, setCount] = useState(5000);
    // const [settingcount, setsettingcount] = useState(0)
    // const [lastbit, setlastbit] = useState(0)
    // const [log, setLog] = useState([]);

    console.log({ count }, "latest count")

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
                username: localStorage.getItem('username'),
                // productId: 1
            }
        );

    }

    useEffect(() => {
        socket.connect()

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
        <div className="flex h-screen bg-yellow-300">
            <div className="w-4/6 border border-ghost p-4">
                <div className="px-4 py-3 mx-32 mt-8">
                    <img className="rounded" src="https://img.antaranews.com/cache/1200x800/2022/06/07/antarafoto-2022-06-06t190737z_440389118_rc2imu94t7um_rtrmadp_3_apple-developer.jpg.webp" alt="" />
                </div>

                <div className="border-4 border-black shadow text-center rounded-xl text-black p-8 font-bold">
                    <h1 className=" text-6xl">
                        {/* Harga terakhir Bet {data[data.length - 1].author} */}

                        {/* Harga terakhir Bid :  */}
                        Rp.{count}
                        {/* {data.length > 0 && <h1>Harga terakhir Bid {data[data.length - 1].author}</h1>} */}

                    </h1>
                    <div className="mt-4">
                        <h5>Description</h5>
                        <p>barang langka</p>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className='bg-blue-600 px-4 py-2 rounded-full text-white' onClick={handleAdd}>add Bid</button>
                    </div>
                </div>
        
            </div>

            <div className="w-1/3 border border-ghost p-4 bg-slate-700">
                <div className="overflow-auto p-4 h-full text-black">
                    <div className="sticky top-0 z-10 text-center font-bold border-4 rounded bg-yellow-600 border-black">
                    Bid History
                    </div>
                    
                    {dataBid.map((el, i) => (
                        <div className=" text-2xl px-2" key={i}>
                            <h1><span className=" font-semibold">({(i+1)})</span> <span className=" font-bold text-amber-300">{el.username}:</span> <span className=" font-bold text-green-500">Rp.{el.latestBid}</span></h1>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}