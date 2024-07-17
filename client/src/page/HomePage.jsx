
import { useContext, useState } from "react"
import { Contexts } from "../contexts/Context";



export default function HomePage() {
    const [count, setCount] = useState(0);
    const [settingcount,setsettingcount] = useState(0)
    const [lastbit,setlastbit] = useState(0)
    const [log, setLog] = useState([]);

    const handlebit = () => {
        console.log(settingcount)
        setlastbit(settingcount);
        setLog([...log, `Rp.${lastbit}`]);
    };

    const handleevent = (e) => {
        setsettingcount(e.target.value)
        // setlastbit(e.target.value)
    }

    const { isDarkMode, setIsDarkMode, data, setData } = useContext(Contexts)

    {
         console.log(isDarkMode);
         console.log(data);
        //  console.log(data.length);
    }
    return (
        <div className="flex h-screen bg-white">
            <div className="w-4/6 border border-ghost p-4">
                <div className="px-4 py-3 mx-32 mt-8">
                    <img className="rounded" src="https://img.antaranews.com/cache/1200x800/2022/06/07/antarafoto-2022-06-06t190737z_440389118_rc2imu94t7um_rtrmadp_3_apple-developer.jpg.webp" alt="" />
                </div>

                <div className="border border-black shadow mt-8 mx-52 h-10 text-black text-center font-bold">
                    <h1>
                        {/* Harga terakhir Bet {data[data.length - 1].author} */}
                        Harga terakhir Bet : {lastbit}
                        {data.length > 0 && <h1>Harga terakhir Bet {data[data.length-1].author}</h1>}
                    </h1>
                </div>

                <div className="flex justify-center mt-4">
                    <button className="btn btn-success" onClick={handlebit}>BID</button>
                    <div className="p-5 flex gap-3">
                        <label htmlFor="">SetBID</label>
                    <input value={settingcount} onChange={handleevent} type="number" />
                    </div>
                </div>

            </div>
            <div className="w-1/3 border border-ghost p-4">
                <div className="p-4 h-full shadow border border-black text-center text-black font-bold">
                    Bet History
                    {data.map((el, i) => (

                        <div key={i}>
                                <h1>{el.author}</h1>
                        </div>
                    ))}

                    {log.map((entry, index) => (
                        <li key={index}>{entry}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}