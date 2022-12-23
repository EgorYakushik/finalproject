import React from 'react'

export default function Education() {
  return (
    <main className="section">
        <div className="container">
            <h1 className="title-1">Education</h1>
            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">High education</h2>
                    <p>Belarusian National Technical University</p>

                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Сourses</h2>
                    <p> <a href="https://myitschool.by/" target='_blank' rel="noreferrer">Моя-Айти-Школа:</a></p>
                    <p>Front-end web-development: HTML, CSS, JavaScript, ReactJS, Redux, ...</p>
                </li>
            </ul>
        </div>    
    </main>
  )
}
