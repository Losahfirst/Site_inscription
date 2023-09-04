
import './styles/bkd2.css';
import azure from './assets/partn/azure.png';
import google from './assets/partn/google.png';
import odoo from './assets/partn/odoo.png';
import intel from './assets/partn/Intel.png';
import ovh from './assets/partn/ovh.png';

function Partner() {
  return (
    <div className="er" href=" ">
        <h1>Nos partenaires</h1>
        <div className="servi">
        <div className="servi1">
                  <img src={azure} alt="" />
              </div>
              <div className="servi2">
                 <img src={google} alt="" />
              </div>
              <div className="servi3">
                  <img src={odoo} alt="" />
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
