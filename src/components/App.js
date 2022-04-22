import "../styles/core/reset.scss";
import "../styles/App.scss";
import "../styles/layout/dummy.scss";
import "../styles/layout/footer.scss";
import "../styles/layout/form.scss";
import "../styles/layout/header.scss";
import "../styles/layout/instructions.scss";
import "../styles/layout/letters.scss";
import "../styles/layout/loading.scss";
import { useState } from "react";

function App() {
  const [numberOfError, setNumberOfError] = useState(0);
  const [lastLetter, setLasLetter] = useState("");
  const handleInput = (ev) => {
    const newValue = ev.target.value;
    if (/^[A-Za-záéíóú]$/.test(newValue)) {
      setLasLetter(ev.currentTarget.value);
    }
  };
  const handleClickButton = (ev) => {
    ev.preventDefault();
    console.log("hola");
    setNumberOfError(numberOfError + 1);
    console.log(numberOfError);
  };
  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
        <button onClick={handleClickButton}>Incrementar</button>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              onChange={handleInput}
              value={lastLetter}
              pattern="[a-zA-Z]"
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
          </form>
        </section>

        <section className={`dummy error-${numberOfError}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
