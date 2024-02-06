import {
  Navbar,
  Home,
  About,
  Courses,
  Teacher,
  Contact,
  Footer
} from "./components/index"

const App = () => {
  return (
    <div className="font-poppins bg-Solitude">

      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />

    </div>
  )
}

export default App