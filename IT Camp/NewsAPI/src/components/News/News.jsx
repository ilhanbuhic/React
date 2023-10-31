import { React } from 'react'
import '../News/News.css'
import Postcards from './Postcards/Postcards'

export const News = () => {
  return (
    <div className='news-container'>
      <div className='news'>
        <Postcards />
      </div>
    </div>
  )
}

export default News
