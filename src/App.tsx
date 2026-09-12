
import { useEffect, useState } from "react";

import {
  couple,
  hero,
  story,
  reasons,
  letter,
  memories,
  music,
  finalMessage,
} from "./data";

type Popup =
  | "story"
  | "reasons"
  | "letter"
  | "music"
  | "photo"
  | null;

function App() {
  const [popped, setPopped] = useState(false);
  const [burst, setBurst] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [popup, setPopup] = useState<Popup>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [likedReason, setLikedReason] = useState<number | null>(null);

  const popBubble = () => {
    if (popped) return;

    setBurst(true);

    window.setTimeout(() => {
      setPopped(true);
    }, 350);

    window.setTimeout(() => {
      setBurst(false);
    }, 1500);
  };

  const openBubbleSurprise = () => {
    if (!popped) return;
    setSurpriseOpen(true);
    setPlaying(true);
  };

  const openPhoto = (index: number) => {
    setSelectedPhoto(index);
    setPopup("photo");
  };

  const closePopup = () => {
    setPopup(null);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    if (playing) {
      document.body.classList.add("music-started");
    } else {
      document.body.classList.remove("music-started");
    }

    return () => {
      document.body.classList.remove("music-started");
    };
  }, [playing]);

  return (
    <div className="world">

      {/* =========================
          SKY DECOR
      ========================= */}

      <div className="sun">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="cloud cloud-a">
        <i />
        <i />
        <i />
      </div>

      <div className="cloud cloud-b">
        <i />
        <i />
        <i />
      </div>

      <div className="cloud cloud-c">
        <i />
        <i />
        <i />
      </div>

      <div className="floating-bubbles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className={`float-bubble float-${index + 1}`}
          />
        ))}
      </div>

      <div className="tiny-flower flower-a">✿</div>
      <div className="tiny-flower flower-b">✿</div>
      <div className="tiny-flower flower-c">✿</div>
      <div className="tiny-flower flower-d">✿</div>

      {/* =========================
          TOP STAMP
      ========================= */}

      <div className="top-stamp">
        <span>MADE WITH</span>
        <strong>♡</strong>
        <span>FOR YOU</span>
      </div>

      {/* =========================
          HERO
      ========================= */}

      <header className="hero-world">

        <div className="hero-left">
          <p className="hero-eyebrow">{hero.eyebrow}</p>

          <h1>
            {hero.title}
            <br />
            <em>{hero.titleAccent}</em>
          </h1>

          <p className="hero-description">
            A tiny sunny place where all our little moments
            decided to live together.
          </p>

          <div className="hero-date">
            <span>EST.</span>
            <strong>{couple.date}</strong>
          </div>
        </div>

        <div className="hero-center">

          <div className={`bubble-scene ${popped ? "is-popped" : ""}`}>

            <div className="bubble-shadow" />

            <button
              className={`giant-bubble ${burst ? "bursting" : ""}`}
              onClick={popBubble}
              aria-label="Pop the bubble"
            >
              <span className="bubble-reflection reflection-one" />
              <span className="bubble-reflection reflection-two" />
              <span className="bubble-rainbow" />

              {!popped && (
                <>
                  <span className="bubble-icon">♡</span>
                  <strong>POP!</strong>
                  <small>something cute is inside</small>
                </>
              )}
            </button>

            {burst && (
              <div className="pop-particles" aria-hidden="true">
                {Array.from({ length: 26 }).map((_, index) => (
                  <span
                    key={index}
                    style={
                      {
                        "--i": index,
                      } as React.CSSProperties
                    }
                  >
                    {index % 5 === 0 ? "♡" : index % 3 === 0 ? "✦" : ""}
                  </span>
                ))}
              </div>
            )}

            {popped && !surpriseOpen && (
              <button
                className="bubble-surprise"
                onClick={openBubbleSurprise}
                aria-label="Open your little surprise"
              >
                <svg viewBox="0 0 120 96" aria-hidden="true">
                  <path className="surprise-shadow" d="M19 37h82v48H19z" />
                  <path className="surprise-box" d="M15 31h90v54H15z" />
                  <path className="surprise-lid" d="M11 22h98v19H11z" />
                  <path className="surprise-ribbon" d="M56 22h9v63h-9z" />
                  <path className="surprise-ribbon" d="M15 31h90v8H15z" />
                  <path className="surprise-bow" d="M60 22c-18-20-32-5-20 3 6 4 13 0 20-3Zm0 0c18-20 32-5 20 3-6 4-13 0-20-3Z" />
                </svg>
                <span>open me ♡</span>
              </button>
            )}

            {popped && surpriseOpen && (
              <div className="bubble-opened" aria-hidden="true">
                <span>♡</span>
                <strong>for you</strong>
              </div>
            )}

          </div>

          <div className={`hero-reveal ${surpriseOpen ? "show" : ""}`}>
            <span>{hero.afterPop}</span>

            <h2>
              {couple.name1}
              <b>+</b>
              {couple.name2}
            </h2>

            <p>{couple.intro}</p>
          </div>

        </div>

        <div className="hero-right">
          <div className="sun-note">
            <span>HEY!</span>
            <p>
              you found
              <br />
              your little
              <br />
              surprise
            </p>
            <strong>✦</strong>
          </div>
        </div>

      </header>

      {/* =========================
          SUNNY PATH
      ========================= */}

      <main>

        <section className="sunny-intro">

          <div className="path-arrow">↓</div>

          <p className="tiny-kicker">COME A LITTLE CLOSER</p>

          <h2>
            There are tiny
            <br />
            <span>things waiting for you.</span>
          </h2>

          <p>
            Click around. Open things. Pop things.
            <br />
            This little world is yours.
          </p>

        </section>

        {/* =========================
            STORY POSTCARD
        ========================= */}

        <section className="story-world">

          <div className="postcard">
            <div className="postcard-tape">♡</div>

            <div className="postcard-left">
              <div className="postcard-sun">
                <span>☀</span>
              </div>

              <div className="postcard-doodles">
                <span>✦</span>
                <span>♡</span>
                <span>☁</span>
              </div>
            </div>

            <div className="postcard-right">

              <span className="postcard-label">POSTCARD FROM US</span>

              <h2>{story.title}</h2>

              <p>{story.text}</p>

              <button
                className="cute-link"
                onClick={() => setPopup("story")}
              >
                read our little story
                <span>→</span>
              </button>

            </div>

            <div className="postmark">
              <span>LOVE</span>
              <strong>♡</strong>
              <small>FOREVER</small>
            </div>
          </div>

        </section>

        {/* =========================
            REASONS FLOWER GARDEN
        ========================= */}

        <section className="reasons-world">

          <div className="garden-heading">
            <div className="garden-scribble">✿</div>

            <div>
              <span>A LITTLE GARDEN OF</span>
              <h2>Reasons I like you</h2>
            </div>

            <div className="garden-scribble">✿</div>
          </div>

          <p className="garden-subtitle">
            tap a flower ♡
          </p>

          <div className="flower-garden">

            {reasons.map((reason, index) => (
              <button
                key={index}
                className={`reason-flower flower-position-${index + 1} ${
                  likedReason === index ? "bloomed" : ""
                }`}
                onClick={() => setLikedReason(index)}
              >
                <span className="flower-head">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <b>♡</b>
                </span>

                <span className="flower-stem" />

                <span className="reason-note">
                  {likedReason === index ? (
                    <>
                      <strong>♡</strong>
                      {reason}
                    </>
                  ) : (
                    <>
                      <strong>#{index + 1}</strong>
                      tap me
                    </>
                  )}
                </span>
              </button>
            ))}

          </div>

        </section>

        {/* =========================
            MEMORY WALL
        ========================= */}

        <section className="memory-world">

          <div className="memory-title">

            <div className="memory-label">
              <span>OUR</span>
              <strong>MEMORY</strong>
              <span>WALL</span>
            </div>

            <div>
              <p>THE LITTLE THINGS</p>
              <h2>we want to keep</h2>
            </div>

          </div>

          <div className="photo-wall">

            {memories.map((memory, index) => (
              <button
                key={index}
                className={`wall-photo photo-${index + 1}`}
                onClick={() => openPhoto(index)}
              >
                <span className="photo-tape" />

                <span className="photo-image">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    onError={(event) => {
                      event.currentTarget.style.opacity = "0";
                    }}
                  />

                  <span className="photo-fallback">
                    <strong>♡</strong>
                    <small>add photo</small>
                  </span>
                </span>

                <span className="photo-caption">
                  {memory.caption}
                </span>

                <span className="photo-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}

          </div>

        </section>

        {/* =========================
            LETTER
        ========================= */}

        <section className="letter-world">

          <div className="letter-intro">
            <span>WAIT...</span>
            <h2>I wrote you something.</h2>
            <p>
              It's a little cheesy.
              <br />
              Please forgive me.
            </p>
          </div>

          <button
            className="envelope"
            onClick={() => setPopup("letter")}
          >
            <div className="envelope-back" />

            <div className="letter-paper-preview">
              <span>{letter.greeting}</span>
              <strong>{letter.title}</strong>
              <small>tap to open ♡</small>
            </div>

            <div className="envelope-flap" />

            <div className="envelope-seal">
              ♡
            </div>

          </button>

        </section>

        {/* =========================
            MUSIC POSTCARD
        ========================= */}

        <section className="music-world">

          <div className="music-sky">

            <div className="music-cloud cloud-m1">
              <i />
              <i />
              <i />
            </div>

            <div className="music-cloud cloud-m2">
              <i />
              <i />
              <i />
            </div>

            <div className="music-sun">☀</div>

            <div className="music-card">

              <div className="cassette">

                <div className="cassette-label">
                  <span>OUR</span>
                  <strong>SONG</strong>
                  <small>BUBBLY ♡</small>
                </div>

                <div className="cassette-wheels">
                  <span />
                  <span />
                </div>

              </div>

              <div className="music-card-info">

                <span>THE SOUNDTRACK OF US</span>

                <h2>{music.title}</h2>

                <p>{music.artist}</p>

                <button
                  className="music-play"
                  onClick={() => setPlaying(!playing)}
                >
                  {playing ? "PAUSE ♡" : "PLAY ♡"}
                </button>

              </div>

            </div>

          </div>

          {playing && (
            <iframe
              className="youtube-audio"
              src={`https://www.youtube.com/embed/${music.youtubeId}?autoplay=1&controls=0&rel=0&playsinline=1`}
              title={`${music.title} by ${music.artist}`}
              allow="autoplay; encrypted-media"
              aria-hidden="true"
            />
          )}

        </section>

        {/* =========================
            FINAL WORLD
        ========================= */}

        <section className="final-world">

          <div className="final-sun">☀</div>

          <div className="final-bubble bubble-one">♡</div>
          <div className="final-bubble bubble-two">✦</div>
          <div className="final-bubble bubble-three">♡</div>

          <div className="final-content">

            <span>AND BEFORE YOU GO...</span>

            <h2>
              I'm really glad
              <br />
              <em>it's you.</em>
            </h2>

            <div className="final-names">
              {couple.name1}
              <b>♡</b>
              {couple.name2}
            </div>

            <p>{finalMessage}</p>

            <div className="final-date">
              <span>OUR LITTLE DATE</span>
              <strong>{couple.date}</strong>
            </div>

            <div className="tiny-heart">♡</div>

          </div>

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="world-footer">

        <div className="footer-bubble">
          <span>♡</span>
        </div>

        <p>
          made for someone
          <br />
          very special
        </p>

        <strong>✿</strong>

      </footer>

      {/* =========================
          STORY MODAL
      ========================= */}

      {popup === "story" && (
        <div className="overlay" onClick={closePopup}>

          <div
            className="story-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closePopup}
            >
              ×
            </button>

            <div className="modal-stamp">
              OUR STORY
            </div>

            <div className="modal-sun">☀</div>

            <h2>{story.title}</h2>

            <div className="modal-line">♡ ───── ♡</div>

            <p>{story.text}</p>

            <div className="modal-sign">
              {couple.name1} & {couple.name2}
            </div>

          </div>

        </div>
      )}

      {/* =========================
          LETTER MODAL
      ========================= */}

      {popup === "letter" && (
        <div className="overlay" onClick={closePopup}>

          <div
            className="letter-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closePopup}
            >
              ×
            </button>

            <span className="letter-top">FOR YOUR EYES ONLY ♡</span>

            <h2>{letter.title}</h2>

            <div className="letter-modal-content">

              <p className="letter-greeting">
                {letter.greeting}
              </p>

              <p className="letter-body">
                {letter.text}
              </p>

              <p className="letter-ps">
                {letter.ps}
              </p>

              <div className="letter-signature">
                Love,
                <strong>{couple.name1}</strong>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* =========================
          PHOTO MODAL
      ========================= */}

      {popup === "photo" && selectedPhoto !== null && (
        <div
          className="overlay photo-overlay"
          onClick={closePopup}
        >

          <div
            className="photo-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closePopup}
            >
              ×
            </button>

            <div className="big-photo">

              <img
                src={memories[selectedPhoto].image}
                alt={memories[selectedPhoto].caption}
              />

              <span>
                {memories[selectedPhoto].caption}
              </span>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;

