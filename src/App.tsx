import { useSelector } from "react-redux";
import HomePage from "./routes/HomePage";
import AboutPage from './routes/AboutPage';
import ExperiencePage from './routes/ExperiencePage';
import ContactPage from './routes/ContactPage';
import { useEffect } from "react";

function App() {
  const selectedTab = useSelector((state: any)=> state.dashboard.selectedTab);
  useEffect(()=>{
    console.log(selectedTab);
  },[]);

  return (
    <>
    
     {selectedTab ===  'Home' ? <HomePage /> :selectedTab === 'About' ? <AboutPage /> :
      selectedTab === 'Experience'  ? <ExperiencePage /> : selectedTab === 'Contact' ? <ContactPage /> : "" }
    </>
  )
}

export default App;
