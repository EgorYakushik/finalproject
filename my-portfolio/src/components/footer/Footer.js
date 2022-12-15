import React from 'react';
import "./style.css";
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import github from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="https://vk.com/egor.yakushik" target='_blank' rel="noreferrer"><img src={vk} alt="Link" /></a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.instagram.com/skwrt/?utm_source=ig_embed&ig_rid=47909d3b-fc6a-45bd-9f5d-3cb20870a688" target='_blank' rel="noreferrer"><img src={instagram} alt="Link" /></a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/EgorYakushik" target='_blank' rel="noreferrer"><img src={github} alt="Link" /></a>
                    </li>
                    <li className="social__item">
                        <a href="#!"><img src={linkedIn} alt="Link" /></a>
                    </li>
                </ul>
                <div className="copyright"><p>© 2022 egor.yakushik.com</p></div>
            </div>
        </div>
    </footer>
  )
}
