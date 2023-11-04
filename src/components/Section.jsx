function Section(props) {
    console.log(props)
    return(
        <>
        <section>
            <img className="section--image" src={props.imageUrl} alt="image" />
            <div className="section--textContainer">
                <div className="section--location">
                    <p>
                        <svg className="locationPin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        {props.location.toUpperCase()}
                    </p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="section--title">{props.title}</h2>
                <p  className="section--date">{props.startDate} - {props.endDate}</p>
                <p className="section--description">{props.description}</p>
            </div>
        </section>
        <hr />
        </>
    )
}
export default Section;