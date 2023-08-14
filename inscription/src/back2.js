
import './styles/bkd2.css';
import Bouton from './bouton'
import bon from './assets/bkl.jpg';
function Bkd() {
  return (
    <div className="Bkd" href=" ">
      <div className="pres">
        
        <h1 className="text-on-image"> Transformez vos idées en réalité technologique </h1>
        <p>Explorez l'alliance entre conception web et électronique pour donner vie à vos visions numériques. </p>
       
        <Bouton/> 
     </div>
      <div className="desc" >
        <div className="cont1">
           <h1>Découvrez l'univers <span className="cot1">ECOFIER</span> </h1>
           
           <p> Chez nous, la technologie rencontre la créativité pour façonner l'avenir. La création d'objets connectés qui inclu la domotique et l'agriculture, apportant innovation et efficacité à chaque coin de votre vie est notre passion.
           <br></br>We connect your devices
           </p>
           
         </div>
         <div className="cont3">
           <img src={bon} alt="The is here" />  
         </div>
        <div className="cont2">
           <h1>Developpement logiciel</h1>
           <ul>
               <li>
               <span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                Nous concevons des sites web</li>
               <li>
               <span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                Des applications interactives</li>
                <li>
                <span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                Applications métiers de gestion de stock</li>
                <li>
                <span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                Application IoT et équipement connectés</li>
           </ul>
           
          
           <h1>Labo photo et evenementiel </h1>
           <ul>
               <li><span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                  Shooting photo </li>
               
               <li><span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                 publicité</li>
               <li>
               <span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                reportages vidéo </li>
                <li><span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                 Hotesse evènementiel</li>
                 <li><span class="material-symbols-outlined">
                       radio_button_checked
                    </span>
                 cadrage</li>
           </ul>
           
         </div>
        

      </div>
    </div>
  

  );
}

export default Bkd;
