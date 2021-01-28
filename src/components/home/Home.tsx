import { Button } from 'antd';

export const Home = () => {
    return (
        <div style={{ height: '100vh', backgroundColor: '#aaa' }}>
            <div className="container d-flex flex-column align-items-center justify-content-center h-100">
                <div className="jumbotron w-100 shadow-lg rounded bg-white p-4 p-sm-5 anim">
                    <h1 className='display-4'>Survivors List</h1>
                    <Button type='primary'>Check Survivors</Button>
                </div>
            </div>
        </div>
    )
}