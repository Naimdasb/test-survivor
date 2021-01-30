import { Tag } from 'antd';

type Props = {
    status: boolean;
    text: string;
}

export const StatusTag = ({ status, text }: Props) => {
    return <Tag color={status ? "red" : "green"}>{text}</Tag>
}