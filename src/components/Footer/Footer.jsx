import styles from './Footer.module.css';
import BuyLinks from './BuyLinks/BuyLinks.jsx'
import Links from './Links/Links.jsx';
import SignUpAction from './SignUpAction/SignUpAction.jsx';
import SocialLinks from './SocialLinks/SocialLinks.jsx';

function Footer() {

    return (

        <>
        
            <BuyLinks />

            <Links />

            <SignUpAction />

            <SocialLinks />
        
        </>

    );

}

export default Footer;