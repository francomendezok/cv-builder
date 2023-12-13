import '../styles/index.css'
import Resume from './Resume'
import InfoSection from './Content'
import EditSection from './EditSection'


export default function App() {

  return (
    <div className="container">
      <EditSection />
      <InfoSection />
      <Resume />
    </div>
  )
}

