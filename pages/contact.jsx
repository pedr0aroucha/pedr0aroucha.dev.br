import { useState } from 'react';

import styles from '../styles/pages/Contact.module.css';

export default function Contact() {
  const [dataToSend, setDataToSend] = useState({
    email: '',
    nome: '',
    mensagem: '',
  });
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setDataToSend({ ...dataToSend, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage('Enviando...');
    fetch('https://pedr0aroucha-api.herokuapp.com/send', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(dataToSend),
    })
      .then(() => setMessage('Obrigado 🤩🤩'))
      .catch((erro) => {
        console.error(error);
        setMessage('Try again later');
      });
  }

  return (
    <div className={styles.contact}>
      <h1>contato</h1>
      {message ? (
        <h3>{message}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="from_addr"> Endereço de Email * </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu email..."
            required
            value={dataToSend.email}
            onChange={handleChange}
          />
          <label htmlFor="subject"> Nome * </label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Seu nome..."
            required
            value={dataToSend.nome}
            onChange={handleChange}
          />
          <label htmlFor="message"> Mesagem * </label>
          <textarea
            type="text"
            name="mensagem"
            id="mensagem"
            placeholder="Sua mensagem..."
            required
            rows={6}
            value={dataToSend.mensagem}
            onChange={handleChange}
          ></textarea>
          <button type="submit">enviar</button>
        </form>
      )}
    </div>
  );
}
