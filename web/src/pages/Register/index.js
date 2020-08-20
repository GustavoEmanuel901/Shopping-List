import React, { useRef } from 'react';

import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { Container } from './styles';
import api from '../../services/api';

function Register() {
    const formRef = useRef(null)

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('O Nome é Obrigatório'),
                quantity: Yup.number().required('A Quantidade é Obrigatória'),
                value: Yup.number().required('O Valor é Obrigatório')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            await api.post('/products', data)

            alert('Cadastrado com sucesso')

            reset()
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return (
        <Container>
            <h1>O que você vai Comprar?</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="Name">Nome do Produto</label>
                    <Input name='name' />
                </div>

                <div className="input-block">
                    <label htmlFor="Description">Descrição</label>
                    <Textarea name='description' />
                </div>

                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="Quantity">Quantidade</label>
                        <Input name='quantity' type='number' min='0' />
                    </div>

                    <div className="input-block">
                        <label htmlFor="Value">Valor por Unidade</label>
                        <Input name='value' type='number' min='0' />
                    </div>
                </div>

                <div className="env">
                    <button className="button">Colocar na Lista</button>
                </div>
            </Form>

            <Link to='list' className="link">
                Veja sua lista de compras
            </Link>
        </Container>
    );
}

export default Register;