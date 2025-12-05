import profilePic from './assets/profile1.jpg';

function Card(){
    return (
        <div className="card">
             <img className="card-image" src={profilePic} alt="Card image"></img>
                <h2 className="card-title">Card Title</h2>
                <p className="card-description">This is a description of the card content.</p>
        </div>

    );

}

export default Card;