/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function ResumeInfo({ info }) {
    const { date, city, institution, position, description } = info;
    return (
      <div className="resumeInfo h-full flex justify-around">
        <div className="parragraph">
          <p>{date}</p>
          <p>{city}</p>
        </div>
        <div className="w-2/3">
          <strong>{institution}</strong>
          <p>{position}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }

function Skills({ skills }) {
    return (
      <div className="flex items-center justify-center">
        {skills.map((skill, index) => (
          <span key={index}>{skill}, </span>
        ))}
      </div>
    );
  }

  
export default function Resume ({layout, fonts}) {
  const skillsIHave = ['Coding', 'Marketing'];
  console.log(fonts);
    return (
        <aside id={layout} style={{ fontFamily: fonts, fontSize: '1rem' }} className="bg-slate-200 shadow-xl">
            <div className="personalInfo bg-blue-300 p-6">
                <h1 className="text-center text-4xl mb-2">Franco</h1>
                <div className="flex justify-around">
                    <span>Mail<img src="" alt="" /></span>
                    <span>Telephone<img src="" alt="" /></span>
                    <span>Adress<img src="" alt="" /></span>
                </div>
            </div>
            <div className="infoContainer">
              <div className="experienceBox">
                <div className="cv-categories">Profesional Experience</div>
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
              </div>
              <div className="educationBox">
                <div className="cv-categories">Education</div>
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
              </div>
              <div className="skillsBox">
                <div className="cv-categories">Skills</div>
                <Skills skills={skillsIHave} />
              </div>
              </div>
        </aside>
    )
  }

