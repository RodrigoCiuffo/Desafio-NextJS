import '../styles/globals.css';
import '@fontsource/montserrat';
import '@fontsource/press-start-2p';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

function GeneralSettings({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default GeneralSettings;