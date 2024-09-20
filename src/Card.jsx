import profilePic from './assets/kevin.png'


function Card(){
    return(
        <div className="card">
            <img className ="cardImg" src={profilePic} alt ="profile picture"></img>
            <h2 className ="card-title">Kevin Ngo</h2>
            <p className="card-text"> Software Developer + Gamer</p>
        </div>
    );
}

export default Card