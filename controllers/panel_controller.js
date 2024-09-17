import data from '../internal/data';

export const fetch_user_data = async () => {
    const res = await fetch(`${data.api}/panel`, { method: 'GET' });

    if (!res.ok) {
        return await res.text();
    }
    
    return await res.json();
};

export const logout_user = async () => {
  try {
    await fetch(`${data.api}/logout`, { method: 'GET' });
  } catch (_) { }
};

export const delete_user = async () => {
  try {
    await fetch(`${data.api}/delete`, { method: 'GET' });
  } catch (_) { }
};

export const edit_user = async (pass, npass) => {
    try{
        const res = await fetch(`${data.api}/edit`, { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pass: pass,
                rpass: npass
            })});

        if(!res.ok){
            return await res.text();
        }

        return null;
    }
    catch(err){
        return err;
    }
}
