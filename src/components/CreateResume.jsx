/* eslint-disable react/prop-types */
import { useState } from "react"


function CompleteYourInfo () {
    return (
        <section className="h-full flex flex-col justify-between">
            <div className="collapse bg-white">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Personal Details
                </div>
                 <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-white">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Experience
                </div>
                 <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-white">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Education
                </div>
                 <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-white">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Skills
                </div>
                 <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
        </section>
    )
}

function CustomizeLayout () {
    return (
        <section className="flex flex-col items-center justify-evenly rounded-xl h-3/5">
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold">Layout</h2>
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
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold">Color</h2>
                <span className="flex items-center">
                    Select Color
                    <input className="ml-4 w-16 h-16 rounded-full" type="color" />
                </span>
            </div>
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold">Fonts</h2>
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


function Btn ({img, alt, text, btnClass, callback}) {

    return (
        <button className={`btnEdit ${btnClass}`} onClick={callback}>
            <img className="m-auto h-1/2 mb-2" src={img} alt={alt} />
            {text}
        </button>
    )
}


export default function CreateResume() {
    const [info, changeInfo] = useState(<CompleteYourInfo />);
  
    function layout() {
      changeInfo(<CustomizeLayout />);
    }
    function content() {
        changeInfo(<CompleteYourInfo />);
      }
  
    return (
      <div className="infoSection">
        <div className="flex mb-8 rounded-2xl">
            <Btn
              img={'../src/assets/file.png'}
              alt={'Content'}
              btnClass={'btnContent rounded-l-xl'}
              text={'Personal Info'}
              callback={content}
            />
            <Btn
              img={'../src/assets/edit.png'}
              alt={'Edit'}
              btnClass={'btnCustomize'}
              text={'Customize Layout'}
              callback={layout}
            />
            <Btn
              img={'../src/assets/clear.png'}
              alt={'Clear'}
              btnClass={'btnClear'}
              text={'Clear Resume'}
            />
            <Btn
              img={'../src/assets/example.png'}
              alt={'Example'}
              btnClass={'btnExample'}
              text={'Load Example'}
            />
            <Btn
              img={'../src/assets/pdf.png'}
              alt={'PDF Downloader'}
              btnClass={'btnPDF rounded-e-xl'}
              text={'Download PDF'}
            />
          </div>
        {info}
      </div>
    );
  }
  
