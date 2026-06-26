import React, { Component } from 'react'
import './quality.css'

export default class Quality extends Component {
  render() {
    return (
      <div className='quality'>
          <h2>СТАВИМ КАЧЕСТВО НА ПЕРВОЕ МЕСТО</h2>
          <div className='quality-content'>
            <div className='quality-step'>
                <img src='images/shema1.png' alt='схема сварки'></img>
                <p>ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ</p>
                <p>Используем аппараты TIG, MIG, MMA и лазерное оборудование для работы с любыми металлами</p>
            </div>

            <div className='quality-steps'>
                <div className='quality-steps1'>
                    <p>РАБОТАЕМ С РЕДКИМИ МЕТАЛЛАМИ</p>
                    <p>Наша команда обладает уникальной экспертизой в сварке сложных и редких металлов, таких как титан, молибден, инконель и цирконий. Мы гарантируем соблюдение всех технологических нюансов</p>
                </div>
                <div className='quality-steps2'>
                    <p>ГАРАНТИИ КАЧЕСТВА</p>
                    <p>Мы уверены в профессионализме наших мастеров и качестве материалов, поэтому предоставляем расширенную гарантию на все выполненные сварочные работы</p>
                    <img src='images/shema2.png' alt='схема сварки'></img>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
