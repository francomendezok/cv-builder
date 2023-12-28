/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function getContrastColor(hexColor) {
  const hex = hexColor.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#ffffff';
}

function ResumeInfo({ info, visible }) {
    const { start, end, city, institution, position, description } = info;
    let date = visible ? `${start} - ${end}` : ''
    if (start === '' && end === '') date = ''
    return (
      <div className={"resumeInfo h-full flex justify-around"}>
        <div className="parragraph">
          <p>{date}</p>
          <p>{city}</p>
        </div>
        <div className="w-2/3">
          <strong>{institution}</strong>
          <p style={{fontStyle: 'italic'}}>{position}</p>
          <p className="mt-1">{description}</p>
        </div>
      </div>
    );
  }

function Skills({skills}) {
    return (
      <div className="w-4/5 m-auto">
        <p className="text-center w-full max-w-full overflow-auto break-words">{skills}</p>
      </div>
    );
  }

function Info ({info, isSkill, visible}) {
  return (
    isSkill === true
    ? <Skills skills={info} />
    : info.map((exp, index) => {
      return (
        <ResumeInfo visible={visible} key={index} info={{
          start: exp.start, 
          end: exp.end, 
          city: exp.location, 
          institution: exp.company || exp.school, 
          position: exp.position || exp.degree, 
          description: exp.description
        }} 
        />
      )
    })
  )
}

  
export default function Resume ({layout, color, fonts, info, visible}) {
  const invertedColor = getContrastColor(color);

  const email = visible && info.personal.email !== '' ? '' : 'hidden'
  const phone = visible && info.personal.phone !== '' ? '' : 'hidden'
  const address = visible && info.personal.address !== '' ? '' : 'hidden'

  const allEmptyEducation0 = Object.values(info.education[0]).every(value => typeof value === 'string' && value.trim() === '');
  const allEmptyEducation1 = Object.values(info.education[1]).every(value => typeof value === 'string' && value.trim() === '');
  const allEmptyExperience0 = Object.values(info.experience[0]).every(value => typeof value === 'string' && value.trim() === '');
  const allEmptyExperience1 = Object.values(info.experience[1]).every(value => typeof value === 'string' && value.trim() === '');
  const allEmptySkills = Object.values(info.skills).every(value => typeof value === 'string' && value.trim() === '');

  const education = allEmptyEducation0 && allEmptyEducation1 ? 'hidden' : ''
  const experience = allEmptyExperience0 && allEmptyExperience1 ? 'hidden' : ''
  const skills = allEmptySkills ? 'hidden' : ''


    return (
         <aside id={layout} style={{ fontFamily: fonts, fontSize: '1rem' }} className="bg-slate-100 shadow-xl">
            <div className="personalInfo p-6" style={{ background: color, color: invertedColor }}>
                <h1 className="text-center text-4xl mb-2">{info.personal.fullname}</h1>
                <div className="flex justify-around">
                  <span className="flex justify-evenly">
                    <svg className={`mailSVG ${email}`} viewBox="0 0 24 24" fill={invertedColor} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLineJoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"></path> </g></svg>
                    <p className="flex ml-2">{info.personal.email}</p>
                  </span>
                  <span className="flex justify-evenly">
                    <svg className={`telephoneSVG ${phone}`} viewBox="0 0 24 24" fill={invertedColor} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLineJoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"></path> </g></svg>
                    <p className="flex ml-2">{info.personal.phone}</p>
                  </span>
                  <span className="flex justify-evenly">
                  <svg className={`locationSVG ${address}`} viewBox="0 0 24 24" fill={invertedColor} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLineJoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"></path> </g></svg>
                    <p className="flex ml-2">{info.personal.address}</p>
                  </span>
                </div>
            </div>
            <div className="infoContainer">
              <div className="experienceBox">
                <div className={`cv-categories ${experience}`} style={{ background: invertedColor, color: color, borderStyle: "solid", borderColor: color, borderWidth: '2px', fontSize: '1.2rem'  }}>Professional Experience</div>
                  <Info info={info.experience} isSkill={false} visible={visible}/>
              </div>
              <div className="educationBox">
                <div className={`cv-categories ${education}`} style={{ background: invertedColor, color: color, borderStyle: "solid", borderColor: color, borderWidth: '2px', fontSize: '1.2rem'  }}>Education</div>
                  <Info info={info.education} isSkill={false} visible={visible}/>
              </div>
              <div className="skillsBox">
                <div className={`cv-categories ${skills}`} style={{ background: invertedColor, color: color, borderStyle: "solid", borderColor: color, borderWidth: '2px', fontSize: '1.2rem'  }}>Skills</div>
                <Info info={info.skills} isSkill={true} visible={visible} />
              </div>
              </div>
          </aside>
    )
  }

// eslint-disable-next-line react-refresh/only-export-components
export {getContrastColor}

