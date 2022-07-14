import React from 'react'

export default function Header() {
    return (
    <section className="landing-page" id="landing-page">
      <div className="landing-page-shadow">
        <div className="container">
          <div className="landing-page-text">
            <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
            <p>Nie wierz nam na słowo - sprawdź</p>
            <a href="#offer"><button>oferta</button></a>
          </div>
        </div>
      </div>
    </section>
    )
}