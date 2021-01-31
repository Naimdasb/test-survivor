import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Survivor } from '../../types/survivor';

import { Form } from './Form';


export const SurvivorForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const onFinish = (values: Survivor) => {
        dispatch({ type: 'ADD_SURVIVOR', payload: values });
        router.push('/');
    }

    return (
        <Form onFinish={onFinish} />
    )
}