import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { Survivor } from '../../types/survivor';

import { Form as AntForm } from 'antd';

import { Form } from './Form';

const initialValues = {
    name: '',
    age: '',
    city: '',
    weight: '',
    height: '',
    infected: false
}


export const SurvivorForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const loading = useSelector((state: any) => state.loading);

    const onFinish = (values: Survivor) => {
        dispatch({ type: 'ADD_SURVIVOR', payload: values });
        router.push('/dashboard');
    }

    return (
        <div className='col-12 col-sm-8 col-lg-6'>
            <AntForm
                name="basic"
                onFinish={onFinish}
                layout='vertical'
                initialValues={initialValues}
            >
                <Form loading={loading} />
            </AntForm>
        </div >
    )
}