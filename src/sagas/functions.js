export const updateSurvivorStatus = async ({ id, infected }) => {
    const response = await fetch('http://localhost:3000/api/survivors', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, infected })
    })
    if (response.status === 400) {
        throw response
    }
}

export const deleteSurvivorDatabase = async ({ id }) => {
    const response = await fetch('http://localhost:3000/api/survivors', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    if (response.status === 400) {
        throw response
    }
}

export const addSurvivorDatabase = async ({ values }) => {
    const response = await fetch('http://localhost:3000/api/survivors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values })
    })
    if (response.status === 400) {
        throw response
    }
}


