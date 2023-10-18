import './App.css'
// import './components/Class-1/Practice 4/practice-4.css'
// import './components/Class-2/Practice 1/practice-1.css'

// import Form1 from './components/Class-1/Practice 1/practice-1'
// import AddingNumber from "./components/Class-1/Practice 2/practice-2";
// import MeSetter from "./components/Class-1/Practice 3/practice-3";
// import BlogMaker from './components/Class-1/Practice 4/practice-4'
// import AboutMeForm from './components/Class-2/Practice 1/practice-1'
import Item from './components/Class-3/Practice 1/Item'
import RenderingItems from './components/Class-3/Practice 1/RenderingItems'
import UseEffect from './components/Class-4/Practice 1/UseEffect'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Form1 /> */}
        {/* <AddingNumber /> */}
        {/* <MeSetter /> */}
        {/* <BlogMaker /> */}
        {/* <AboutMeForm /> */}
        {/* <RenderingItems /> */}
        {/* <UseEffect /> */}
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path = '/' element = {<h1>Welcome to this page</h1>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  )
}

export default App
