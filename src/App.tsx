import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<null | {
    type: "success" | "error";
    text: string;
  }>(null);

  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const showSuccessMessage = () => {
    setMessage({
      type: "success",
      text: "Subscription successful! Please check your email to confirm.",
    });
    // setTimeout(() => setMessage(null), 5000);
  };

  const showErrorMessage = (text: string) => {
    setMessage({
      type: "error",
      text: text,
    });
    // setTimeout(() => setMessage(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok && isValidEmail(email)) {
        showSuccessMessage();
      } else {
        showErrorMessage(
          "Failed to subscribe. Please check your email or try again later."
        );
      }
    } catch (error) {
      showErrorMessage(
        "An Internal Server Error occurred. Please try again later."
      );
    }
  };

  return (
    <div className="App">
      {message && (
        <div className={`${message.type}-window`}>
          <span className="message-title">
            {message.type === "success" ? "Success" : "Error"}
          </span>
          <span className="message-text">{message.text}</span>
        </div>
      )}
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
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email-input">
              Email
            </label>
            <input
              autoComplete="email"
              id="email-input"
              name="email"
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
