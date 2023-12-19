/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';



function CompleteYourInfo({updateExample, details}) {
    const [openSection, setOpenSection] = useState(0);
    const [firstDetails, setDetails] = useState(details);

    const handleToggle = (index) => {
      setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
    };

    const AddExperience = (info) => {
        return (
            <div>
                <div><label htmlFor="">Company Name</label><input value={info.company} type="text" placeholder="Enter Company Name" className="input w-full h-full" /></div>
                <div><label htmlFor="">Position Title</label><input value={info.position} type="text" placeholder="Enter Position Title" className="input w-full h-full" /></div>
                <div><label htmlFor="">Start Date</label><input value={info.start} type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
                <div><label htmlFor="">End Date</label><input value={info.end} type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
                <div><label htmlFor="">Location</label><input value={info.location} type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
                <div><label htmlFor="">Description</label><input value={info.description} type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
                <div className="flex justify-between mt-4">
              <div><button className="border-2 border-grey rounded-md p-2">🗑️ Delete</button></div>
              <div className="flex gap-4"><button className="border-2 border-red-300 rounded-md p-2">Cancel</button><button className="border-2 border-blue-300 rounded-md p-2">Save</button></div>
                </div>
          </div>
        )
    }

    const AddEducation = () => {
        return (
            <div>
                <div><label htmlFor="">School</label><input type="text" placeholder="Enter School / University" className="input w-full h-full" /></div>
                <div><label htmlFor="">Degree</label><input type="text" placeholder="Enter Degree / Field Of Study" className="input w-full h-full" /></div>
                <div><label htmlFor="">Start Date</label><input type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
                <div><label htmlFor="">End Date</label><input type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
                <div><label htmlFor="">Description</label><input type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
                <div><label htmlFor="">Location</label><input type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
                <div className="flex justify-between mt-4">
                <div><button className="border-2 border-grey rounded-md p-2">🗑️ Delete</button></div>
                <div className="flex gap-4"><button className="border-2 border-red-300 rounded-md p-2">Cancel</button><button className="border-2 border-blue-300 rounded-md p-2">Save</button></div>
                </div>
            </div>
            
        )
    }

    const AddSkills = () => {
        return (
            <div>
                <label htmlFor="">Skills & Knowledge</label>
                <input type="text" placeholder="Enter your Skills" className="input w-full h-full p-4" />
            </div> 
        )
    }

    const CreateInfo = ({text}) => {
        return (
            <button onClick={() => setExperience(AddExperience)} className="buttonCreateInfo">+ {text}</button>
        )
    }

    const EmptyList = () => {
        return (
            <CreateInfo text={'Experience'} />
        )
    }

    
    const ContentList = () => {
      const [eyeState, setEyeState] = useState("../src/assets/eye.png")
      const showOrHide = ({index}) => {
        // Toggle the eye state based on the current stat, hide resume info
        setEyeState(prevState =>
          prevState === "../src/assets/eye-closed.png"
            ? "../src/assets/eye.png"
            : "../src/assets/eye-closed.png"
        );      };
        return (
            <>
            {firstDetails.experience.map((exp, index) => (
              <div key={index} className="divEye">
                <p style={{cursor: 'pointer'}} onClick={() => setExperience(AddExperience(exp))}>{exp.company}</p>
                <img onClick={() => showOrHide(index)} style={{cursor: 'pointer'}} src={eyeState} alt=""  />
              </div>
            ))}
            <CreateInfo text={'Experience'} />
            
          </>
        )
    }

    
    
    let myState = firstDetails.experience.length === 0 
       ? <EmptyList></EmptyList>
       : <ContentList></ContentList>

    const [experience, setExperience] = useState(myState);
    const [education, setEducation] = useState(AddEducation);
    const [skills, setSkills] = useState(AddSkills);


    return (
      <section className="h-full flex flex-col justify-evenly mb-24">
        <div key={0} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 0 ? 'open' : ''}`}>
          <input type="checkbox" onChange={() => handleToggle(0)} checked={openSection === 0} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(0)}>
            Personal Details
          </div>
          <div className="collapse-content">
            <div><label htmlFor="">Full Name</label><input id="name" value={firstDetails.personal.fullname} type="text" placeholder="First and last name" className="input w-full h-full" /></div>
            <div><label htmlFor="">Email</label><input id="email" value={firstDetails.personal.email} type="text" placeholder="Enter email" className="input w-full h-full" /></div>
            <div><label htmlFor="">Phone Number</label><input id="phone" value={firstDetails.personal.phone} type="text" placeholder="Enter phone number" className="input w-full h-full" /></div>
            <div><label htmlFor="">Address</label><input id="address" value={firstDetails.personal.address} type="text" placeholder="City, Country" className="input w-full h-full" /></div>
          </div>
        </div>
        
        <div key={1} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 1 ? 'open' : ''}`}>
          <input type="checkbox" onChange={() => handleToggle(1)} checked={openSection === 1} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(1)}>
            Experience
          </div>
            <div className="collapse-content">
                {experience}
            </div>
        </div>
        
        <div key={2} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 2 ? 'open' : ''}`}>
          <input type="checkbox" onChange={() => handleToggle(2)} checked={openSection === 2} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(2)}>
            Education
          </div>
          <div className="collapse-content">
            {education}
          </div>
        </div>
        
        <div key={3} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 3 ? 'open' : ''}`}>
          <input type="checkbox" onChange={() => handleToggle(3)} checked={openSection === 3} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(3)}>
            Skills
          </div>
          <div className="collapse-content">
            {skills}
          </div>
        </div>
      </section>
    );
}

