
function ContactCard() {
    return (
        //parent elements: <> </>
        <>
        <div className="business-card">
            <img className="profile-image" src="https://i.pinimg.com/736x/42/56/4f/42564f46f6d2cbee0721b6f082f398e6.jpg" alt="kirby riding on a star"/>
            <p className="full-name">Denise Leon</p>
            <p className="designation">Software developer</p>
            <p className="contact-info">Projects</p>
       {/* change later to have an email icon and phone icon for contacting and a candidly for booking meetings */}
    </div>
    <div className="social-media">
        <h2>Connect with me</h2>
        <p className="media"><a href="https://www.linkedin.com/in/leon-denise" target="_blank">LinkedIn</a></p>
        <p className="media"><a href="https://github.com/DENISE-LEON" target="_blank">GitHub</a></p>
    </div>
         </>
    );
}

export default ContactCard;