import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./components/header";
import Cover from "./components/cover";
import Catalog from "./components/catalog";
import AboutBlock from "./components/UI/organism/about-block";
import Quiz from "./components/quiz";
import Team from "./components/team";

function App() {
  return (
    <>
      <Header />
      <Cover />
      <Catalog />
      <AboutBlock />
      <Quiz />
      <Team />
    </>
  )
}

export default App
