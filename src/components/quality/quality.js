import React, { Component } from 'react'
import './quality.css'

export default class Quality extends Component {
  render() {
    return (
      <div className='quality' id='advantages'>
          <h2>СТАВИМ КАЧЕСТВО НА ПЕРВОЕ МЕСТО</h2>
          <div className='quality-content'>
            <div className='quality-step'>
                <img src='images/shema1.png' alt='схема сварки'></img>
                <p className='step-title'>ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ</p>
                <p className='step-text1'>Используем аппараты TIG, MIG, MMA и лазерное оборудование для работы с любыми металлами</p>
            </div>

            <div className='quality-steps'>
                <div className='quality-steps1'>
                    <p className='step-title'>РАБОТАЕМ С РЕДКИМИ<br/>МЕТАЛЛАМИ</p>
                    <p className='step-text'>Наша команда обладает уникальной экспертизой в сварке сложных и редких металлов, таких как титан, молибден, инконель и цирконий. Мы гарантируем соблюдение всех технологических нюансов</p>
                </div>
                <div className='quality-steps2'>
                    <p className='step-title'>ГАРАНТИИ КАЧЕСТВА</p>
                    <p className='step-text'>Мы уверены в профессионализме наших мастеров и качестве материалов, поэтому предоставляем расширенную гарантию на все выполненные сварочные работы</p>
                    <img src='images/shema2.png' alt='схема сварки'></img>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
