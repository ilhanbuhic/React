import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUsPage from '../../../pages/Class-5/AboutUsPage'
import HomePage from '../../../pages/Class-5/HomePage'

function ReactRouterDom() {
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
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutUsPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>
    </div>
  )
}

export default ReactRouterDom
