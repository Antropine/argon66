import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
      <div className='header'>
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

        <div className='contact'>
            <div className='city'>
                <p className='town'>ЕКАТЕРИНБУРГ</p>
                <p className='address'>Космонавтов проспект, 258/3</p>
            </div>
            <div className='phone'>
                <p className='tel1'>+7 (909) 011-17-71</p>
                <p className='tel2'>+7 (343) 202-00-23</p>
            </div>
        </div>

      </div>
      </div>
    )
  }
}
