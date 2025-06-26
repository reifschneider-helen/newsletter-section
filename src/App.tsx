import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left-column">
        <h1>Get the finest curated abstracts delivered weekly to yout inbox</h1>
        <div className="benefits-text">
        <p className="with-icon">
          Exclusive access to new abstract images and collections
        </p>
        <p className="with-icon">
          Unlock special promotions only for subscribers
        </p>
        <p className="with-icon">Regular doses of artistic inspiration</p>
        </div>
        <div className="subscribe-field">
          <label className="sr-only" htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
          ></input>
          <button>Subscribe</button>
        </div>
        <p className="disclaimer">We only send the best! No spam.</p>
      </div>
      <div className="right-column">
        <img
          src="/assets/img/abstract.jpg"
          width="500"
          alt="abstract image"
        ></img>
      </div>
    </div>
  );
}

export default App;
