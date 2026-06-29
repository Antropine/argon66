import React, { Component } from 'react'
import './contacts.css'

export default class Contacts extends Component {
  render() {
    return (
      <div className='contacts' id='contacts'>
        <h2>КАК С НАМИ СВЯЗАТЬСЯ</h2>
        <div className='contact-address'>
            <div className='left-address'>
                <div className='step'>
                    <p className='step-number'>01</p>
                    <div>
                        <p className='step-title'>АДРЕС</p>
                        <p className='step-texts'>Россия, г. Екатеринбург, Космонавтов проспект, 258/3 Сварочный цех. Бокс номер 5</p>
                    </div>
                </div>
                <div className='map'>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=60.628649%2C56.940867&mode=poi&poi%5Bpoint%5D=60.628120%2C56.941180&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1361887749&z=17.77" allowFullScreen={true} title="Карта"></iframe>
                </div>
            </div>
            <div className='right-address'>
                <div className='step'>
                    <p className='step-number'>02</p>
                    <div>
                        <p className='step-title'>ТЕЛЕФОНЫ</p>
                        <p className='step-texts'>+7 (909) 011-17-71<br/>+7 (343) 202-00-23</p>
                    </div>
                </div>
                <div className='step'>
                    <p className='step-number'>03</p>
                    <div>
                        <p className='step-title'>E-MAIL</p>
                        <p className='step-texts'>argon@argon66.ru</p>
                    </div>
                </div>
                <div className='step'>
                    <p className='step-number'>04</p>
                    <div>
                        <p className='step-title'>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</p>
                        <div className='social-icon'>
                            <a href='https://vk.ru/argon66' target='_blank' rel="noopener noreferrer"><img src='images/vk.svg' alt='Вконтакте'></img></a>
                            <a href='https://instagram.com/ARGON66' target='_blank' rel="noopener noreferrer"><img src='images/instagram.svg' alt='Инстаграм'></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='left-address'>
                <div className='step'>
                    <p className='step-number'>05</p>
                    <div>
                        <p className='step-title'>НАШИ РЕКВИЗИТЫ</p>
                        <div className='payment'>
                            <div className='payment-list'>
                                <p><b>Наименование компании / полное</b></p>
                                <p><b>Наименование компании / сокращенное</b></p>
                            </div>
                            <div className='payment-list'>
                                <p>Общество с ограниченной ответственностью "Лимеранс Екатеринбург"</p>
                                <p>ООО "Лимеранс Екатеринбург"</p>
                            </div>
                            <div className='payment-list'>
                                <p><b>Регистрационная информация</b></p>
                                <p><b>Фактический адрес</b></p>
                                <p><b>ИНН</b></p>
                                <p><b>КПП</b></p>
                            </div>
                            <div className='payment-list'>
                                <p></p>
                                <p>Свердловская область, г. Екатеринбург, ул. Проспект Космонавтов, 258/3</p>
                                <p>6685017846</p>
                                <p>668501001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
