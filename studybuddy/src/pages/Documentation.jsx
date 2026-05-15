import Navbar from "../components/Navbar";

export default function Documentation() {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <h1 className="dashboard-title">
          Dokumentointi 📚
        </h1>

        <div className="card">
          <h2>Projektin tiedot</h2>

          <p>
StudyBuddy on tuottavuuteen keskittyvä verkkosovellus, 
joka auttaa opiskelijoita hallitsemaan opiskeluaan 
tehtävien seurannan, Pomodoro-ajastimen ja 
motivoivan palautteen avulla.
<br>
Sivulla on käytetty ZenQuotes REST API tarjoamia motivaatio lainauksia jotka valikoituvat satunnaisesti.
</br>
          </p>
        </div>

        <div className="card">
          <h2>Teknologia</h2>

          <ul>
            <li>React + Vite</li>
            <li>Firebase Authentication</li>
            <li>Firestore Database</li>
            <li>React Router</li>
            <li>ZenQuotes REST API</li>
            <li>GitHub Pages Deployment</li>
          </ul>
        </div>

        <div className="card">
          <h2>Saavutettavuus</h2>

          <ul>
<li>Semanttinen HTML</li>
<li>Näppäimistötuki navigointiin</li>
<li>Lomakkeiden input-labelit</li>
<li>Focus-tilat navigointiin</li>
<li>Responsiivinen suunnittelu</li>
          </ul>
        </div>

        <div className="card">
          <h2>Selain testaus</h2>

          <p>
            Sovellus testattiin näillä selaimilla:
          </p>

          <ul>
            <li>Google Chrome</li>
            <li>Opera GX</li>
            <li>Microsoft Edge</li>
          </ul>
        </div>

<div className="card">
  <h2>Responsiivisuustestaus</h2>

  <p>
    Sovellusta testattiin mobiili-,
    tabletti- ja desktop-näkymissä.
  </p>

  <ul>
    <li>
      Navigaatio mukautui eri
      näyttökokoihin oikein
    </li>

    <li>
      Dashboardin kortit
      järjestyivät mobiilissa
      pystysuoraan
    </li>

    <li>
      Lomakkeet ja painikkeet
      pysyivät käytettävinä
      pienillä näytöillä
    </li>
  </ul>
</div>

<div className="card">
  <h2>Suorituskykytestaus</h2>

  <p>
    Sovelluksen suorituskyky testattiin
    Google Lighthouse -työkalulla. Mobiili/Desktop
  </p>

  <ul>
    <li>Performance: 68 / 100</li>
    <li>Accessibility: 97 / 97</li>
    <li>Best Practices: 100/ 100</li>
    <li>SEO: 90 / 90</li>
  </ul>

  <p>
    Sovellus saavutti erityisen hyvät
    saavutettavuus- ja
    best practices -tulokset.
  </p>
</div>
        <div className="card">
          <h2>Sivuston live versio</h2>

          <p>
            https://eliscent.github.io/studybuddy/
          </p>
        </div>
      </main>
    </>
  );
}