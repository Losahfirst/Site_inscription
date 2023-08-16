
import './styles/bkd2.css';
import dev from './assets/bkl.jpg';
import iot from './assets/home.jpg';
import event from './assets/event1.jpg';
import lab from './assets/photolab.jpg';
function Serv() {
  return (
    <div className="erv" href=" ">
       
        <h1 className="ervd">NOS SERVICES </h1>
        <p>Nous donnons vie à vos idées sur le web et solutions technologique. Réaliser des travaux de groupe axés sur la collaboration  et sur la pratique afin de se familiariser avec le monde du travail et ses réalités. </p>
        <div className="servic">
            <div className="servic1">
              <img src={dev} alt="" />
              <div className="describ"/>
                <h1>Développement logiciel  </h1>
                <p> Notre expertise réside dans le développement sur mesure de logiciels. Avec une équipe de développeurs talentueux, nous créons des applications incroyables pour les appareils mobiles, les ordinateurs et le web... </p>
              </div>
              <div className="servic2">
              <img src={iot} alt="" />
              <div className="describ"/>
                <h1>IoT et Domotique</h1>
                <p> Nous concevons des solutions qui connectent des objets intelligents pour rendre nos vies plus pratiques et nos entreprises plus efficaces. Imaginez des maisons intelligentes où vous pouvez contrôler l'éclairage... </p>
              </div>
              <div className="servic3">
              <img src={event} alt="" />
              <div className="describ"/>
                <h1>Evènementiel</h1>
                <p> Nous aimons donner vie à des événements, qu'il s'agisse de conférences professionnelles, de lancements de produits ou de fêtes d'entreprise... Nous gérons tous les détails, de la planification à la coordination... </p>
              </div>
              <div className="servic4">
              <img src={lab} alt="" />
              <div className="describ"/>
                <h1>Labo Photo </h1>
                <p> Nous travaillons avec des photographes professionnels et des passionnés pour développer, retoucher et imprimer des images exceptionnelles. Que ce soit sur papier photo, toile ou même métal, nous sommes là pour vous aider... </p>
              </div>
        </div>
    </div>  
  )      
     
}

export default Serv;
