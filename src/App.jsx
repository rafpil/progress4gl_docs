
import './App.css'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='main-content'>
      <div className='header'>
        <Navbar />
      </div>
      <div class='sidebar overflow-hidden overflow-y-auto'> <Sidebar /> </div>
      <div class='footer'> <Footer /> </div>
    </div>
  )
}

export default App
