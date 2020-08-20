import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import * as Yup from 'yup'

import Input from './components/Form/input'

function App() {
  
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        address: Yup.object().shape({
          city: Yup.string().min(3, 'No mínimo 3 caracteres').required('A cidade é obrigatória')
        })
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data)

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

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'Gustavo',
        email: 'gustavo@gmail.com',
        address: {
          city: 'Pinhais'
        }
      })
    }, 2000)
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input name="email" />

        <Scope path='address'>
          <Input name='street'/>
          <Input name='number'/>
          <Input name='city'/>
          <Input name='state'/>
          <Input name='zipcode'/>
        </Scope>

        <button type='submit'>Entrar</button>
      </Form>
    </div>
  );
}

export default App;
