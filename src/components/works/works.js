import React, { Component } from 'react'
import './works.css'

export default class Works extends Component {
  render() {
    return (
      <div className='works'>
        <h2>МЫ СДЕЛАЛИ</h2>
        <div className='works-cards'>
            <div className='works-card'>
                <img src='images/work1.png'></img>
                <p className='work-name'>СВАРКА КПП ЛЕГКОВОГО АВТОМОБИЛЯ</p>
            </div>
            <div className='works-card'>
                <img src='images/work2.png'></img>
                <p className='work-name'>РЕМОНТ ТОПЛИВНЫХ БАКОВ</p>
            </div>
            <div className='works-card'>
                <img src='images/work3.png'></img>
                <p className='work-name'>ВОССТАНОВЛЕНИЕ ИЗНОШЕНОЙ ДЕТАЛИ</p>
            </div>
            <div className='works-card'>
                <img src='images/work4.png'></img>
                <p className='work-name'>РЕМОНТ ИЗДЕЛИЙ ИЗ ЧУГУНА</p>
            </div>
            <div className='works-card'>
                <img src='images/work5.png'></img>
                <p className='work-name'>ТОПЛИВНЫЙ БАК ДЛЯ САМОЛЕТА</p>
            </div>
            <div className='works-card'>
                <img src='images/work6.png'></img>
                <p className='work-name'>ПАРАПЛАН ИЗ ТИТАНА</p>
            </div>
            <div className='works-card'>
                <img src='images/work7.png'></img>
                <p className='work-name'>САНИ ДЛЯ МОТОТЕХНИКИ</p>
            </div>
            <div className='works-card'>
                <img src='images/work8.png'></img>
                <p className='work-name'>РЕМОНТ РАМЫ ДЕТСКОЙ КОЛЯСКИ</p>
            </div>
        </div>
      </div>
    )
  }
}
