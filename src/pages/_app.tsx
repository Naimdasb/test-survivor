import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App;