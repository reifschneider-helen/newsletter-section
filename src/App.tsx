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
          <form className="subscribe-form" method="POST" action="/users/signup">
            <label className="sr-only" htmlFor="email-input">
              Email
            </label>
            <input
              autoComplete="email"
              id="email-input"
              name="userEmail"
              required
              type="email"
              placeholder="Enter your email"
            ></input>
            <button>Subscribe</button>
          </form>
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
