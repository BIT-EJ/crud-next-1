import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {handle_login} from '../controllers/login_controller.js';

export default function Home() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return (
    <div className={styles.container}>
      <main>
        <p className={styles.description}>
          Form de login
        </p>
        <div>
          Seu usuario: <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/><br/>
          Sua senha: <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /><br/>
          <button onClick={async () => {
              let result = await handle_login(user, pass);

              if(result !== null){
                    alert(result);
              } else{
                    router.push('/panel');
              }
          }}>Enviar</button> <button onClick={(_) => {
              router.push('/register');
          }}>Criar conta</button>
        </div>

      </main>
    </div>
  );
}
