import React from 'react';
import '../Footer/footer.css';


const Footer = () => {

    const date = new Date();

    return (
        <div className='footer-about-container'>
            <div className="footer-about">
                <div className='footer-about-dot'>{' • '}</div>
                    <a
                        className="footer-linkedin"
                        href='https://www.linkedin.com/in/kristen-reid-a4b499202/'
                        target="_blank"
                    >
                        Linkedin
                    </a>
                <div className='footer-about-dot'>{' • '}</div>
                    <a
                        className='footer-github'
                        href='https://github.com/Kristen-Reid/Anstagram'
                        target="_blank"
                    >
                        GitHub
                    </a>
            </div>
            <div className='footer-copyright'>
            © {date.getFullYear()} Anstagram by Kristen Reid
            </div>
        </div>
    )
}


export default Footer;
