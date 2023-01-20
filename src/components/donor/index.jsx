import { useState, useRef } from "react";
import api from "../../services/api";


import "./style.css";

function Donor() {

  let donor = JSON.parse(localStorage.getItem("donor"));
  
  const [donate, setDonate] = useState(false);
  const [donDone, setDonDone] = useState("");

  const rest = useRef("n")
  const feed = useRef("n")

  function verifyReq(){
    let r = rest.current.value;
    let f = feed.current.value;
    if (r === "y" && f === "y"){
      setDonate(true);
    }else if(r !== "y" || f !== "y"){
      setDonate(false);
    }
  }

  const handleDonation = () =>{
    async function handleButtonClick() {
      try {
        console.log(donor)
        await api.patch(`tiposSangue/${donor.tipoSangueId}`);
        const response = await api.patch(`doadores/${donor.cpf}`);
        console.log(response.data);
        localStorage.setItem("donor", JSON.stringify(response.data));
        setDonDone("Obrigado pela doação!");
        rest.current.value = "n";
        feed.current.value = "n";
        setDonate(false);
      } catch (error) {
        alert("erro");
      }
    }
    handleButtonClick();

  }

  

  return (
    <div>
      <div className="donor-title">Olá {(donor.nome)}!</div>
      <div className="divisao">
        <div className="donations">Você já fez {`${donor.quantidadeDoacoes}`} doações!</div>
        <div className="donate">
          <p>Aqui você pode fazer uma doação:</p>
          <button onClick={handleDonation} disabled={!donate}>Doar!</button>
          <div className="req-donate">
            <p>Para poder doar, você precisa responder as perguntas abaixo:</p>
            <div className="is-rested">
              <p>Está descansado?</p>
              <select
                name="rested"
                ref={rest}
                onClick={verifyReq}
              >
                <option value="y">Sim</option>
                <option value="n" selected>Não</option>
              </select>
            </div>
            <div className="is-fed">
              <p>Está alimentado?</p>
              <select
                name="fed"
                ref={feed}
                onClick={verifyReq}
                >
                <option value="y">Sim</option>
                <option value="n" selected>Não</option>
              </select>
            </div>
          </div>
          <p>{donDone}</p>
        </div>
      </div>
    </div>
  );
}

export default Donor;
