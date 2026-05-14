import React from 'react'
import { createRoot } from 'react-dom/client'

function App(){
  return (
    <div style={{background:'#0b0b0b', color:'#f8e7c2', height:'100vh', padding:24}}>
      <h1 style={{color:'#f8e7c2'}}>netWatch — UI Shell</h1>
      <p style={{color:'#cbb78a'}}>Initial Tauri/React UI shell. Replace with full UI components.</p>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
