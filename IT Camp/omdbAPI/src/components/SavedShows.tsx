import React from 'react'
import { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from './context/AuthContext'
import { db } from '../firebase.config'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'

const SavedShows = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  const slideLeft = () => {
    let slider: any = document.getElementById('slider')
    slider.scrollLeft = slider?.scrollLeft - 500
  }
  const slideRight = () => {
    let slider: any = document.getElementById('slider')
    slider.scrollLeft = slider?.scrollLeft + 500
  }

  useEffect(() => {
    if (user?.email) {
      const unsubscribe = onSnapshot(doc(db, 'users', user.email), (snapshot) => {
        setMovies(snapshot.data()?.savedMovies || []);
      });

      // Cleanup the subscription when the component unmounts
      return () => unsubscribe();
    }
  }, [user?.email]);
    
  return (
    <div>
     
    </div>
  )
}

export default SavedShows
