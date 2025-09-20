
import {ProfileCard} from './components/ProfileCard.jsx'
import elonmusk from './assets/elonmusk.jpg'
import markzuckerberg from './assets/markzuckerberg.webp'

function App() {

  return (
    <>
    <ProfileCard name="Jammie scott" about="Allentown, Oregon
        (459) 257-5521">
      <img src={elonmusk} alt="" />
      
      
    </ProfileCard>
    <ProfileCard name="Christine Long" about="Red Oak, Mississippi (216) 365-2671">
      <img src={markzuckerberg} alt="" />
    </ProfileCard>
    <ProfileCard name="Euerado Moreno" about="Surrey, South Carolina(529) 294-3106">
      <img src={markzuckerberg} alt="" />

    </ProfileCard>
    <ProfileCard name="Brad Rayes" about="Wichita Falls, New Jersey
      (642) 952-3084">
      <img src={elonmusk} alt="" />
     
      
    </ProfileCard>
    </>
  )
}

export default App
