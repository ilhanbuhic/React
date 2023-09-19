import { useState } from "react"
import "./App.css"

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
}

export default function Gallery() {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  )
}

