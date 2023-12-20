import '../styles/index.css'
import { useState } from 'react';
import Resume from './Resume'
import CreateResume from './CreateResume';




export default function App() {

  const [layout, updateLayout] = useState('resumeTop');
  const [color, updateColor] = useState('#5165F5');
  const [fonts, updateFonts] = useState('sans-serif');
  const [visible, clearResume] = useState(true);
 

  

  return (
    <div className="container">
      <CreateResume 
        updateLayout={updateLayout} 
        updateColor={updateColor} 
        updateFonts={updateFonts} 
        color={color} 
        clear={visible} 
        clearResume={clearResume}
        />

      {/* <Resume 
        layout={layout} 
        color={color} 
        fonts={fonts} 
        info={example} 
        visible={visible}
        fullname={fullname}
        email={email}
        phone={phone}
        address={address}
        /> */}
    </div>
  )
}

