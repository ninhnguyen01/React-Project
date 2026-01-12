import profilePic from './assets/websitePic.png'

function Card() {
    return (
        <div className='card'>
            <img className='card-image' src={profilePic} alt='profile pic'></img>
            <h2 className='card-title'>Ninh Nguyen</h2>
            <p className='card-text'>I'm a Software Engineer and Judoka.</p>
        </div>
    );
}

export default Card