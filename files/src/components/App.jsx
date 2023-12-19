import '../styles/index.css'
import { useState } from 'react';
import Resume from './Resume'
import CreateResume from './CreateResume';



export default function App() {
  const [layout, updateLayout] = useState('resumeTop');
  const [color, updateColor] = useState('#5165F5');
  const [fonts, updateFonts] = useState('sans-serif');

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

  const [example, updateExample] = useState(InfoExample);

  

  return (
    <div className="container">
      <CreateResume updateLayout={updateLayout} updateColor={updateColor} updateFonts={updateFonts} color={color} updateExample={updateExample} details={example}/>
      <Resume layout={layout} color={color} fonts={fonts} info={example}/>
    </div>
  )
}

