import React from "react";
import { Link } from "react-router-dom";

import Data from "../Data";

export default function Aulas(props) {
  return (
    <div className="page">
      <h1>Aulas</h1>
      <ul className="aulas">
        {Data.map((aula) => (
          <li key={aula.id}>
            <Link to={`/aulas/${aula.id}`} className="link">{aula.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
