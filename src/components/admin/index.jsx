// O admin poderia ver quantas doações tem e a lista de doadores
import './style.css'

function Admin(){
  return(
    <div>
      <div className="admin-title">Bem vindo $nomedoadmin!</div>
      <div className="div-admin">
        <div className="admin1">
          <p>Lista de quem já doou:</p>
        </div>
        <div className="admin2">
          <p>Como estão os estoques:</p>
        </div>
      </div>
    </div>
  );
}

export default Admin