const Footer = () => {
    return (
      <footer>
        <section className='join-mailing-list'>
          <div className='mailing-list'>
            <form>
              <input type='email' name='email' placeholder='enter your email and press Enter' />
            </form>
          </div>
        </section>
        <section className='footer-information'>
          <ul>
            <li><a>About our E-commerce company</a></li>
            <li><a>About ACM Entrepreneurship</a></li>
            <li><a>About MST ACM</a></li>
            <li><a>Contact</a></li>
            <li><a>Terms of Service</a></li>
          </ul>
        </section>
        <section className='copyright'>
          Copyright 2023 ACM Entrepreneurship
        </section>
      </footer>
    );
  }
   
  export default Footer;