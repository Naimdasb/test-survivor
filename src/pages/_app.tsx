import { AppProps } from 'next/app';

import { store } from '../redux/store';

import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App;