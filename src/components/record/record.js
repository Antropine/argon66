import React, { Component } from 'react'
import './record.css'

export default class Record extends Component {
  render() {
    return (
      <div className='record'>
        <div className='record-content'>
        <h2>ОБСУДИТЬ ПРОЕКТ</h2>
        <div className='form'>
            <p>Мы всегда находим общий язык с заказчиком, а гибкая ценовая политика позволяет работать на взаимовыгодных условиях. Заполните заявку и мы свяжемся с вами и обсудим ваш заказ</p>
            <input type="text" placeholder='Ваше имя'></input>
            <input type="text" placeholder='Номер телефона'></input>
            <input type="email" placeholder='Ваш email'></input>
            <textarea placeholder='Опишите ваш проект или проблему'></textarea>
            <div className='registration'>
                <button type='submit'>ОТПРАВИТЬ</button>
                <p>Нажимая кнопку вы соглашаетесь согласие на обработку персональных данных</p>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
