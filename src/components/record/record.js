import React, { Component } from 'react'
import emailjs from '@emailjs/browser'
import './record.css'

export default class Record extends Component {

  sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_5rhloih',  
      'template_gb9ic39', 
      e.target,
      'FlAbLD8PYqooeRoSd'     // Public Key
    ).then(
      (result) => {
        alert('Заявка отправлена!')
      },
      (error) => {
        alert('Ошибка отправки')
      }
    )

    e.target.reset()
  }

  render() {
    return (
      <div className='record'>
        <div className='record-content'>
          <h2>ОБСУДИТЬ ПРОЕКТ</h2>

          <form className='form' onSubmit={this.sendEmail}>
            
            <p>Мы всегда находим общий язык с заказчиком, а гибкая ценовая политика позволяет работать на взаимовыгодных условиях. Заполните заявку и мы свяжемся с вами и обсудим ваш заказ</p>

            <input type="text" name="name" placeholder='Ваше имя' />
            <input type="text" name="phone" placeholder='Номер телефона' />
            <input type="email" name="email" placeholder='Ваш email' />
            <textarea name="message" placeholder='Опишите ваш проект или проблему'></textarea>

            <div className='registration'>
              <button type='submit'>ОТПРАВИТЬ</button>
              <p>Нажимая кнопку вы соглашаетесь на обработку данных</p>
            </div>

          </form>
        </div>
      </div>
    )
  }
}