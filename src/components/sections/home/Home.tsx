import { Button } from 'antd';
import Link from 'next/link'

export const Home = () => {
    return (
        <div style={{ height: '100vh', backgroundColor: '#fff' }}>
            <div className="container d-flex flex-column align-items-center justify-content-center h-100">
                <div className="jumbotron w-100 shadow-lg rounded bg-white p-4 p-sm-5">
                    <h1 className='display-4'>Survivors List</h1>
                    <Link href='/dashboard'><Button type='primary'>Go to App</Button></Link>
                </div>
            </div>
        </div>
    )
}