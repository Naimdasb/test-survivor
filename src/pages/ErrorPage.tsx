import Error from 'next/error'

type Props = {
    errorCode: number;
}

export const ErrorPage = ({ errorCode }: Props) => {
    return <Error statusCode={errorCode} />
}