function CustomizeLayout ({updateLayout, updateColor, updateFonts, color}) {
    const [newColor, setColor] = useState(color);

    function handler (e) {
        updateColor(e.target.value);
        setColor(e.target.value);
    }
    return (
        <section className="flex flex-col items-center justify-around rounded-xl h-4/5 mb-16">
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Layout</h2>
                <div className="flex justify-start gap-4">
                    <button onClick={() => updateLayout('resumeTop')}>
                        <div style={{ background: `linear-gradient(to bottom, ${newColor} 0%, ${newColor} 50%, #ffffff  50%, #ffffff  100%)` }} className="div-position"></div>

                        Top
                    </button>
                    <button onClick={() => updateLayout('resumeLeft')}>
                        <div style={{ background: `linear-gradient(to right, ${newColor} 0%, ${newColor} 50%, #ffffff  50%, #ffffff  100%)` }} className="div-position"></div>

                        Left
                    </button>
                    <button onClick={() => updateLayout('resumeRight')}>
                        <div style={{ background: `linear-gradient(to left, ${newColor} 0%, ${newColor} 50%, #ffffff  50%, #ffffff  100%)` }} className="div-position"></div>

                        Right
                    </button>
                </div>
            </div>
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold">Color</h2>
                <span className="flex items-center">
                    Select Color
                    <input value={newColor} onChange={handler} className="colorPicker ml-2 mb-2 w-16 h-16" type="color" />
                </span>
            </div>
            <div className="bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold mb-2">Fonts</h2>
                <div className="flex justify-start gap-4">
                    <div onClick={() => updateFonts('serif')} className="cursor-pointer transform hover:scale-95 hover:bg-blue-300 border-2 border-black rounded-md p-1 fontsDiv">
                        <p className="text-2xl font-semibold" style={{fontFamily: 'serif'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'serif'}}>Serif</p>
                    </div>
                    <div onClick={() => updateFonts('sans-serif')} className="cursor-pointer transform hover:scale-95 hover:bg-blue-300 border-2 border-black rounded-md p-1 fontsDiv">
                        <p className="text-2xl font-semibold" style={{fontFamily: 'sans-serif'}}>Aa</p>
                        <p className="text-xl" style={{fontFamily: 'sans-serif'}}>Sans</p>
                    </div>
                    <div onClick={() => updateFonts('monospace')} className="cursor-pointer transform hover:scale-95 hover:bg-blue-300 border-2 border-black rounded-md p-1 fontsDiv">
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


export default function CreateResume({updateLayout, updateColor, updateFonts, color, updateExample, details, clear, clearResume}) {
    const [info, changeInfo] = useState(<CompleteYourInfo updateExample={updateExample} details={details}/>);


    function layout() {
      changeInfo(<CustomizeLayout updateLayout={updateLayout} updateColor={updateColor} updateFonts={updateFonts} color={color} />);
    }
    function content() {
        changeInfo(<CompleteYourInfo updateExample={updateExample} details={details}/>);
      }

    function hideResume () {
        clearResume(false)
    }

    function showResume () {
      clearResume(true)
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
              callback={hideResume}
            />
            <Btn
              img={'../src/assets/example.png'}
              alt={'Example'}
              btnClass={'btnExample'}
              text={'Load Example'}
              callback={showResume}
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

  
