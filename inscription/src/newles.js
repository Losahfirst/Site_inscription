
import './styles/newless.css';

function News() {
    
  return (
    <div className="row" href=" ">
        <div className="container">
        <div className="containe"> 
            
            <p>Inscrivez-vous à notre newsletter pour être informé(e) 
                de toutes les actualités passionnantes d'ECOFIER!
                <br></br>
                <br></br>
                 Ne manquez aucune information sur nos conceptions et fabrications,
                  nos événements exclusifs, les opportunités de carrière dans le numérique, et bien plus encore.</p>
        </div>
         <div class="chat-container">
            
            <div class="user-input">
                <input type="text" id="userInput" placeholder="Votre adresse e-mail..."/>
                <button onclick="sendMessage()">s'inscrire</button>
            </div>
        </div>

        </div>
       
    </div>
        
  )      
     
}

export default News;

