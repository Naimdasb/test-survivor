export const updateSurvivorStatus = async ({ id, infected }) => {
    await fetch('http://localhost:3000/api/survivors', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, infected })
    })
}

export const deleteSurvivorDatabase = async ({ id }) => {
    await fetch('http://localhost:3000/api/survivors', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
}

export const addSurvivorDatabase = async ({ values }) => {
    await fetch('http://localhost:3000/api/survivors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values })
    })
}


