//precisa colocar action dos forms
//precisa fazer esquema de ver se admin existe igual tem pro doador

import { useState } from "react";
import "./style.css";

import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();


  const [donor, setDonor] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [newDonor, setNewDonor] = useState(false);
  const [userNotFound, setUserNotFound] = useState("");
  const [donorFound, setDonorFound] = useState("");

  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  const [nome, setNome] = useState("");
  const [bday, setBday] = useState("");
  const [newCpf, setNewCpf] = useState("");

  const handleDonor = () => {
    setNewDonor(false);
    setAdmin(false);
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
      setUserNotFound("Doador não encontrado!")
    }
  }

  async function registerDonor(nome, bday, newCpf) {
    try {
      await api.post(`/doadores`, {
        nome: nome,
        dataNascimento: bday,
        cpf: newCpf,
      });
      setDonorFound("Cadastro de doador feito com sucesso!");
      setTimeout(function(){
        setNewDonor(false);
        setDonor(true);
      }, 5000);
    } catch (error) {
      alert("erro");
    }
  }

  async function verifyAdm(email) {
    try {
      const response = await api.get(`/administradores/${email}`);
      const data = response.data;
      localStorage.setItem("adm", JSON.stringify(data));
      console.log(data);
      navigate("/admin");
    } catch (error) {
      alert("erro");
      setUserNotFound("Administrador não encontrado!")
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
              <p>{userNotFound}</p>
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
            <p>{donorFound}</p>
          </div>
        )}
        {admin && (
          <div className="isAdmin">
            <form
               onSubmit={(e) => {
                e.preventDefault();
                verifyAdm(email);
              }}
            >
              <div>
                <span>Digite seu email </span>
                <input type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="email" />
              </div>
              <button type="submit">Entrar</button>
            </form>
            <p>{userNotFound}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
