//precisa colocar action dos forms
//precisa fazer esquema de ver se admin existe igual tem pro doador

import { useEffect, useState } from "react";
import "./style.css";

import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [donor, setDonor] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [newDonor, setNewDonor] = useState(false);
  const [donorNotFound, setDonorNotFound] = useState("");

  const [cpf, setCpf] = useState("");

  const [nome, setNome] = useState("");
  const [bday, setBday] = useState("");
  const [newCpf, setNewCpf] = useState("");

  const handleDonor = () => {
    setNewDonor(false);
    setAdmin(false);
    setDonor(true);
  };

  const sendForm = () => {
    setNewDonor(false);
    alert("Cadastro feito com sucesso"); //deixar assim ou fazer insertHTML ?
    setDonor(true);
  };

  const handleAdmin = () => {
    setNewDonor(false);
    setDonor(false);
    setAdmin(true);
  };

  const handleNewDonor = () => {
    setDonor(false);
    setNewDonor(true);
  };

  async function verifyDonor(cpf) {
    try {
      const response = await api.get(`/doadores/${cpf}`);
      const data = response.data;
      localStorage.setItem("donor", JSON.stringify(data));
      console.log(data);
      navigate("/donor");
    } catch (error) {
      alert("erro");
      setDonorNotFound(error.message);
    }
  }

  async function registerDonor(nome, dataNascimento, cpf) {
    try {
      const response = await api.post(`/doadores`, {
        nome: nome,
        dataNascimento: dataNascimento,
        cpf: cpf
      });
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
      }
    } catch (error) {
      alert("erro");
      setDonorNotFound(error.message);
    }
  }

  return (
    <div>
      <div className="user-type">
        <button className="donor" onClick={handleDonor}>
          Doador
        </button>
        <button className="admin" onClick={handleAdmin}>
          Administrador
        </button>
      </div>
      <div className="user">
        {donor && (
          <div className="isDonor">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                verifyDonor(cpf);
              }}
            >
              <div>
                <span>Digite seu CPF</span>
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
              <button type="submit">Entrar</button>
            </form>
            <div>
              <p>{donorNotFound}</p>
            </div>
            <a href="#" onClick={handleNewDonor}>
              É a sua primeira vez?
              <br /> Faça um pequeno cadastro antes de prosseguir
            </a>
          </div>
        )}
        {newDonor && (
          <div className="registerDonor">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                registerDonor(nome, bday, newCpf);
              }}
            >
              <div className="name">
                <span>Digite seu Nome</span>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  id="nome"
                  placeholder="Nome"
                />
              </div>
              <div className="age">
                <span>Digite sua data de nascimento</span>
                <input
                  type="text"
                  value={bday}
                  onChange={(e) => setBday(e.target.value)}
                  id="dataNascimento"
                  placeholder="Idade"
                />
              </div>
              <div>
                <span>Digite seu CPF</span>
                <input
                  type="text"
                  value={newCpf}
                  onChange={(e) => setNewCpf(e.target.value)}
                  id="newCpf"
                  placeholder="CPF"
                />
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        )}
        {admin && (
          <div className="isAdmin">
            <form
              action="http://localhost:8080/api/administradores"
              method="get"
            >
              <div>
                <span>Digite seu email </span>
                <input type="email" placeholder="Email" />
              </div>
              <button type="submit">Entrar</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
