/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function getContrastColor(hexColor) {
  // Convertir el color hexadecimal a RGB
  const hex = hexColor.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calcular la luminancia
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Devolver blanco si el color es oscuro, o negro si el color es claro
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

function ResumeInfo({ info }) {
    const { date, city, institution, position, description } = info;
    return (
      <div className={"resumeInfo h-full flex justify-around"}>
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

  
export default function Resume ({layout, color, fonts}) {
  const skillsIHave = ['Coding', 'Marketing'];
  const invertedColor = getContrastColor(color);
    return (
        <aside id={layout} style={{ fontFamily: fonts, fontSize: '1rem' }} className="bg-slate-200 shadow-xl">
            <div className="personalInfo p-6" style={{ background: color, color: invertedColor }}>
                <h1 className="text-center text-4xl mb-2">Franco</h1>
                <div className="flex justify-around">
                    <span>Mail<img src="" alt="" /></span>
                    <span>Telephone<img src="" alt="" /></span>
                    <span>Adress<img src="" alt="" /></span>
                </div>
            </div>
            <div className="infoContainer">
              <div className="experienceBox">
                <div className="cv-categories" style={{ background: color, color: invertedColor }}>Profesional Experience</div>
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
              </div>
              <div className="educationBox">
                <div className="cv-categories" style={{ background: color, color: invertedColor }}>Education</div>
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
                <ResumeInfo info={{ date: '10', city: 'City University', institution: 'University XYZ', position: "Bachelor's in Computer Science", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }} />
              </div>
              <div className="skillsBox">
                <div className="cv-categories" style={{ background: color, color: invertedColor }}>Skills</div>
                <Skills skills={skillsIHave} />
              </div>
              </div>
        </aside>
    )
  }

export {getContrastColor}

