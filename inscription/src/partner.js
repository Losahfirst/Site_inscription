
import './styles/bkd2.css';
import micro from './assets/partn/microsoft.jpg';
import google from './assets/partn/google.png';
import esp from './assets/partn/espres.png';
import chip from './assets/partn/MCHP.png';
import intel from './assets/partn/Intel.png';
import ovh from './assets/partn/ovh.png';

function Partner() {
  return (
    <div className="er" href=" ">
        <h1>Nos partenaires</h1>
        <div className="servi">
            <div className="servi1">
                  <img src={micro} alt="" />
              </div>
              <div className="servi2">
                 <img src={google} alt="" />
              </div>
              <div className="servi3">
                  <img src={esp} alt="" />
              </div>
              <div className="servi4">
                 <img src={chip} alt="" />
              </div>
              <div className="servi5">
                 <img src={intel} alt="" />
              </div>
              <div className="servi6">
                 <img src={ovh} alt="" />
              </div>
        </div>
    </div>  
  )      
     
}

export default Partner;
