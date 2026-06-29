import React, { Component } from 'react'
import './hero.css'

export default class Hero extends Component {
  render() {
    return (
      <div className='hero'>

        <div className='title'>
            <h1>СВАРОЧНЫЕ РАБОТЫ<br/>ЛЮБОЙ СЛОЖНОСТИ</h1>
            <div className='info-card'>
                <p className='info'>Изготовление металлоконструкций из аллюминия, стали, нержавейки. Ручная дуговая сварка, полуавтомат в среде аргона</p>
                <a href="tel:+79090111771" className='order-button'>СВЯЗАТЬСЯ</a>
            </div>
        </div>

        <div className='background'>
            <img src='images/background.png' alt='Сварка металла'></img>
        </div>

      </div>
    )
  }
}
