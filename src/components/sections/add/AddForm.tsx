import { SurvivorForm } from '../../form/SurvivorForm'

export const AddForm = () => {

    return (
        <div style={{ minHeight: '100vh' }}>
            <div className='container'>
                <h1 className='display-4 py-5'>Add Survivor</h1>
                <SurvivorForm />
            </div>
        </div>
    )
}