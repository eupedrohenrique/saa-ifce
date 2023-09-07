import React from "react"
import styled from "styled-components"
import { FaLock, FaUnlockAlt } from "react-icons/fa"

const ArmarioContainer = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => (props.disponivel ? "#7FFF7F" : "#FF7F7F")};
  max-width: 500px;
  text-align: center;

  @media (max-width: 500px) {
    width: 50%; /* Em telas menores, ocupa 100% da largura */
  }
`

const Armario = ({ numero, disponivel }) => {
  return (
    <ArmarioContainer disponivel={disponivel}>
      {disponivel ? <FaUnlockAlt size={32} /> : <FaLock size={32} />}
      <p>Número do Armário: {numero}</p>
      <p>Disponível: {disponivel ? "Sim" : "Não"}</p>
    </ArmarioContainer>
  )
}

export default Armario
