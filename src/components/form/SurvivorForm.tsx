import { notification } from 'antd';
import { useRouter } from 'next/router';

import { Survivor } from '../../types/survivor';

import { Form } from './Form';


export const SurvivorForm = () => {

    const router = useRouter()

    const onFinish = async (values: Survivor) => {

        try {
            await fetch('http://localhost:3000/api/survivors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            notification.success({ message: 'Success', description: 'Your survivor was added!' });
            router.push('/');
        } catch (error) {
            notification.error({ message: 'Error', description: 'There was an error.' });
            router.push('/');
        }
    }

    return (
        <Form onFinish={onFinish} />
    )
}