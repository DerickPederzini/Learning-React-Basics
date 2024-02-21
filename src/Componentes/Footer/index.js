import './footer.css'

const Footer = () => {

    return(
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/derick-pederzini-4685a6267/" target="_blank">
                        <img className='icon' src="/images/business.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DerickPederzini" target="_blank">
                        <img className='icon' src="/images/social-media.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/derick_pdzn/" target="_blank">
                        <img className='icon' src="/images/instagram (1).png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Developed with Alura's help.
            </p>
        </section>
    </footer>
    )

}

export default Footer