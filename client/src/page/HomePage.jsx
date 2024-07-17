import { useContext } from "react"
import { Contexts } from "../contexts/Context";



export default function HomePage() {
    const { isDarkMode, setIsDarkMode, data, setData } = useContext(Contexts)
    
        console.log(isDarkMode);
        console.log(data);
        console.log(data.length);
    
    return (
        <div className="flex h-screen bg-white">
            <div className="w-4/6 border border-ghost p-4">
                <div className="px-4 py-3 mx-32 mt-8">
                    <img className="rounded" src="https://img.antaranews.com/cache/1200x800/2022/06/07/antarafoto-2022-06-06t190737z_440389118_rc2imu94t7um_rtrmadp_3_apple-developer.jpg.webp" alt="" />


                </div>

                <div className="border border-black shadow mt-8 mx-52 h-10 text-black text-center font-bold">
                    {/* <h1>Harga terakhir Bet</h1> */}
                    <h1>Harga terakhir Bet {data[data.length-1].author}</h1>
                </div>

                <div className="flex justify-center mt-4">
                    <button className="btn btn-success">Tombol Bit</button>
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
                </div>
            </div>
        </div>
    )
}