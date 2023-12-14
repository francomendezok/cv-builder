/* eslint-disable react/prop-types */
function ResumeInfo({ info }) {
    const { date, city, institution, position, description } = info;
    return (
      <div className="flex items-start justify-evenly m-4">
        <div>
          <p>{date}</p>
          <p>{city}</p>
        </div>
        <div>
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


export default function Resume () {
  const skillsIHave = ['Coding', 'Marketing'];

    return (
        <aside id="resume" className="bg-slate-200 shadow-xl">
            <div className="personalInfo bg-blue-300 p-6">
                <h1 className="text-center text-4xl">Franco</h1>
                <div className="flex justify-around">
                    <span>Mail<img src="" alt="" /></span>
                    <span>Telephone<img src="" alt="" /></span>
                    <span>Adress<img src="" alt="" /></span>
                </div>
            </div>
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
        </aside>
    )
}

