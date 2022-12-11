import { useState } from "react";
import "./style.css";

function Home() {
  const [donor, setDonor] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [newDonor, setNewDonor] = useState(false);

  const handleDonor = () => {
    setNewDonor(false);
    setAdmin(false);
    setDonor(true);
  };

  const sendForm = () => {
    setNewDonor(false);
    alert("Cadastro feito com sucesso");  //deixar assim ou fazer insertHTML ?
    setDonor(true);
  }

  const handleAdmin = () => {
    setNewDonor(false);
    setDonor(false);
    setAdmin(true);
  };

  const handleNewDonor = () => {
    setDonor(false)
    setNewDonor(true);
  };

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
            <form action="#urldaapipramandaroform" method="post">
              <div>
                <span>Digite seu CPF </span>
                <input type="number" placeholder="CPF" />
              </div>
              <button type="submit">Entrar</button>
            </form>
            <a href="#" onClick={handleNewDonor}>
              É a sua primeira vez?
              <br /> Faça um pequeno cadastro antes de prosseguir
            </a>
          </div>
        )}
        {newDonor && (
          <div className="registerDonor">
            <form action="#urldaapipramandaroform" method="post">
              <div className="name">
                <span>Digite seu Nome</span>
                <input type="text" id="name" placeholder="Nome" />
              </div>
              <div className="age">
                <span>Digite sua Idade</span>
                <input type="number" id="age" placeholder="Idade" />
              </div>
              <div>
                <span>Digite seu CPF</span>
                <input type="number" id="cpf" placeholder="CPF" />
              </div>
              <button type="submit" onClick={sendForm}>Cadastrar</button>
            </form>
          </div>
        )}
        {admin && (
          <div className="isAdmin">
          <form action="#urldaapipramandaroform" method="post">
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
