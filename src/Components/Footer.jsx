import React from "react";

export default function Footer() {

    return (
        <div role="contentinfo" class="footer">
            <div class="row">
                <ul class="footer__social-links">
                    <li class="footer__social-link-item">
                        <a href="https://twitter.com/Gokulcypto/" title="Link to Twitter Profile" target="_blank">
                            <img src="./twitter.svg" class="footer__social-image" alt="Twitter" />
                        </a>
                    </li>
                    <li class="footer__social-link-item">
                        <a href="https://github.com/Gokuldev23/" title="Link to Github Profile" target="_blank">
                            <img src="./github.svg" class="footer__social-image" alt="Github" />
                        </a>
                    </li>
                    <li class="footer__social-link-item">
                        <a href="https://www.linkedin.com/in/gokul-venkatraman-dev/" target="_blank">
                            <img src="./linkedin.svg" title="Link to Linkedin Profile" class="footer__social-image"
                                alt="Linkedin" />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )

}