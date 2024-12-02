import React, { useEffect } from 'react'
import PublicRoutes from './Routes/PublicRoutes/Publicroutes'
import Home from './Pages/Home/Home'
import "../src/styles/global.css"
const App = () => {

  return (
    <>
      <PublicRoutes>
        <Home />
      </PublicRoutes>
    </>
  )
}

export default App