import data from '../internal/data'

export const handle_login = async (user, pass) => {
    const res = await fetch(`${data.api}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, pass })
    });

    if (!res.ok) {
        return await res.text();
    }

    return null;
}
