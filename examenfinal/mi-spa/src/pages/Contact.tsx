import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Todos los campos son requeridos');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Email no válido');
      return;
    }
    setSuccess('Mensaje enviado con éxito 🎉');
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <div className="col-md-6">
      <h2>Contacto</h2>
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea className="form-control" value={message} onChange={e => setMessage(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Contact;