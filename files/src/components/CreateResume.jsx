/* eslint-disable react/prop-types */
import { useState } from "react"




function CompleteYourInfo () {
    return (
        <section className="h-full flex flex-col justify-evenly mb-24">
            <div className="collapse bg-white mt-4 mb-4 min-w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Personal Details
                </div>
                 <div className="collapse-content"> 
                    <div><label htmlFor="">Full Name</label><input type="text" placeholder="First and last name" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Email</label><input type="text" placeholder="Enter email" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Phone Number</label><input type="text" placeholder="Enter phone number" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Address</label><input type="text" placeholder="City, Country" className="input w-full h-full" /></div>
                </div>
            </div>
            <div className="collapse bg-white mt-4 mb-4 min-w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Experience
                </div>
                <div className="collapse-content"> 
                    <div><label htmlFor="">Company Name</label><input type="text" placeholder="Enter Company Name" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Position Title</label><input type="text" placeholder="Enter Position Title" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Start Date</label><input type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
                    <div><label htmlFor="">End Date</label><input type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Location</label><input type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Description</label><input type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
                    <div className="flex justify-between mt-4">
                        <div><button className="border-2 border-grey rounded-md p-2">🗑️ Delete</button></div>
                        <div className="flex gap-4"><button className="border-2 border-red-300 rounded-md p-2">Cancel</button><button className="border-2 border-blue-300 rounded-md p-2">Save</button></div>
                    </div>
                </div>
            </div>
            <div className="collapse bg-white mt-4 mb-4 min-w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Education
                </div> 
                 <div className="collapse-content"> 
                    <div><label htmlFor="">School</label><input type="text" placeholder="Enter School / University" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Degree</label><input type="text" placeholder="Enter Degree / Field Of Study" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Start Date</label><input type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
                    <div><label htmlFor="">End Date</label><input type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
                    <div><label htmlFor="">Location</label><input type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
                    <div className="flex justify-between mt-4">
                        <div><button className="border-2 border-grey rounded-md p-2">🗑️ Delete</button></div>
                        <div className="flex gap-4"><button className="border-2 border-red-300 rounded-md p-2">Cancel</button><button className="border-2 border-blue-300 rounded-md p-2">Save</button></div>
                    </div>
                </div>
            </div>
            <div className="collapse bg-white mt-4 mb-4 min-w-full">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                Skills
                </div>
                 <div className="collapse-content"> 
                    <div><label htmlFor="">Skills & Knowledge</label><input type="text" placeholder="Enter your Skills" className="input w-full h-full p-4" /></div>
                </div>
            </div> 
        </section>
    )
}

function CustomizeLayout () {
    return (
        <section className="flex flex-col items-center justify-around rounded-xl h-4/5 mb-16">
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Layout</h2>
                <div className="flex justify-start gap-4">
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
                    <input className="colorPicker ml-2 mb-2 w-16 h-16" type="color" />
                </span>
            </div>
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Fonts</h2>
                <div className="flex justify-start gap-4">
                    <div className="border-2 border-black rounded-md p-1">
                        <p className="text-2xl font-semibold" style={{fontFamily: 'serif'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'serif'}}>Serif</p>
                    </div>
                    <div className="border-2 border-black rounded-md p-1">
                        <p className="text-2xl font-semibold" style={{fontFamily: 'sans-serif'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'sans-serif'}}>Sans</p>
                    </div>
                    <div className="border-2 border-black rounded-md p-1">
                        <p className="text-2xl font-semibold" style={{fontFamily: 'monospace'}}>Aa</p>
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
  
