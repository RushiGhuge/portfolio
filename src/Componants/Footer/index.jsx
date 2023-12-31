import './style.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Footer = () => {
    return (
        <footer name='Contacts' id="footer">
            <div className="contact-head">
                <h3>Contact</h3>
                <h1 className="center footerHeading">Don't be shy! Hit me up! 👇</h1>
            </div>
            <div className="locationn-mail">
                <div className="box">
                    <div className="circle">
                        <MyLocationIcon />
                    </div>
                    <div className="rows">
                        <h3>Location</h3>
                        <p>Pune, India</p>
                    </div>
                </div>

                <div className="box">
                    <div className="circle">
                        <MailOutlineIcon />
                    </div>
                    <div className="rows">
                        <h3>Mail</h3>
                        <p id="mail">rushimghuge@gmail.com</p>
                    </div>
                </div>

                <div className="box">
                    <div className="circle">
                        <LocalPhoneIcon />
                    </div>
                    <div className="rows">
                        <h3>Phone</h3>
                        <p id="mail">+91 7758087619</p>
                    </div>
                </div>


            </div>
        </footer>
    );
}

export default Footer;
