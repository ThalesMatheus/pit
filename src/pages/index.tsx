import React from 'react'
import Link from 'next/link'

export const Main = () => {
  return (
    <>
      <section id='one'>
        <nav id='nav'>
          <div className='nav-logo'>
            <div className='nav-heading'>
              <span href='#'>
                <i className='fas fa-paw logo white' />
                Dogs Care
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
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>PAGES </a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <div className='search-section'>
              <span className='search'>
                <input type='search' placeholder='Enter to search' />{' '}
                <button className='search-btn'>
                  <i className='fas fa-search' />
                </button>
              </span>
            </div>
            <span>
              <i className='far fa-moon white night' />
            </span>
          </ul>
        </nav>
        <div className='content'>
          <div className='text-content'>
            <h1 className='white'>
              Providing Special care For <strong>Your Pets!</strong>
            </h1>
            <h4 className='blackish'>
              We offer special services for special pets!
            </h4>
            <div className='two-button'>
              <button className='w-btn btn'>View Our Services</button>
              <button className='t-btn btn'>Hire Us</button>
            </div>
          </div>
        </div>
      </section>
      <section id='one-half' className='goblack'>
        <span>
          <img
            src='https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt=''
          />
        </span>
        <div className='half-content'>
          <div className='half__text'>
            <h1>About Us</h1>
            <p>
              Orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a
              diam et dui fermentum dolor molestie vel id neque. Donec sed tempus
              enim, a congue risus. Pellen tesqu.
            </p>
          </div>
          <div className='half__boxes'>
            <div className='box'>
              <span href='#'>
                <i className='fas fa-paw logo' />
              </span>
              <h2>Our Mission</h2>
              <p>
                In a diam et dui elit, orci urna vel id neque. Donec sed tempus
                enims.
              </p>
            </div>
            <div className='box'>
              <span href='#'>
                <i className='fas fa-paw logo' />
              </span>
              <h2>Our Vision</h2>
              <p>
                In a diam et dui elit, orci urna vel id neque. Donec sed tempus
                enims.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='two'>
        <div className='heading '>
          <h1>What We Do</h1>
          <p className='lightblack'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, eaque ipsa quae ab illo inventore.
          </p>
        </div>
        <div className='container'>
          <div className='info'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img1.jpg'
                alt=''
              />
            </span>
            <div className='info__text'>
              <h1>Donec sed teus enime</h1>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h5 className=''>READ MORE</h5>
            </div>
          </div>
          <div className='info'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img2.jpg'
                alt=''
              />
            </span>
            <div className='info__text'>
              <h1>It's enim ad minim aute</h1>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h5 className=''>READ MORE</h5>
            </div>
          </div>
          <div className='info'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img3.jpg'
                alt=''
              />
            </span>
            <div className='info__text'>
              <h1>Ullamco laboris nisi uts</h1>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h5 className=''>READ MORE</h5>
            </div>
          </div>
        </div>
      </section>
      <section id='four' className='goblack'>
        <article>
          <h1>Happy Customers</h1>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
            ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non quae, fugiat.
          </p>
          <p>
            Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non quae, fugiat. Lorem ipsum viverra feugiat. Pellen
            tesque libero ut justo, ultrices in ligula.
          </p>
          <div className='article__icon'>
            <div className='customer__info'>
              <span>
                <i className='fas fa-user-plus' /> 100K+
              </span>
              <pre>{'         '}Customers</pre>
            </div>
            <div className='customer__info'>
              <span>
                <i className='fas fa-thumbs-up' /> 100%
              </span>
              <pre>{'        '}Satisfaction</pre>
            </div>
          </div>
        </article>
        <div className='four__info'>
          <div className='some__info'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi1.jpg'
                alt=''
              />
            </span>
            <div className='four__text'>
              <h1>“</h1>
              <p>
                Dsuis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. "
              </p>
              <h4>Mario Spe</h4>
            </div>
          </div>
          <div className='some__info'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi2.jpg'
                alt=''
              />
            </span>
            <div className='four__text'>
              <h1>“</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore. "
              </p>
              <h4>Petey Cru</h4>
            </div>
          </div>
        </div>
      </section>
      <section id='gallery'>
        <div className='heading '>
          <h1>Our Gallery</h1>
          <p className='lightblack'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, eaque ipsa quae ab illo inventore.
          </p>
        </div>
        <div className='gallery__container'>
          <div className='first__row row'>
            <span>
              <img
                className='shine'
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g1.jpg'
                alt=''
              />
            </span>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g22.jpg'
                alt=''
              />
            </span>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g3.jpg'
                alt=''
              />
            </span>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g4.jpg'
                alt=''
              />
            </span>
          </div>
          <div className='second__row row'>
            <div className='first__column'>
              <span>
                <img
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g8.jpg'
                  alt=''
                />
              </span>
              <span>
                <img
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g6.jpg'
                  alt=''
                />
              </span>
            </div>
            <span className='big__image'>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g9.jpg'
                alt=''
              />
            </span>
            <div className='first__column'>
              <span>
                <img
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g7.jpg'
                  alt=''
                />
              </span>
              <span>
                <img
                  src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/g5.jpg'
                  alt=''
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id='five' className='goblack'>
        <div className='dog__image'>
          <img
            src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/dog2.png'
            alt=''
          />
        </div>
        <div className='dog__container'>
          <div className='dog__boxes'>
            <div className='dog__box'>
              <span>
                <i className='fas fa-thumbs-up' />
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
            <div className='dog__box'>
              <span>
                <i className='fas fa-paw' />
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
          </div>
          <div className='dog__boxes'>
            <div className='dog__box'>
              <span>
                <i className='fas fa-bullhorn' />
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
            <div className='dog__box'>
              <span>
                <i className='fas fa-cut' />
              </span>
              <h4>Dog Sitting</h4>
              <p>
                Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                posuere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='six'>
        <h5>PET LOVERS</h5>
        <h1>Our Team Is Filled With Highly Dedicated Pet Lovers</h1>
        <button className='btn w-btn'>Read More</button>
      </section>
      <section id='seven' className='goblack'>
        <div className='heading '>
          <h1>Latest News</h1>
          <p className='lightblack'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, eaque ipsa quae ab illo inventore
          </p>
        </div>
        <div className='container container__bg goblack'>
          <div className='info goblack'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog3.jpg'
                alt=''
              />
            </span>
            <div className='info__text'>
              <pre>
                {'                                                   '}May 5, 2021
              </pre>
              <h1>Hello world!</h1>
              <h5 className=''>READ MORE &gt;</h5>
            </div>
          </div>
          <div className='info goblack'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog2.jpg'
                alt=''
              />
            </span>
            <div className='info__text'>
              <pre>
                {'                                                    '}May 5, 2021
              </pre>
              <h1>How to keep your dog cool this summer</h1>
              <h5 className=''>READ MORE &gt;</h5>
            </div>
          </div>
          <div className='info goblack'>
            <span>
              <img
                src='https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog1.jpg'
                alt=''
              />
            </span>
            <div className='info__text'>
              <pre>
                {'                                                     '}May 5, 2021
              </pre>
              <h1>Solution for grooming behavior problems</h1>
              <h5 className=''>READ MORE &gt;</h5>
            </div>
          </div>
        </div>
      </section>
      <footer id='eight'>
        <div className='footer__container'>
          <div className='dog__care '>
            <span href='#'>
              <i className='fas fa-paw ' />
              Dogs Care
            </span>
            <p>
              Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam
              eget turpis ornare, euismod ligul aeget, enenatis dui.
            </p>
          </div>
          <div className='dog__categories'>
            <h3>CATEGORIES</h3>
            <div className='categories'>
              <ul>
                <li>&gt; Dog</li>
                <li>&gt; Dog Care</li>
                <li>&gt; Pets</li>
                <li>&gt; Uncategorized</li>
              </ul>
              <ul>
                <li>&gt; May 2021</li>
                <li>&gt; April 2021</li>
              </ul>
            </div>
          </div>
          <div className='newsletter'>
            <h3>NEWSLETTER</h3>
            <h3>SUBSCRIBE HERE NOW</h3>
            <span>
              <input type='text' placeholder='Email Address' />
              <button className='btn'>
                <i className='far fa-paper-plane' />
              </button>
            </span>
            <p>
              Subscribe to our mailing list and get updates to your email inbox.
            </p>
          </div>
        </div>
        <div className='copyright'>
          <p>
            © 2021 Dogs Care. All Rights Reserved | WordPress Theme by{' '}
            <strong>W3Layouts.</strong>{' '}
          </p>
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
        </div>
      </footer>
    </>
  )
}
export default Main
