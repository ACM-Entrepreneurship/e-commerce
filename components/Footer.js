const Footer = () => {
    return (
      <footer>
        <section className='join-mailing-list'>
          <div className='mailing-list'>
            <form action=''>
              <input type='email' name='email' placeholder='Sign up for newsletter - enter your email' />
            </form>
          </div>
        </section>
        <section className='footer-information'>
          <ul>
            <li><a href='/'>About our E-commerce company</a></li>
            <li><a href='/'>About ACM Entrepreneurship</a></li>
            <li><a href='/'>About ACM Entrepreneurship</a></li>
            <li><a href='/'>About MST ACM</a></li>
            <li><a href='/'>Contact</a></li>
            <li><a href='/'>Terms of Service</a></li>
          </ul>
        </section>
        <section className='copyright'>
          Copyright 2023 ACM Entrepreneurship
        </section>
      </footer>
    );
  }
   
  export default Footer;