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
                    name="height"
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
            </AntForm>
        </div>
    );
}