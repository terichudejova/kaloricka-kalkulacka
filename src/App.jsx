import { useState } from 'react'
import './App.css'
import "./index.css"
import HamburgerMenu from "./HamburgerMenu"
import Calculator from './Calculator'
import Card from "./Card"
import SportsBox from './SportsBox'


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
            <h2>Nauč se pracovat s kaloriemi už jednou provždy!</h2>
            <p>Prvním krokem k úspěchu, ať už je váš cíl zhubnout nebo nabrat, je porozumět <span>kaloriím</span>, kalorickému <span>deficitu</span>, <span>nadbytku</span>, <span>bazálnímu metabolismu</span> a dalším důležitým pojmům.</p>
            <p>Každá potravina má určitý počet kalorií. To, kolik za celý den sníme a vypijeme kalorií, se nazývá náš kalorický příjem. Máme však i svůj kalorický výdej. Ten se skládá z tzv. bazálního metabolismu a dalších aktivit. Mezi další aktivity řadíme veškerý pohyb, ať už je to cesta do práce, uklízení nebo třeba trénink ve fitku. Čím více se samozřejmě hýbeme, tím vyšší je náš kalorický výdej.</p>
            <p>Hubnutí nebo nabírání pak funguje jako prostá rovnice. Pokud náš kalorický příjem převýší náš kalorický výdej, jedná se o kalorický nadbytek a tělo začne přibírat. Pokud je náš kalorický příjem naopak nižší než náš kalorický výdej, jedná se o kalorický deficit a v této fázi tělo hubne.</p>
            <p>Je však nanejvýš důležité si uvědomit, že <b>náš minimální kalorický příjem musí přesahovat bazální metabolismus</b>. Pokud bychom přijímali méně kalorií, než je náš bazální metabolismus, naše tělo by nemělo dostatek energie na základní obsluhování našich orgánů a to je velmi nebezpečné.</p>
          </div>
          <img id='foodPlate' src='images/foodPlate.png'/>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className='secondSection outerBox' id='secondSection'>
        <div className='innerBox'>
          <img id='pokeBowl' src='images/poke.png'/>
          <div className='jakPocitat'>
            <h2>Spočítej si bazální metabolismus</h2>
            <p>Výše bazálního metabolismu je hodnota, od které se budeš odrážet a pod kterou nikdy nesmíš se svým kalorickým příjmem zajít! Je to počet kalorií, které tvé tělo spálí pouze svou existencí. Ty se však během dne navíc pohybuješ, ať už jde o každodenní činnosti, jako je sezení u stolu, chůze po bytě nebo uklízení, ale i sportovní aktivity. Tvůj celkový kalorický výdej se tedy skládá z hodnoty bazálního metabolismu, každodenních pohybových aktivit a sportu.</p>
            <p>Pokud je tvůj bazální metabolismus například 1500 kcal, k tomu spálíš dalších 300 kcal každodenním pohybem po bytě a cestou do práce, a potom si jdeš večer zaběhat a během spálíš dalších 500 kcal, tvůj celkový denní výdej je 2300 kcal. Aby tělo hublo, tvůj kalorický příjem se musí pohybovat mezi hodnotou BMR (1500 kcal) a celkovým denním výdejem (2300 kcal). Dosáhneš tak kalorického deficitu. Pokud chceš přibrat, musí tvůj kalorický příjem přesahovat tvůj celkový denní výdej (2300 kcal), a dosáhneš tak kalorického nadbytku.</p>
            <div className='kalkulacka'>
              <h3>Kalkulačka</h3>
              <Calculator/>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div className='thirdSection outerBox' id='thirdSection'>
        <div className='innerBox'>
          <div className='viceInfo'>
            <h2>Chci vědět více</h2>
            <p>Ve stravě přijímáme mikroživiny a makroživiny. Mikroživiny jsou živiny, které tělo potřebuje v menších množstvích, ale jsou nezbytné pro různé biochemické procesy a celkové zdraví. Mikroživiny zahrnují vitamíny a minerály. Makroživiny jsou naopak živiny, které tělo potřebuje ve velkých množstvích, aby získalo energii a udrželo základní tělesné funkce. Existují tři hlavní typy makroživin: bílkoviny, tuky a sacharidy.</p>
          </div>
          <img id='salad' src='images/salad.png'/>
        </div>
        <div id='cards-container'>
            <Card src={"images/meat.jpg"} title={"BÍLKOVINY"} text={"1 g = 4 kcal \nMaso, uzeniny, vejce, tvaroh, cottage, proteinové produkty, sýry..."}/>
            <Card src={"images/nuts.jpg"} title={"TUKY"} text={"1 g = 9 kcal \nOřechy, avokádo, ryby, máslo, mléčné výrobbky..."}/>
            <Card src={"images/potatoes.jpg"} title={"SACHARIDY"} text={"1 g = 4 kcal \nVločky, rýže, brambory, těstoviny, pečivo, ovoce, zelenina, luštěniny..."}/>
        </div>
        <SportsBox />
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
