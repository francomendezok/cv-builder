import '../styles/index.css'
import { useState } from 'react';
import Resume from './Resume'
import CreateResume from './CreateResume';



export default function App() {
  const [layout, updateLayout] = useState('resumeTop');
  const [color, updateColor] = useState('#000000');
  const [fonts, updateFonts] = useState('sans-serif');


  return (
    <div className="container">
      <CreateResume updateLayout={updateLayout} updateColor={updateColor} updateFonts={updateFonts} color={color}/>
      <Resume layout={layout} color={color} fonts={fonts}/>
    </div>
  )
}

