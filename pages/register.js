import styles from '../styles/Home.module.css';
import {useState} from 'react';
import {useRouter} from 'next/router';
import { handle_register } from '../controllers/register_controller';

export default function Home() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [rpass, setRPass] = useState('');

  const router = useRouter();

  return (
    <div className={styles.container}>
      <main>
        <p className={styles.description}>
          Form de registro 
        </p>

        <div>
          Seu usuario: <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/><br/>
          Sua senha: <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /><br/>
          Repetir senha: <input type="password" value={rpass} onChange={(e) => setRPass(e.target.value)} /><br/>
          <button onClick={async () => {
              let result = await handle_register(user, pass, rpass);

              if(result !== null){
                    alert(result);
              } else{
                    router.push('/');
              } 
          }}>Enviar</button>
        </div>

      </main>
    </div>
  );
}
