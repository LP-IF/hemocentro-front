import { useState, useRef, useEffect } from "react";
import api from "../../services/api";


import "./style.css";

function Donor() {
  const [donate, setDonate] = useState(false);
  const [donationsNumber, setDonationsNumber] = useState(null)
  const [donDone, setDonDone] = useState("")

  const rest = useRef("n")
  const feed = useRef("n")
  let donor;

  if (localStorage.getItem('donor')) {
    donor = localStorage.getItem('donor');
  } else {
    alert("doador nao encontrado!")
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/doador/doacoes`);
        setDonationsNumber(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [donate]);

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
    setDonDone("Obrigado pela doação!")
    rest.current.value = "n";
    feed.current.value = "n";
    setDonate(false);

    async function handleButtonClick() {
      try {
        const response = await api.post(`doador/doacao`, {
          data: 1
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    handleButtonClick();

  }

  

  return (
    <div>
      {/* chamar api e pegar nome -> Olá {nomedofulano}! */}
      <div className="donor-title">Olá ${`donor.nome`}!</div>
      <div className="divisao">
        {/* chamar api e pegar quantidade de vezes que o fulano já doou */}
        <div className="donations">Você já fez ${`donationsNumber`} doações</div>
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
