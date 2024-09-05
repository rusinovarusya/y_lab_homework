import { useState } from 'react';
import styles from './Form.module.css';

interface IData {
  email: string;
  password: string;
}

const Form = () => {
  const [data, setData] = useState<IData>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value } as IData);
  } 

  const onSubmit = () => {
    const url = '';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  return (
    <form action='' className={styles.container} onSubmit={onSubmit}>
      <h1 className={styles.title}>Login form</h1>
      <div className={styles.content}>
        <div className={styles.inputContainer}>
          <label htmlFor='email' className={styles.label}>E-mail</label>
          <input type='email' className={styles.input} name='email' id='email' placeholder='Enter e-mail' required onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='password' className={styles.label}>Password</label>
          <input type='password' className={styles.input} name='password' id='password' placeholder='Enter password' required onChange={handleChange} />
        </div>
        <input type='submit' className={styles.button} value='Submit' />
      </div>
    </form>
  );
}

export default Form;
