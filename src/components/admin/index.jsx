// O admin poderia ver quantas doações tem e a lista de doadores
//fazer map lendo todos os itens da lista da api
//guardar nome do usuario no localStoraged?

import { useEffect, useState } from "react";
import "./style.css";

import api from "../../services/api";

function Admin() {
  const [doadores, setDoadores] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/doadores");
      setDoadores(response.data);
    })();
  }, []);

  console.log(doadores);
  let donors = {};
  donors = doadores.map(function (doadores) {
    return (donors = doadores);
  });

  return (
    <div>
      <div className="admin-title">Bem vindo $nomedoadmin!</div>
      <div className="div-admin">
        <div className="admin1">
          <div className="lista-doadores">
            <p>Lista de quem já doou:</p>
            <ul className="list-donors">
              {donors.map((doador) => {
                return (
                  <li className="li-list-donors" key={doador.nome}>
                      <span>{doador.nome}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="admin2">
          <p>Como estão os estoques:</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
