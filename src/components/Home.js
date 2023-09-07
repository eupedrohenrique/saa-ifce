import React from "react"
import Armario from "./Armario"
import CenteredContainer from "./CenteredContainer"

const Home = () => {
  // Simula dados de armários
  const armarios = [
    { numero: 1, disponivel: true },
    { numero: 2, disponivel: false },
    { numero: 3, disponivel: true },
    { numero: 4, disponivel: false },
  ]

  return (
    <CenteredContainer>
      <h1>Lista de Armários</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {armarios.map((armario) => (
          <Armario
            key={armario.numero}
            numero={armario.numero}
            disponivel={armario.disponivel}
          />
        ))}
      </div>
    </CenteredContainer>
  )
}

export default Home
