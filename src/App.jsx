import Navbar from "./components/Navbar";
import Section from "./components/Section";
import data from "./components/data";

function App() {
  let sectionData = data.map((section) => {
    return <Section { ...section } />
  })
  return (
    <>
      <Navbar />
      {sectionData}
    </>
  )
}

export default App
