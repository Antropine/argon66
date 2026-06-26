import React, { Component } from 'react'
import './services.css'

export default class Services extends Component {
  service = [
    {
        number:"01",
        title: "ОБРАБОТКА ЛИСТОВОГО МЕТАЛЛА",
        content: "Оказываем услуги по изготовлению изделий из листового металла. Рубка гильотиной листов толщиной до 4мм. - максимальная ширина руба 2500мм Лазерная резка металла (сталь, нержавейка) Гибка листового металла на листогибочном прессе с ЧПУ управлением максимальной длинной 2000мм и 2500мм. ",
        price: "Минимальная стоимость услуги от 500 до 1000 рублей в зависимости от услуги",
        images: ["images/service1.png", "images/service2.png", "images/service3.png"]
    },
    {
        number:"02",
        title: "СВАРОЧНЫЕ УСЛУГИ",
        content: "Оказываем услуги по сварке аллюминия методом аргонодуговой сварки неплавящимся электродом, а также полуавтоматом. Сварка нержавеющей стали Сварка меди и Сварка фланцев и элементов трубопровода Изготовление металлоконструкций из цветных металлов",
        price: "Минимальная стоимость услуги от 500 до 1000 рублей в зависимости от услуги",
        images: ["images/service4.png", "images/service5.png", "images/service6.png"]
    },
    {
        number:"03",
        title: "СВАРОЧНО РЕМОНТНЫЕ УСЛУГИ",
        content: "Оказываем услуги по ремонту топливного бака грузового автомобиля, Ремонт изделий из алюминия, а также полуавтоматом. Сварка нержавеющей стали Сварка меди и Сварка фланцев и элементов трубопровода Изготовление металлоконструкций из цветных металлов",
        price: "Минимальная стоимость услуги от 500 до 1000 рублей в зависимости от услуги",
        images: ["images/service7.png", "images/service8.png", "images/service9.png"]
    },
  ]

  state = { activeIndex: null }

  toggle = (index) => {
    this.setState({ activeIndex: this.state.activeIndex === index ? null : index })
  }

  render() {
    return (
      <div className='services'>
        <div className='services-content'>
          <h2>УСЛУГИ</h2>

          <div className='services-list'>
            {this.service.map((item, index) => (
              <div className={`service-item${this.state.activeIndex === index ? ' active' : ''}`} key={index}>
                <div className='service-header' onClick={() => this.toggle(index)}>
                  <p className='service-number'>{item.number}</p>
                  <p className='service-title'>{item.title}</p>
                </div>
                {this.state.activeIndex === index && (
                  <div className='service-body'>
                    <div className='service-info'>
                      <div className='service-text'>
                        <p>{item.content}</p>
                      </div>
                      <div className='service-price'>
                        <p>{item.price}</p>
                        <a href="#contacts" className='service-button'>ПОДРОБНЕЕ</a>
                      </div>
                    </div>
                    <div className='service-images'>
                      {item.images.map((img, i) => (
                        <img src={img} alt={item.title} key={i}></img>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
