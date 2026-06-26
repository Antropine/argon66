import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='logo'>
            <img src='images/logo.svg'></img>
            <div>
                <p className='company'>ARGON66</p>
                <p className='subtitle'>СВАРОЧНЫЕ РАБОТЫ</p>
            </div>
        </div>

        <div className='menu'>
            <nav>
                <a href="#services">услуги</a>
                <a href="#advantages">преимущества</a>
                <a href="#cases">кейсы</a>
                <a href="#reviews">отзывы</a>
                <a href="#about">о нас</a>
                <a href="#contacts">контакты</a>
            </nav>
        </div>

        <div className='footer-contacts'>
          <div className='contacts1'>
            <p>+7 (909) 011-17-71<br/>+7 (343) 202-00-23<br/>argon@argon66.ru</p>
          </div>
          <div className='social-icon'>
            <a href='https://vk.ru/argon66' target='_blank'><img src='images/vk.svg' alt='Вконтакте'></img></a>
            <a href='https://instagram.com/ARGON66' target='_blank'><img src='images/instagram.svg' alt='Инстаграм'></img></a>
          </div>
          <div className='contacts1'>
            <p>Россия, г. Екатеринбург,<br/>Космонавтов проспект, 258/3<br/>Сварочный цех. Бокс номер 5</p>
          </div>
        </div>


      </div>
    )
  }
}
