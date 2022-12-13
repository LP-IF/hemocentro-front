import { useState } from "react";

import "./style.css";

function Donor() {
  const [donate, setDonate] = useState(false);
  const [rest, setRest] = useState("");
  const [feed, setFeed] = useState("");

  const handleDonate = () => {
    setDonate(true);
  };

  if (feed === "yes" && rest === "yes") {
    alert("teste"); //fazer esquema que se clicar ok, ou no caso, se doar msm, zerar valores de rest e feed
  }

  return (
    <div>
      {/* chamar api e pegar nome -> Olá {nomedofulano}! */}
      <div className="donor-title">Olá fulano! :)</div>
      <div className="divisao">
        {/* chamar api e pegar quantidade de vezes que o fulano já doou */}
        <div className="donations">Você já fez x doações</div>
        <div className="donate">
          <p>Aqui você pode fazer uma doação:</p>
          <button onClick={handleDonate}>Doar!</button>
          <div className="req-donate">
            <p>Para poder doar, você precisa responder as perguntas abaixo:</p>
            <div className="is-rested">
              <p>Está descansado?</p>
              <select
                name="rested"
                onChange={(e) => setRest(e.target.value.toString())}
              >
                <option value="default" selected>
                  ---
                </option>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
            <div className="is-fed">
              <p>Está alimentado?</p>
              <select
                name="fed"
                onChange={(e) => setFeed(e.target.value.toString())}
              >
                <option value="default" selected>
                  ---
                </option>
                <option value="yes">Sim</option>
                <option value="no">Não</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donor;
