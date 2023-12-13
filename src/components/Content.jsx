import { useState } from "react"

function showContent () {

}

function Content () {
    return (
        <h2>Content</h2>
    )
}

function Customize () {
    return (
        <section className="flex flex-wrap justify-evenly h-full">
            <div className="w-full pl-8 flex flex-col justify-evenly shadow-lg rounded-xl">
                <h2 className="text-3xl">Layout</h2>
                <div className="flex justify-around">
                    <button>
                        <div className="div-top"></div>
                        Top
                    </button>
                    <button>
                        <div className="div-left"></div>
                        Left
                    </button>
                    <button>
                        <div className="div-right"></div>
                        Right
                    </button>
                </div>
            </div>
            <div className="w-full pl-8 flex flex-col justify-evenly shadow-lg rounded-xl">
                <h2 className="text-3xl">Color</h2>
                <span className="flex items-center">
                    Select Color
                    <input className="ml-4 w-16 h-16 rounded-full" type="color" />
                </span>
            </div>
            <div className="w-full pl-8 flex flex-col justify-evenly shadow-lg rounded-xl">
                <h2 className="text-3xl">Fonts</h2>
                <div className="flex justify-around">
                    <div>
                        <p className="text-3xl font-semibold" style={{fontFamily: 'serif'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'serif'}}>Serif</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold" style={{fontFamily: 'sans-serif'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'sans-serif'}}>Sans</p>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold" style={{fontFamily: 'monospace'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'monospace'}}>Mono</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function InfoSection () {
    const [info, changeInfo] = useState(<Customize />);
    return (
        <div className="infoSection">
            {info}
        </div>
    )
}
