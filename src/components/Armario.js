import React, { useState } from "react"
import styled from "styled-components"
import { FaLock, FaUnlockAlt } from "react-icons/fa"
import ReserveForm from "./ReserveForm"
import { toast } from "react-toastify"

const ArmarioContainer = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => (props.disponivel ? "#7FFF7F" : "#FF7F7F")};
  max-width: 500px;
  text-align: center;

  @media (max-width: 500px) {
    width: 50%;
  }
`

const ReserveButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`

const Armario = ({ numero, disponivel, onReserve }) => {
  const [showForm, setShowForm] = useState(false)

  const handleReserveClick = () => {
    if (disponivel) {
      setShowForm(true)
    } else {
      toast.error("Este armário já está reservado.")
    }
  }

  const handleReserveFormSubmit = (name) => {
    onReserve(name, numero)
  }

  return (
    <ArmarioContainer disponivel={disponivel}>
      {disponivel ? <FaUnlockAlt size={32} /> : <FaLock size={32} />}
      <p>Número do Armário: {numero}</p>
      <p>Disponível: {disponivel ? "Sim" : "Não"}</p>
      <ReserveButton onClick={handleReserveClick}>Reservar</ReserveButton>
      {showForm && (
        <ReserveForm
          onReserve={handleReserveFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </ArmarioContainer>
  )
}

export default Armario
