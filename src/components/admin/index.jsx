// O admin poderia ver quantas doações tem e a lista de doadores
//guardar nome do usuario no localStoraged?

import { useEffect, useState } from "react";
import "./style.css";

import api from "../../services/api";

function Admin() {
  const [doadores, setDoadores] = useState([]);
  const [tiposSangue, setTiposSangue] = useState([]);

  
  let adm = JSON.parse(localStorage.getItem("adm"));

  useEffect(() => {
    (async () => {
      const response = await api.get("/doadores");
      setDoadores(response.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api.get("/tiposSangue");
      setTiposSangue(response.data);
    })();
  });
  
  let donors = {};
  donors = doadores.map(function (doadores) {
    return (donors = doadores);
  });

  let bloodTypes = {};
  bloodTypes = tiposSangue.map(function (tiposSangue) {
    return (bloodTypes = tiposSangue);
  });

  return (
    <div>
      <div className="admin-title">Bem vindo {(adm.nome)}!</div>
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
          <div className="lista-tipos-sangue">
            <p>Como estão os estoques:</p>
            <ul className="list-types">
              {bloodTypes.map((tiposSangue) => {
                return (
                  <li className="li-list-types" key={tiposSangue.tipo}>
                    <span className="tipo-sangue">{tiposSangue.tipo} {tiposSangue.fatorRh}</span>
                    <span className="quantidade-sangue">{tiposSangue.quantidade}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
