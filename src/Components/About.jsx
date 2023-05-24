import React from "react";

export default function About() {
    return (
        <section class="about" id="about">
            <div class="row">
                <h2>About Me</h2>
                <div class="about__content">
                    <div class="about__text">
                        <p>
                            I'm a web developer and designer based out of Chennai, India. I love building apps with good looking UI that
                            solve real-world problems, and that are delightful to use. My specialities include ES6 Javascript, Css,
                            React, G-Sap Anime library and Styled Components.
                        </p>
                        <a href="https://drive.google.com/file/d/16yq_MYbCDDkefrTh3jqAvKXmRsEx8P8t/view?usp=share_link"
                            class="btn">My Resume
                        </a>
                    </div>

                    <div class="about__photo-container">
                        <img class="about__photo" src="./gokul1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}