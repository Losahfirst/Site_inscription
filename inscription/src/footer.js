
import './styles/footer.css';
import logo from './assets/logo.png';
function Footer() {
    
  return (
    <div className="row1" href=" ">
        <div className="container1">
              <div className="containe1"> 
                  <img src={logo} alt="The Logo is here" />  
               </div>

               <div className="containe2"> 
                  <p><span className="contai">Ecofier Cote d'ivoire</span></p>
                  <p><span className="contai2"> Contact </span> <br></br> 010 153 39 94</p>
                  <p><span className="contai2"> Email</span> <br></br> ecofier@gbraemmanuel.ovh</p>
                  <p><span className="contai2"> Social medias</span> <br></br> Macory Residentiel, Rue du taureau</p>
               </div>
                 <div className="containe3"> 
                 
                 <p><span className="contai">N'zassa home</span></p>
                  <p><span className="contai2"> Contact </span> <br></br> 055 478 70 15</p>
                  <p><span className="contai2"> Email</span> <br></br> boutik@gbraemmanuel.ovh</p>
                  <p><span className="contai2"> Social medias</span> <br></br> Macory Residentiel, Rue du taureau</p>
               </div>

        </div>
        <div className="container2" >
           <p>Copyright © 2023 | Ecofier Côte d’Ivoire</p>
        </div>
       
    </div>
        
  )      
     
}

export default Footer;

