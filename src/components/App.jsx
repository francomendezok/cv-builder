import '../styles/index.css'
import EditInfo from './EditInfo'
import EditLayout from './EditLayout'
import Education from './Education'
import Experience from './Experience'
import Personal from './Personal'
import Resume from './Resume'


function App() {

  return (
    <div className="flex flex-col justify-center items-center">
      <EditLayout />
      <EditInfo />
      <Personal />
      <Education />
      <Experience />
      <Resume />
    </div>
  )
}

export default App
