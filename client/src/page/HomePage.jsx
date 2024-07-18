import { useContext, useEffect, useState } from "react"
import { Contexts } from "../contexts/Context";
import socket from "../socket";
import { alertSuccess } from "../utils/toastify";



export default function HomePage() {


    const { count, setCount, dataBid, setDataBid } = useContext(Contexts)
    //apa
    const [loading, setloading] = useState(false)


    const handleAdd = () => {
        setTimeout(() => {
            setloading(true)
            console.log(loading)
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
            setloading(false)
        }, 750);
        alertSuccess('Berhasil melakukan bid!')

    }

    return (
        <div className="flex h-screen bg-yellow-300">
            <div className="w-4/6 p-4">
                <div className="flex justify-center items-center px-4 py-3 mx-32 mt-8">
                    <img className="rounded w-96 h-96 items-center" src="https://res.cloudinary.com/dw0jf1xvd/image/upload/v1721272889/t4m8m93cbjvjh0kodnoq.jpg" alt="" />
                </div>

                <div className="border-4 border-black shadow text-center rounded-xl text-black p-8 font-bold">
                    <h1 className=" text-6xl">

                        Rp.{count}

                    </h1>
                    <div className="mt-4">
                        <h5>Description</h5>
                        <p>barang langka</p>
                    </div>
                    <div className="flex justify-center mt-4">
                        {loading === true ? <button className='bg-blue-600 px-4 py-2 rounded-full text-white'>Loading...</button> : <button className='bg-blue-600 px-4 py-2 rounded-full text-white' onClick={handleAdd}>add Bid</button>
                        }
                    </div>
                </div>

            </div>

            <div className="w-1/3 border border-ghost p-4 bg-slate-700 h-full">
                <div className="sticky top-0 z-10 text-center font-bold border-4 rounded bg-yellow-600 border-black">
                    Bid History
                </div>
                <div className="overflow-auto p-4 h-full text-black">

                    {dataBid.slice().reverse().map((el, i) => {
                        if (el.username === localStorage.getItem('username')) {
                            return (
                                <div className="flex flex-col-reverse text-2xl px-2" key={i}>
                                    <h1 className="items-end"> <span className=" font-bold text-cyan-600">{el.username}:</span> <span className=" font-bold text-green-500">Rp.{el.latestBid}</span></h1>
                                </div>
                            )
                        } else {
                            return (
                                <div className="flex flex-col-reverse text-2xl px-2" key={i}>
                                    <h1 className="items-start"> <span className=" font-bold text-amber-300">{el.username}:</span> <span className=" font-bold text-green-500">Rp.{el.latestBid}</span></h1>
                                </div>
                            )
                        }


                    })}

                </div>
            </div>
        </div>
    )
}