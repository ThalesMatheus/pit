import React from 'React'
import Link from 'next/link'

export const Main = () => {
  return (
    <>
      <section id='one'>
        <nav id='nav'>
          <div className='nav-logo'>
            <div className='nav-heading'>
              <span>
              <img src="Logo_Pit.png" />
              </span>
            </div>
            <div className='hamburger'>
              <a href='#'>
                <i className='far fa-moon white ' />
              </a>
              <a href='#'>
                <i className='fas fa-bars ' />
              </a>
            </div>
          </div>
          <ul className='nav-links'>
            <li>
            <a href='/login'><button className='t-btn btn'>Entrar</button></a>
            </li>
            <span>
            </span>
          </ul>
        </nav>
        <div className='content'>
          <div className='text-content'>
            <h1 className='white'>
              Hobby It, lugar perfeito para<br></br><strong>O seu esporte</strong>
            </h1>
            <h4 className='blackish'>
              Encontramos grupos ideais para atletas ideais!
            </h4>
          </div>
        </div>
      </section>
      <section id='one-half' className='goblack'>
        <span>
          <img
            src='https://a.espncdn.com/photo/2022/0523/r1016487_1024x576_16-9.jpg'
            alt=''
          />
        </span>
        <div className='half-content'>
          <div className='half__text'>
            <h1>Sobre nós</h1>
            <p>
              Nós da HobbyIt somos desenvolvedores de sistemas, buscamos desenvolver sites
              intuitivos, que facilitem na comunicação entre os clientes, para que todos possam
              usufruir de nossos serviços. Nós desenvolvemos para você receber o melhor de forma fácil.
            </p>
          </div>
          <div className='half__boxes'>
            <div className='box'>
              <span>
                <i className='fas fa-paw logo' />
              </span>
              <h2>Nossa missão</h2>
              <p>
              Auxiliar você a encontrar o grupo que deseja de forma prática e rápida.
              </p>
            </div>
            <div className='box'>
              <span>
                <i className='fas fa-paw logo' />
              </span>
              <h2>Nossa visão</h2>
              <p>
                Encontrar grupos para realização de esportes é difícil e gera, muitas vezes, a desistência do objetivo, estamos aqui para garantir o acesso ao que deseja.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section id='gallery'>
        <div className='heading '>
          <h1><b>Um pouco do que proporcionamos</b></h1>
          <p className='lightblack'>
            Alguns dos esportes que temos disponíveis no nosso site e que estão a um click de distância.
          </p>
        </div>
        <div className='gallery__container'>
          <div className='first__row row'>
            <span className='img1'>
            </span>
            <span className='img2'>
            </span>
            <span className='img3'>
            </span>
            <span>
              <img
              className='img4'
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g3.jpg'
                alt=''
              />
            </span>
          </div>
          <div className='second__row row'>
            <div className='first__column'>
              <span>
                <img
                className='img5'
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g8.jpg'
                  alt=''
                />
              </span>
              <span>
                <img
                className='img6'
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g6.jpg'
                  alt=''
                />
              </span>
            </div>
            <nav id='big__image'>
              <img
              className='img7'
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g9.jpg'
                alt=''
              />
            </nav>
            <div className='first__column'>
              <span>
                <img
                  className='img8'
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g7.jpg'
                  alt=''
                />
              </span>
              <span>
                <img
                  className='img9'
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g5.jpg'
                  alt=''
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    
      <footer id='eight'>
        <div className='footer__container'>
          <div className='dog__care '>
            <span>
              <i className='fas fa-paw ' />
              HobbyIt
            </span>
            <p>
              Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam
              eget turpis ornare, euismod ligul aeget, enenatis dui.
            </p>
          </div>
          <div className='dog__categories'>
            <h3><b>CATEGORIAS DE ESPORTES</b></h3>
            <div className='categories'>
              <ul>
                <li>&gt; Casual</li>
                <li>&gt; Competição</li>
                <li>&gt; Treinamento</li>
              </ul>
            </div>
          </div>
          <div className='newsletter'>
            <h3><b>SUPORTE</b></h3>
            <h3>Contatos</h3>
            <span>
              Raul@grafix.com
            </span>
            <p>
              Entre em contato e será notificado quando respondermos
            </p>
          </div>
        </div>
        <div className='copyright'>
          <p>
            © 2023 HobbyIt. All Rights Reserved
          </p>
          {/*
          <div className='share'>
            <div>
              <i className='fab fa-facebook-f' />
            </div>
            <div>
              <i className='fab fa-linkedin-in' />
            </div>
            <div>
              <i className='fab fa-twitter' />
            </div>
            <div>
              <i className='fab fa-google-plus-g' />
            </div>
            <div>
              <i className='fab fa-github' />
            </div>
            
          </div>
          */}
        </div>
      </footer>
    </>
  )
}
export default Main
