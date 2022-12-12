import React from "react"
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function BaseTable()
{
  const [rows, setRows] = useState([])
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
   const [idade, setIdade] = useState([])

    useEffect(() => {
        axios.get('servidor')
            .then((Response) => setRows(Response.date))
        .then((error) => console.log(error))
      //---------------nserindo valores

      const inputNome = (e) => {
        setName(e.targe.value)
      }
      const inputEmail = (e) => {
        setEmail(e.targe.value)
      }
      const inputIdade = (e) => {
        setIdade(e.targe.value)
      }
      function postName()
      {
        axios.post('servidor', { nome: name, email: email, idade: idade })
        axios.get('servidor')
         .then((Response) => setRows(Response.date))
        .then((error) => console.log(error))
      }
        
},[])

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <header>
              <label> Nome </label>
              <input onChange={(e) => inputNome (e)} />  {' '}
              <label> Email </label>
              <input onChange={(e) => inputEmail (e)} />  { ' '}
              <label> Idade </label>
              <input onChange={(e) => inputIdade (e)} />  {' '}
              <Button variant="danger" onClick={() => postName()}>Inserir</Button>{' '}
            </header>
          </tr>
        <tr>
          <th>id</th>
          <th>Nome</th>
          <th>Email</th>
            <th>Idade</th>
            <th>Escolha </th> {' '}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Carlos Maia</td>
          <td>carlosm@ig.com.br</td>
            <td>34</td>
            <td> <Button variant="danger">Inserir</Button>{' '}</td>
            <td><Button variant="primary">Visualizar</Button>{' '}</td>
           
        </tr>
        <tr>
          <td>2</td>
          <td>Maria Antunes</td>
          <td>mantunes@hotmail.com</td>
            <td>25</td>
            <td> <Button variant="danger">Inserir</Button>{' '}</td>
            <td><Button variant="primary">Visualizar</Button>{' '}</td>
           
        </tr>
        <tr>
          <td>3</td>
          <td>Nivaldo</td>
            <td>batista@gmail.com</td>
            <td>36</td>
             <td> <Button variant="danger">Inserir</Button>{' '}</td>
            <td><Button variant="primary">Visualizar</Button>{' '}</td>
           
        </tr>
      </tbody>
    </Table>
    )
    
}