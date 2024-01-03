/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"


function CustomizeLayout ({updateLayout, updateColor, updateFonts, color, hideLayout}) {
    const [newColor, setColor] = useState(color);

    function handler (e) {
        updateColor(e.target.value);
        setColor(e.target.value);
    }
    const myClass = hideLayout ? "hidden" : 'layout';
    return (
        <section className={`contentSection flex flex-col items-center justify-around h-4/5 mb-16 ${myClass}`}>
            <div className="layoutDivs bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
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
            <div className="layoutDivs bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
                <h2 className="text-3xl font-bold">Color</h2>
                <span className="flex items-center">
                    Select Color
                    <input value={newColor} onChange={handler} className="colorPicker ml-2 mb-2 w-16 h-16" type="color" />
                </span>
            </div>
            <div className="layoutDivs bg-slate-100 w-full h-1/4 pl-8 flex flex-col justify-evenly border-2 border-grey rounded-xl">
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
        <button className={`btnEdit ${btnClass} `} onClick={callback}>
            <img className="m-auto h-1/2 mb-2" src={img} alt={alt} />
            {text}
        </button>
    )
}


function CompleteYourInfo({example, updateExample, hideContent, updateVisible}) {
  const [openSection, setOpenSection] = useState(0);

  function handleToggle (index) {
    setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
  }

  function setDetails (e, categorie, section) {
      const newInfo = JSON.parse(JSON.stringify(example));
      newInfo[categorie][section] = e.target.value
      updateExample(newInfo)
      updateVisible(true)
  }

  function setInfo (e, categorie, index, section) {
    const newInfo = {...example};
    newInfo[categorie][index][section] = e.target.value
    updateExample(newInfo)
    updateVisible(true)
  }

  const [eduIndex, setEduIndex] = useState(0)
  const [expIndex, setExpIndex] = useState(0)


  function goNextEdu () {
    if (eduIndex + 1 > example.education.length - 1) return;
    setEduIndex(eduIndex + 1)
  }

  function goNextExp () {
    if (expIndex + 1 > example.experience.length - 1) return;
    setExpIndex(expIndex + 1)
  }

  function goBackwardsEdu () {
    if (eduIndex -1 < 0 ) return;
    setEduIndex(eduIndex - 1)
  }

  function goBackwardsExp () {
    if (expIndex -1 < 0 ) return;
    setExpIndex(expIndex - 1)
  }
  

  const myClass = hideContent ? "hidden" : '';
  return (
    <section className={`contentSection h-full flex flex-col justify-evenly mb-24 ${myClass}`}>
      <div key={0} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 0 ? 'open' : ''}`}>
        <input type="checkbox" onChange={() => handleToggle(0)} checked={openSection === 0} />
        <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(0)}>
          Personal information
        </div>
        <div className="collapse-content">
          <div><label htmlFor="">Full Name</label><input id="name" onChange={(e) => setDetails(e, 'personal', 'fullname')} value={example.personal.fullname} type="text" placeholder="First and last name" className="input w-full h-full" /></div>
          <div><label htmlFor="">Email</label><input id="email" onChange={(e) => setDetails(e, 'personal', 'email')} value={example.personal.email} type="text" placeholder="Enter email" className="input w-full h-full" /></div>
          <div><label htmlFor="">Phone Number</label><input id="phone" onChange={(e) => setDetails(e, 'personal', 'phone')} value={example.personal.phone} type="text" placeholder="Enter phone number" className="input w-full h-full" /></div>
          <div><label htmlFor="">Address</label><input id="address" onChange={(e) => setDetails(e, 'personal', 'address')} value={example.personal.address} type="text" placeholder="City, Country" className="input w-full h-full" /></div>
        </div>
      </div>

      <div key={1} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 1 ? 'open' : ''}`}>
        <input type="checkbox" onChange={() => handleToggle(1)} checked={openSection === 1} />
        <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(1)}>
          Experience
        </div>
        <div className="collapse-content">
        <div key={0} className={expIndex === 0 ? '' : 'hidden'}>
              <div><label htmlFor="">Company</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'company')} value={example.experience[0].company} type="text" placeholder="Enter School / University" className="input w-full h-full" /></div>
              <div><label htmlFor="">Position</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'position')} value={example.experience[0].position} type="text" placeholder="Enter Degree / Field Of Study" className="input w-full h-full" /></div>
              <div><label htmlFor="">Start Date</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'start')} value={example.experience[0].start} type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">End Date</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'end')} value={example.experience[0].end} type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">Description</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'description')} value={example.experience[0].description} type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
              <div className="mb-4"><label htmlFor="">Location</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'location')} value={example.experience[0].location} type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
        </div>
        
        <div key={1} className={expIndex === 1 ? '' : 'hidden'}>
              <div><label htmlFor="">Company</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'company')} value={example.experience[1].company} type="text" placeholder="Enter School / University" className="input w-full h-full" /></div>
              <div><label htmlFor="">Position</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'position')} value={example.experience[1].position} type="text" placeholder="Enter Degree / Field Of Study" className="input w-full h-full" /></div>
              <div><label htmlFor="">Start Date</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'start')} value={example.experience[1].start} type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">End Date</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'end')} value={example.experience[1].end} type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">Description</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'description')} value={example.experience[1].description} type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
              <div className="mb-4"><label htmlFor="">Location</label><input onChange={(e) => setInfo(e, 'experience', expIndex, 'location')} value={example.experience[1].location} type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
        </div>

        <div className="flex justify-between w-full">
                <div className="w-full">
                  <div className="flex w-full justify-start gap-8">
                    <button onClick={() => goBackwardsExp()}>Previous</button>
                    <button onClick={() => goNextExp() }>Next</button>
                  <p className="text-right w-full font-semibold">Page {expIndex + 1} / {example.experience.length}</p>
                  </div>
                </div>
        </div>
        </div>
      </div>
      
      <div key={2} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 2 ? 'open' : ''}`}>
        <input type="checkbox" onChange={() => handleToggle(2)} checked={openSection === 2} />
        <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(2)}>
          Education
        </div>
        <div className="collapse-content">
        <div key={0} className={eduIndex === 0 ? '' : 'hidden'}>
              <div><label htmlFor="">School</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'school')} value={example.education[0].school} type="text" placeholder="Enter School / University" className="input w-full h-full" /></div>
              <div><label htmlFor="">Degree</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'degree')} value={example.education[0].degree} type="text" placeholder="Enter Degree / Field Of Study" className="input w-full h-full" /></div>
              <div><label htmlFor="">Start Date</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'start')} value={example.education[0].start} type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">End Date</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'end')} value={example.education[0].end} type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">Description</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'description')} value={example.education[0].description} type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
              <div className="mb-4"><label htmlFor="">Location</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'location')} value={example.education[0].location} type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
        </div>
        
        <div key={1} className={eduIndex === 1 ? '' : 'hidden'}>
              <div><label htmlFor="">School</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'school')} value={example.education[1].school ||''} type="text" placeholder="Enter School / University" className="input w-full h-full" /></div>
              <div><label htmlFor="">Degree</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'degree')} value={example.education[1].degree ||''} type="text" placeholder="Enter Degree / Field Of Study" className="input w-full h-full" /></div>
              <div><label htmlFor="">Start Date</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'start')} value={example.education[1].start ||''} type="text" placeholder="Enter Start Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">End Date</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'end')} value={example.education[1].end ||''} type="text" placeholder="Enter End Date" className="input w-full h-full" /></div>
              <div><label htmlFor="">Description</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'description')} value={example.education[1].description ||''} type="text" placeholder="Enter Description" className="input w-full h-full" /></div>
              <div className="mb-4"><label htmlFor="">Location</label><input onChange={(e) => setInfo(e, 'education', eduIndex, 'location')} value={example.education[1].location ||''} type="text" placeholder="Enter Location" className="input w-full h-full" /></div>
        </div>

        <div className="flex justify-between w-full">
                <div className="w-full">
                  <div className="flex w-full justify-start gap-8">
                    <button onClick={() => goBackwardsEdu()}>Previous</button>
                    <button onClick={() => goNextEdu() }>Next</button>
                  <p className="text-right w-full font-semibold">Page {eduIndex + 1} / {example.education.length}</p>
                  </div>
                </div>
        </div>
        </div>
      </div>
      
      <div key={3} className={`collapse bg-white mt-4 mb-4 min-w-full ${openSection === 3 ? 'open' : ''}`}>
        <input type="checkbox" onChange={() => handleToggle(3)} checked={openSection === 3} />
        <div className="collapse-title text-xl font-medium" onClick={() => handleToggle(3)}>
          Skills
        </div>
        <div className="collapse-content">
        <div>
              <label htmlFor="">Skills & Knowledge</label>
              <input onChange={(e) => setDetails(e, 'skills', 0)} value={example.skills} type="text" placeholder="Enter your Skills" className="input w-full h-full p-4" />
          </div> 
        </div>
      </div>
    </section>
  );
  }


export default function CreateResume({updateLayout, updateColor, updateFonts, color, example, updateExample, updateVisible}) {
  const InfoExample = 
  {
    personal: {
      fullname: 'Franco Nicolas Mendez',
      email: 'francomendezok@gmail.com',
      phone: '+5493513930405',
      address: 'Cordoba, Argentina',
    },
    experience: [
      {
        company: 'Ama Hogar',
        position: 'Full Stack Developer',
        start: '12/17/23',
        end: 'present',
        location: 'Cordoba, Argentina',
        description: 'Full Stack Developer focus on Front End with HTML, CSS, JavaScript and React. Responsive and Mobile Device'
      },
      {
        company: 'Castelldefels',
        position: 'Waiter',
        start: '12/17/23',
        end: 'past',
        location: 'Barcelona, Spain',
        description: 'Waiter, Street Publicity'
      }
    
    ],
    education: [
      {
        school: 'The Odin Project',
        degree: 'Full Stack Developer',
        start: '04/10/23',
        end: '02/01/24',
        location: 'Remote',
        description: 'Full Stack Developer focus on Front End with HTML, CSS, JavaScript and React. Responsive and Mobile Device'
      },

      {
        school: 'Helsinsky University',
        degree: 'Full Stack Open',
        start: '04/10/23',
        end: '02/01/24',
        location: 'Remote',
        description: 'React, MongoDB, GraphQl, Redux'
      }
    ],
    skills: [
      'HTML, CSS, JavaScript, TailwindCSS, React'
    ]
  }

    const [hideContent, setHideContent] = useState(false)
    const [hideLayout, setHideLayout] = useState(true)
    
    function emptyExample (obj) {
    obj.skills = []
    for (const prop in obj.personal) {
      obj.personal[prop] = ''
    }
    obj.experience.forEach(exp => {
      for (const prop in exp) {
        exp[prop] = ''
      }
    })
    obj.education.forEach(exp => {
      for (const prop in exp) {
        exp[prop] = ''
      }
    })
    }

    function Layout() {
      setHideLayout(false)
      setHideContent(true)
    }

    function Content() {
        setHideLayout(true)
        setHideContent(false)
    }

    function hideResume () {
      const newInfo = {...example};
      emptyExample(newInfo)
      updateExample(newInfo)
      updateVisible(false)
    }

    function showResume () {
      updateExample(InfoExample)
      updateVisible(true)
    }

    return (
      <div className="infoSection">
        <div className="buttonContainer flex mb-8 rounded-2xl">
            <Btn
              img={'./src/assets/file.png'}
              alt={'Content'}
              btnClass={'btnContent rounded-l-xl'}
              text={'Personal Info'}
              callback={Content}
            />
            <Btn
              img={'./src/assets/edit.png'}
              alt={'Edit'}
              btnClass={'btnCustomize'}
              text={'Customize Layout'}
              callback={Layout}
            />
            <Btn
              img={'./src/assets/clear.png'}
              alt={'Clear'}
              btnClass={'btnClear'}
              text={'Clear Resume'}
              callback={hideResume}
            />
            <Btn
              img={'./src/assets/example.png'}
              alt={'Example'}
              btnClass={'btnExample'}
              text={'Load Example'}
              callback={showResume}
            />
            <Btn
              img={'./src/assets/pdf.png'}
              alt={'PDF Downloader'}
              btnClass={'btnPDF rounded-e-xl'}
              text={'Download PDF'}
            />
          </div>
          <CompleteYourInfo 
            hideContent={hideContent} 
            example={example}
            updateExample={updateExample} 
            updateVisible={updateVisible}
          />
          <CustomizeLayout 
            hideLayout={hideLayout} 
            updateLayout={updateLayout} 
            updateColor={updateColor} 
            updateFonts={updateFonts} 
            color={color} 
          />
      </div>
    );
  }

  