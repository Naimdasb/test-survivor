import { Form as AntForm, Input, Button, Checkbox } from 'antd';
import { Survivor } from '../../types/survivor';

const { Item } = AntForm;

type Props = {
    onFinish: (values: Survivor) => void;
}

const initialValues = {
    name: '',
    age: '',
    city: '',
    weight: '',
    height: '',
    infected: false
}

export const Form = ({ onFinish }: Props) => {

    return (
        <div className='col-12 col-sm-8 col-lg-6'>
            <AntForm
                name="basic"
                onFinish={onFinish}
                layout='vertical'
                initialValues={initialValues}
            >
                <Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter survivor's name." },
                    { max: 20, message: "Max lenght is 20 characters." },
                    ]}
                >
                    <Input />
                </Item>
                <Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: "Please enter survivor's age." },
                    { max: 3, message: "Max lenght is 3 characters." },
                    ]}
                >
                    <Input type='number' />
                </Item>
                <Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: "Please enter survivor's city." },
                    { max: 20, message: "Max lenght is 20 characters." }
                    ]}
                >
                    <Input />
                </Item>
                <Item
                    label="Weight (kg)"
                    name="weight"
                    rules={[{ required: true, message: "Please enter survivor's weight." },
                    { max: 3, message: "Max lenght is 3 characters." },
                    ]}
                >
                    <Input type='number' />
                </Item>
                <Item
                    label="Height (cm)"
                    name="height"
                    rules={[{ required: true, message: "Please enter survivor's height." },
                    { max: 3, message: "Max lenght is 3 characters." },
                    ]}
                >
                    <Input type='number' />
                </Item>
                <Item name="infected" valuePropName='checked'>
                    <Checkbox>Infected</Checkbox>
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Item>
            </AntForm>
        </div>
    );
}