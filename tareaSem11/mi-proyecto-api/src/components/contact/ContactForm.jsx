// src/components/contact/ContactForm.jsx
import { useState } from 'react';
import { Form, Button, Alert, FloatingLabel } from 'react-bootstrap';

const ContactForm = () => {
  // 1. Estado para los valores del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // 2. Estado para los errores de validación
  const [errors, setErrors] = useState({});

  // 3. Estado para el mensaje de éxito
  const [showSuccess, setShowSuccess] = useState(false);

  // Función para validar campos individuales
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) error = 'El nombre debe tener al menos 3 caracteres.';
        break;
      case 'email':
        // Expresión regular simple para validar email
        if (!/\S+@\S+\.\S+/.test(value)) error = 'El formato del email no es válido.';
        break;
      case 'subject':
        if (!value) error = 'El asunto es requerido.';
        break;
      case 'message':
        if (value.length < 10) error = 'El mensaje debe tener al menos 10 caracteres.';
        break;
      default:
        break;
    }
    return error;
  };

  // 4. Maneja el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validar en tiempo real si ya hay un error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  // 5. Valida cuando el usuario sale del campo (onBlur)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // 6. Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todos los campos antes de enviar
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // Si no hay errores, el envío es exitoso
    if (Object.keys(newErrors).length === 0) {
      console.log('Formulario enviado:', formData);
      setShowSuccess(true);
      
      // Limpiar formulario
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {/* 7. Mensaje de Éxito */}
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          ¡Mensaje enviado con éxito! Te responderemos pronto.
        </Alert>
      )}

      {/* Campo Nombre */}
      <Form.Group className="mb-3" controlId="formName">
        <FloatingLabel label="Nombre Completo">
          <Form.Control
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.name} // Muestra el borde rojo si hay error
          />
          {/* Mensaje de error específico */}
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      {/* Campo Email */}
      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel label="Correo Electrónico">
          <Form.Control
            type="email"
            name="email"
            placeholder="tu@correo.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      {/* Campo Asunto */}
      <Form.Group className="mb-3" controlId="formSubject">
        <FloatingLabel label="Asunto">
          <Form.Control
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.subject}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      {/* Campo Mensaje */}
      <Form.Group className="mb-3" controlId="formMessage">
        <FloatingLabel label="Mensaje">
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            style={{ height: '150px' }}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>

      <Button variant="primary" type="submit" size="lg">
        Enviar Mensaje
      </Button>
    </Form>
  );
};

export default ContactForm;