
import './styles/bouton.css';

const Bouton = () => {
    const handleClick = () => {
        alert('Le bouton a été cliqué !');
    };
    return (
        <div>   
            <button className="styled-button" href="www.gbraemmanuel.ovh" onClick={handleClick}>Plus d'infos</button>
        </div>
    );
}


export default Bouton;
