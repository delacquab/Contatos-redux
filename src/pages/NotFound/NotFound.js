import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="not-found">
    Página não encontrada
    <Link data-test="voltar" to="/">Voltar</Link>
  </div>
)

export default NotFound
