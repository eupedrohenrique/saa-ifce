import React, { useState } from "react"
import Armario from "./Armario"
import CenteredContainer from "./CenteredContainer"

const Home = () => {
  const [armarios, setArmarios] = useState([
    { numero: 1, disponivel: true },
    { numero: 2, disponivel: false },
    { numero: 3, disponivel: true },
    { numero: 4, disponivel: false },
  ])

  const handleReserve = (name, armarioNumero) => {
    const updatedArmarios = armarios.map((armario) =>
      armario.numero === armarioNumero
        ? { ...armario, disponivel: false }
        : armario
    )

    setArmarios(updatedArmarios)
  }

  return (
    <CenteredContainer>
      <h1>Lista de Armários</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {armarios.map((armario) => (
          <Armario
            key={armario.numero}
            numero={armario.numero}
            disponivel={armario.disponivel}
            onReserve={handleReserve}
          />
        ))}
      </div>
    </CenteredContainer>
  )
}

export default Home
