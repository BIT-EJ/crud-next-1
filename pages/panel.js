import styles from '../styles/Home.module.css';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import { delete_user, edit_user, fetch_user_data, logout_user } from '../controllers/panel_controller';

export default function Panel() {
  const [userData, setUserData] = useState('');

  const [pass, setPass] = useState('');
  const [rpass, setRPass] = useState('');

  const router = useRouter();

  useEffect(() => {
      fetch_user_data().then((data) => {
          if(typeof data === 'string'){
                alert(data);
                router.push('/');
                return;
          }

          setUserData(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <p className={styles.description}>
          Dados do usuario
        </p>

        <div>
          Seu id: {userData.id}<br/>
          Seu usuario: {userData.name}<br/>
          Data de entrada: {userData.join_date}<br/>
        </div>

        <br/>
        <div>
          Senha atual: <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}/><br/>
          Senha nova: <input type="password" value={rpass} onChange={(e) => setRPass(e.target.value)} /><br/>
        </div>
        <button onClick={async() => {
            let result = await edit_user(pass, rpass);

            if(result === null){
                await logout_user();
                router.push('/');
                return;
            }

            alert(result);
        }}>Mudar senha</button>
        <br/>
        <br/>

      <button onClick={async () => {
            await logout_user();
            router.push('/');
      }}>Deslogar</button> <button onClick={async () => {
            await delete_user();
            router.push('/');
      }}>Deletar</button>

      </main>
    </div>
  );
}
