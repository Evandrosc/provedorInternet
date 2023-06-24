import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { corFundoPrimeiro, corTexto, corTextoSegundo } from '../UI/Variaveis';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  > button {
    padding: 10px 15px;
    font-size: 16px;
    background-color: ${corFundoPrimeiro};
    color: ${corTexto};
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  > label {
    margin-bottom: 5px;
  }

  > input {
    padding: .5rem;
    font-size: 1rem;
    border-radius: 5px;
  }

  > small {
    color: ${corTextoSegundo};
  }
`;

const Formulario = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [telefone, setTelefone] = useState('');
  const [telefoneError, setTelefoneError] = useState('');

  const [endereco, setEndereco] = useState('');
  const [enderecoError, setEnderecoError] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const clearForm = () => {
    setName('');
    setNameError('');
    setTelefone('');
    setTelefoneError('');
    setEndereco('');
    setEnderecoError('');
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);

    const regex = /^[A-Za-z\s]{4,50}$/;
    if (!regex.test(value)) {
      setNameError('Apenas letras e no mínimo 4 caracteres.');
    } else {
      setNameError('');
    }
  };

  const handleTelefoneChange = (event) => {
    const { value } = event.target;
    setTelefone(value);

    const regex = /^[0-9]{11}$/;
    if (!regex.test(value)) {
      setTelefoneError('Informe um número de telefone válido com DDD (11 dígitos)');
    } else {
      setTelefoneError('');
    }
  };

  const handleEnderecoChange = (event) => {
    const { value } = event.target;
    setEndereco(value);

    if (value.length < 6) {
      setEnderecoError('No mínimo 6 caracteres');
    } else {
      setEnderecoError('');
    }
  };

  useEffect(() => {
    setIsFormValid(!nameError && !telefoneError && !enderecoError);
  }, [nameError, telefoneError, enderecoError]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      event.target.action = 'https://formsubmit.co/anonimoteste24@gmail.com';
      event.target.submit();

      clearForm();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit} target='_blank' action='' method='POST'>
      <FormGroup>
        <label htmlFor='name'>Nome:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Digite seu nome'
          required
          value={name}
          onChange={handleNameChange}
        />
        <small>{nameError}</small>
      </FormGroup>
      <FormGroup>
        <label htmlFor='telefone'>Telefone:</label>
        <input
          type='tel'
          id='telefone'
          name='telefone'
          placeholder='Digite seu telefone'
          required
          value={telefone}
          onChange={handleTelefoneChange}
        />
        <small>{telefoneError}</small>
      </FormGroup>
      <FormGroup>
        <label htmlFor='endereco'>Endereço:</label>
        <input
          type='text'
          id='endereco'
          name='endereco'
          placeholder='Digite seu endereço'
          required
          value={endereco}
          onChange={handleEnderecoChange}
        />
        <small>{enderecoError}</small>
      </FormGroup>
      <button type='submit'>Enviar</button>
    </FormContainer>
  );
};

export default Formulario;
