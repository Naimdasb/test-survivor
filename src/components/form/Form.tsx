import { Form as AntForm, Input, Button, Checkbox } from 'antd';
import { Survivor } from '../../types/survivor';

const { Item } = AntForm;

type Props = {
    onFinish: (values: Survivor) => void;
}

export const Form = ({ onFinish }: Props) => {

    return (
        <div className='col-12 col-sm-8 col-lg-6'>
            <AntForm
                name="basic"
                onFinish={onFinish}
                layout='vertical'
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
                    rules={[{ required: true, message: "Please enter survivor's weight." },
                    { max: 3, message: "Max lenght is 3 characters." },
                    { type: "number", message: "Numbers only." }
                    ]}
                >
                    <Input />
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
                    { type: "number", message: "Numbers only." }
                    ]}
                >
                    <Input />
                </Item>
                <Item
                    label="Height (cm)"
                    name="height"
                    rules={[{ required: true, message: "Please enter survivor's height." },
                    { max: 3, message: "Max lenght is 3 characters." },
                    { type: "number", message: "Numbers only." }
                    ]}
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
            </AntForm>
        </div>
    );
}