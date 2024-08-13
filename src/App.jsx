import { useState } from 'react'
import './App.css'
import "./index.css"
import HamburgerMenu from "./HamburgerMenu"
import Calculator from './Calculator'
import Card from "./Card"
import SportsBox from './SportsBox'
import ButtonEffect from './ButtonEffect'
import CardsContainer from './CardsContainer'



function App() {

  return (
    <div id='mainContainer'>

      {/* FIRST SECTION */}
      <div className='firstSection outerBox' id='firstSection'>
        <div className='navbar-container'>
          <div className='navbar'>
            <a href="#firstSection"><h1>Kalorická Kalkulačka</h1></a>
            <HamburgerMenu/>
            <div className='links'>
              <a href='#addedSection'>Jak to funguje?</a>
              <a href='#secondSection'>Spočítat kalorie</a>
              <a href='#thirdSection'>Chci vědět více</a>
            </div>
          </div>
        </div>
        <div className='innerBox'>
          <div className='uvod'>
            <h2>Nauč se pracovat s kaloriemi už jednou provždy!</h2>
            <p>Prvním krokem k úspěchu, ať už je váš cíl zhubnout nebo nabrat, je porozumět <span>kaloriím</span>, kalorickému <span>deficitu</span>, <span>nadbytku</span>, <span>bazálnímu metabolismu</span> a dalším důležitým pojmům.</p>
            <p>Každá potravina má určitý počet kalorií. To, kolik za celý den sníme a vypijeme kalorií, se nazývá náš kalorický příjem. Máme však i svůj kalorický výdej. Ten se skládá z tzv. bazálního metabolismu a dalších aktivit. Mezi další aktivity řadíme veškerý pohyb, ať už je to cesta do práce, uklízení nebo třeba trénink ve fitku. Čím více se samozřejmě hýbeme, tím vyšší je náš kalorický výdej.</p>
            <ButtonEffect href={"#addedSection"} text={"Pověz mi víc"}/>
          </div>
          <img id='foodPlate' src='images/foodPlate.png'/>
        </div>
      </div>

      {/* ADDED SECTION */}
      <div className='addedSection outerBox' id='addedSection'>
        <div className='innerBox'>
          <img id='salad' src='images/salad.png'/>
          <div className='rovnice'>
            <h2>Jak to funguje</h2>
            <p>Hubnutí nebo nabírání pak funguje jako prostá rovnice. Pokud náš kalorický příjem převýší náš kalorický výdej, jedná se o kalorický nadbytek a tělo začne přibírat. Pokud je náš kalorický příjem naopak nižší než náš kalorický výdej, jedná se o kalorický deficit a v této fázi tělo hubne.</p>
            <p>Je však nanejvýš důležité si uvědomit, že <b>náš minimální kalorický příjem musí přesahovat bazální metabolismus</b>. Pokud bychom přijímali méně kalorií, než je náš bazální metabolismus, naše tělo by nemělo dostatek energie na základní obsluhování našich orgánů a to je velmi nebezpečné.</p>
            <p>Výše bazálního metabolismu je hodnota, od které se budeš odrážet a pod kterou nikdy nesmíš se svým kalorickým příjmem zajít! Je to počet kalorií, které tvé tělo spálí pouze svou existencí. Ty se však během dne navíc pohybuješ, ať už jde o každodenní činnosti, jako je sezení u stolu, chůze po bytě nebo uklízení, ale i sportovní aktivity. Tvůj celkový kalorický výdej se tedy skládá z hodnoty bazálního metabolismu, každodenních pohybových aktivit a sportu.</p>
            <ButtonEffect href={"#secondSection"} text={"Spočítej mi BMR"}/>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className='secondSection outerBox' id='secondSection'>
        <div className='innerBox'>
          <div className='jakPocitat'>
            <h2>Spočítej si bazální metabolismus</h2>
            <div className='kalkulacka'>
              <Calculator/>
            </div>
            <p>Pokud je tvůj bazální metabolismus například 1500 kcal, k tomu spálíš dalších 300 kcal každodenním pohybem po bytě a cestou do práce, a potom si jdeš večer zaběhat a během spálíš dalších 500 kcal, tvůj celkový denní výdej je 2300 kcal. Aby tělo hublo, tvůj kalorický příjem se musí pohybovat mezi hodnotou BMR (1500 kcal) a celkovým denním výdejem (2300 kcal). Dosáhneš tak kalorického deficitu. Pokud chceš přibrat, musí tvůj kalorický příjem přesahovat tvůj celkový denní výdej (2300 kcal), a dosáhneš tak kalorického nadbytku.</p>
            <ButtonEffect href={"#thirdSection"} text={"A co dál?"}/>
          </div>
          <img id='pokeBowl' src='images/poke.png'/>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div className='thirdSection outerBox' id='thirdSection'>
        <div className='innerBox'>
          <div className='viceInfo'>
            <h2>Chci vědět více</h2>
            <div className='text-and-carousel partOne'>
              <CardsContainer />
              <p>Ve stravě přijímáme mikroživiny a makroživiny. Mikroživiny jsou živiny, které tělo potřebuje v menších množstvích, ale jsou nezbytné pro různé biochemické procesy a celkové zdraví. Mikroživiny zahrnují vitamíny a minerály. Makroživiny jsou naopak živiny, které tělo potřebuje ve velkých množstvích, aby získalo energii a udrželo základní tělesné funkce. Existují tři hlavní typy makroživin: bílkoviny, tuky a sacharidy.</p>
            </div>
            <div className='text-and-carousel partTwo'>
              <p>Jak už bylo naznačeno, sportem se dá spálit značné množství kalorií. Ono množství závisí na mnoha faktorech a je velmi individuální. Roli hraje fyzická kondice sportovce, typ, délka a intenzita aktivity, ale také individuální aspekty jedince. Obecně však můžeme říct, v jakých rozmezích se spálené kalorie za hodinu určité sportovní aktivity pohybují a jaké aktivity spalují v průměru více kalorií než jiné.</p>
              <SportsBox />
            </div>
          </div>
        </div>
        
      </div>

      {/* FOOTER */}
      <div className='footer outerBox' id='footer'>
        <div className='innerBox'>
            <p>© Tereza Chudějová, 2024</p>
        </div>
      </div>

    </div>
  )
}

export default App
