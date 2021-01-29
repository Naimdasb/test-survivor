import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useRouter } from 'next/router';

import { Survivor } from '../../types/survivor';

const { Item } = Form;

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
            notification.error({ message: 'Error', description: 'There was an error.' })
        }
    }

    return (
        <div className='col-12 col-sm-8 col-lg-6'>
            <Form
                name="basic"
                onFinish={onFinish}
                layout='vertical'
            >
                <Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter survivor's name." }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: "Please enter survivor's weight." }]}
                >
                    <Input />
                </Item>
                <Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: "Please enter survivor's city." }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Weight"
                    name="weight"
                    rules={[{ required: true, message: "Please enter survivor's weight." }]}
                >
                    <Input />
                </Item>
                <Item
                    label="Height"
                    name="heihgt"
                    rules={[{ required: true, message: "Please enter survivor's height." }]}
                >
                    <Input />
                </Item>
                <Item name="infected" valuePropName="checked">
                    <Checkbox>Infected</Checkbox>
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Item>
            </Form>
        </div>
    );
}