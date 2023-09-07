import React, { useState } from "react"
import styled from "styled-components"
import { toast } from "react-toastify"

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible
      ? "translate(-50%, -50%)"
      : "translate(-50%, -50%) scale(0.9)"};

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`

const ReserveForm = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [name, setName] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userName", name)
    toast.success(`Reserva realizada com sucesso para ${name}`)
    setIsVisible(false)
  }

  return isVisible ? (
    <FormContainer isVisible={isVisible}>
      <h2>Reservar Armário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
    </FormContainer>
  ) : null
}

export default ReserveForm
