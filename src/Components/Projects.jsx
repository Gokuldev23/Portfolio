import React from "react";

export default function Projects(props) {
    let items = props.languages
    let languages = items.map(item =>
        <li>{item}</li>
    )

    return (
        <section className="work" id="work">
            <div className="row">
                <h2>{props.Title}</h2>
                <div className="work__boxes">
                    <div className="work__box">
                        <div className="work__text">
                            <h3>{props.Title}</h3>
                            <p>
                                {props.description}
                            </p>
                            <ul className="work__list">
                                {languages}
                            </ul>

                            <div className="work__links">
                                <a href={props.work_links.project} target="_blank" className="link__text">
                                    Visit Site <span>&rarr;</span>
                                </a>
                                <a href={props.work_links.source} title="View Source Code" target="_blank">
                                    <img src="./github.svg" className="work__code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                            <img src={props.image} className="work__image" alt={`Project ${props.key}`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}