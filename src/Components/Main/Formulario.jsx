import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import styled from 'styled-components';
import { corActive, corFundoPrimeiro, corSuccessMessage } from '../UI/Variaveis';

const { Item } = Form;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const StyledInput = styled(Input)`
  && {
    border-color: transparent;
    box-shadow: none;

    &:hover {
      border-color: none;

      &&:focus {
        border-color: none;
      }
    }
  }
`;


const StyledButton = styled(Button)`
  && {
    background-color: ${corFundoPrimeiro};
    border-color: none;

    &:hover {
      background-color: ${corFundoPrimeiro};
      border-color: none;
    }

    &:active {
      background-color: ${corActive};
      border-color: none;
    }
  }
`;

const SuccessMessage = styled.p`
  color: ${corSuccessMessage};
  font-weight: 500;
  margin-top: 10px;
`;

const Formulario = () => {
  const [form] = useForm();
  const [enviado, setEnviado] = useState(false);

  const onFinish = async (values) => {
    console.log('Valores do formulário:', values);
    form.resetFields();
    setEnviado(true);
    message.success({
      content: 'Enviado com sucesso!',
      style: { fontWeight: '500' },
      duration: 2,
      onClose: () => setEnviado(false),
    });
  };
  
  const phoneRegex = /^[0-9]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  
  const phoneErrorMessage = 'O telefone deve conter apenas números.';
  const phoneLengthErrorMessage = 'O telefone deve ter exatamente 11 dígitos, incluindo o código de área (DDD).';
  const nameErrorMessage = 'O nome não deve conter números.';
  
  const validatePhone = async (_, value) => {
    if (value && value.length !== 11) {
      return Promise.reject(phoneLengthErrorMessage);
    }
    return Promise.resolve();
  };
  
  const validatePhonePattern = async (_, value) => {
    if (value && !phoneRegex.test(value)) {
      return Promise.reject(phoneErrorMessage);
    }
    return Promise.resolve();
  };
  
  const validateName = async (_, value) => {
    if (value && !nameRegex.test(value)) {
      return Promise.reject(nameErrorMessage);
    }
    return Promise.resolve();
  };  

  return (
    <Form form={form} name="meuFormulario" onFinish={onFinish} {...layout}>
      <Item
        label="Nome"
        name="nome"
        rules={[
          { required: true, message: 'Por favor, insira seu nome.' },
          { validator: validateName },
          { min: 4, message: 'O nome deve ter pelo menos 4 caracteres.' },
          { max: 50, message: 'O nome deve ter no máximo 50 caracteres.' },
        ]}
      >
        <StyledInput />
      </Item>

      <Item
        label="Telefone"
        name="telefone"
        rules={[
          { required: true, message: 'Por favor, insira seu telefone.' },
          { validator: validatePhone },
          { validator: validatePhonePattern },
        ]}
      >
        <StyledInput />
      </Item>

      <Item
        label="Endereço"
        name="endereco"
        rules={[
          { required: true, message: 'Por favor, insira seu endereço.' },
          { min: 5, message: 'O endereço deve ter pelo menos 5 caracteres.' },
          { max: 100, message: 'O endereço deve ter no máximo 100 caracteres.' },
        ]}
      >
        <StyledInput />
      </Item>

      <Item>
        <StyledButton type="primary" htmlType="submit">
          Enviar
        </StyledButton>

        {enviado && <SuccessMessage>Enviado com sucesso!</SuccessMessage>}
      </Item>
    </Form>
  );
};

export default Formulario;
