import data from '../internal/data'

export const handle_register = async (user, pass, rpass) => {
    const res = await fetch(`${data.api}/register`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'user': user, 'pass': pass, 'rpass': rpass})
    })

    if(!res.ok){
        return await res.text();
    }

    return null;
}
