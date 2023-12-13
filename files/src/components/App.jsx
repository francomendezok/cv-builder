import '../styles/index.css'
import Resume from './Resume'
import InfoSection from './Content'
import EditSection from './EditSection'


function App() {

  return (
    <div className="container">
      <EditSection />
      <InfoSection />
      <Resume />
    </div>
  )
}

export default App
