import { useState } from 'react'
import './App.css'
import "./index.css"
import HamburgerMenu from "./HamburgerMenu"

function App() {

  return (
    <div id='mainContainer'>

      {/* NAVBAR */}
      <header className='navbar outerBox'>
        <div className='innerBox'>
            <h1>Kalorická Kalkulačka</h1>
            <HamburgerMenu/>
        </div>
      </header>

      {/* FIRST SECTION */}
      <div className='firstSection outerBox' id='firstSection'>
        <div className='innerBox'>
          <div className='uvod'>
            <h2>Naučte se pracovat s kaloriemi už jednou provždy!</h2>
            <p>
              Prvním krokem k úspěchu, ať už je váš cíl zhubnout nebo nabrat, je porozumět <span>kaloriím</span>,
              kalorickému <span>deficitu</span>, <span>nadbytku</span>, <span>bazálnímu metabolismu</span> a dalším důležitým pojmům.
            </p>
            <p>
              Každá potravina má určitý počet kalorií. To, kolik za celý den sníme a vypijeme kalorií, se nazývá náš kalorický příjem.
              Máme však i svůj kalorický výdej. Ten se skládá z tzv. bazálního metabolismu a dalších aktivit.
              Mezi další aktivity řadíme veškerý pohyb, ať už je to cesta do práce, uklízení nebo třeba trénink ve fitku. Čím více
              se samozřejmě hýbeme, tím vyšší je náš kalorický výdej.
            </p>
            <p>
              Hubnutí nebo nabírání pak funguje jako prostá rovnice. Pokud náš kalorický příjem převýší náš kalorický výdej, jedná se o kalorický nadbytek
              a tělo začne přibírat. Pokud je náš kalorický příjem naopak nižší než náš kalorický výdej, jedná se o kalorický deficit a v této fázi tělo hubne.
            </p>
            <p>
              Je však nanejvýš důležité si uvědomit, že <b>náš minimální kalorický příjem musí odpovídat bazálnímu metabolismu</b>. Pokud bychom přijímali méně kalorií,
              než je náš bazální metabolismus, naše tělo by nemělo dostatek energie na základní obsluhování našich orgánů a to je velmi nebezpečné.
            </p>
          </div>
          <img id='foodPlate' src='images/foodPlate.png'/>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className='secondSection outerBox' id='secondSection'>
        <div className='innerBox'>

        </div>
      </div>

      {/* THIRD SECTION */}
      <div className='thirdSection outerBox' id='thirdSection'>
        <div className='innerBox'>

        </div>
      </div>

      {/* FOURTH SECTION */}
      <div className='fourthSection outerBox' id='fourthSection'>
        <div className='innerBox'>

        </div>
      </div>

      {/* FOOTER */}
      <footer className='footer outerBox' id='footer'>
        <div className='innerBox'>

        </div>
      </footer>

    </div>
  )
}

export default App