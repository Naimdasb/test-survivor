import { AppProps } from 'next/app';

import { store } from '../redux/store';
import { Navigation } from '../components/navigation/Navigation';
import { Footer } from '../components/footer/Footer';

import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Navigation />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <Footer />
        </>
    )
}

export default App;