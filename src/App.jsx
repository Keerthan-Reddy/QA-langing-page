import { useState } from "react";
import "./App.css";

// Replace with your Formspree form ID (create one at https://formspree.io) to receive demo requests by email
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_FORM_ID";

const ArrowIcon = () => (
  <svg
    className="arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="check"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const LogoIcon = ({ className = "logo-icon" }) => (
  <svg
    className={className}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 14h8l4 8 4-16 4 8" />
  </svg>
);

/* Illustration: Chrome Web Store / extension install */
const ChromeExtensionVisual = () => (
  <svg
    viewBox="0 0 280 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="install-illus"
  >
    <rect
      x="20"
      y="20"
      width="240"
      height="140"
      rx="12"
      fill="#fff"
      stroke="#e7e5e4"
      strokeWidth="2"
    />
    <circle cx="140" cy="55" r="28" fill="#1a7f37" opacity="0.9" />
    <path
      d="M128 55l8 12 14-20"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="70"
      y="95"
      width="140"
      height="36"
      rx="8"
      fill="#f5f5f4"
      stroke="#e7e5e4"
    />
    <text
      x="140"
      y="117"
      textAnchor="middle"
      fill="#57534e"
      fontSize="13"
      fontFamily="system-ui,sans-serif"
      fontWeight="600"
    >
      Add to Chrome
    </text>
    <text
      x="140"
      y="158"
      textAnchor="middle"
      fill="#78716c"
      fontSize="11"
      fontFamily="system-ui,sans-serif"
    >
      Chrome Web Store
    </text>
  </svg>
);

/* Illustration: Browser with automation / agent running */
const BrowserAutomationVisual = () => (
  <svg
    viewBox="0 0 280 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="install-illus"
  >
    <rect
      x="20"
      y="12"
      width="240"
      height="156"
      rx="8"
      fill="#fff"
      stroke="#e7e5e4"
      strokeWidth="2"
    />
    <rect x="20" y="12" width="240" height="28" rx="8" fill="#f5f5f4" />
    <circle cx="36" cy="26" r="4" fill="#e7e5e4" />
    <circle cx="48" cy="26" r="4" fill="#e7e5e4" />
    <circle cx="60" cy="26" r="4" fill="#e7e5e4" />
    <rect x="80" y="20" width="120" height="12" rx="6" fill="#e7e5e4" />
    <rect x="28" y="50" width="224" height="8" rx="4" fill="#ecfdf5" />
    <rect x="28" y="66" width="120" height="6" rx="3" fill="#e7e5e4" />
    <rect x="28" y="78" width="180" height="6" rx="3" fill="#e7e5e4" />
    <rect x="28" y="90" width="160" height="6" rx="3" fill="#e7e5e4" />
    <circle cx="250" cy="70" r="16" fill="#1a7f37" opacity="0.15" />
    <path
      d="M244 70l4 4 8-8"
      stroke="#1a7f37"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <text
      x="140"
      y="130"
      textAnchor="middle"
      fill="#78716c"
      fontSize="11"
      fontFamily="system-ui,sans-serif"
    >
      Agent running in your browser
    </text>
  </svg>
);

/* Illustration: Dashboard / agent status */
const AgentDashboardVisual = ({ className = "" }) => (
  <svg
    viewBox="0 0 560 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="24"
      y="24"
      width="512"
      height="192"
      rx="16"
      fill="#fff"
      stroke="#e7e5e4"
      strokeWidth="2"
    />
    <rect x="44" y="44" width="220" height="40" rx="8" fill="#f0f9ff" />
    <rect x="44" y="96" width="160" height="10" rx="5" fill="#e7e5e4" />
    <rect x="44" y="116" width="120" height="10" rx="5" fill="#e7e5e4" />
    <rect x="284" y="44" width="220" height="40" rx="8" fill="#ecfdf5" />
    <rect x="284" y="96" width="180" height="10" rx="5" fill="#e7e5e4" />
    <rect x="284" y="116" width="140" height="10" rx="5" fill="#e7e5e4" />
    <circle cx="504" cy="64" r="18" fill="#1a7f37" />
    <path
      d="M494 64l6 6 14-14"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <text
      x="280"
      y="188"
      textAnchor="middle"
      fill="#78716c"
      fontSize="14"
      fontFamily="system-ui,sans-serif"
    >
      Jira tickets · Screenshots · Alerts
    </text>
  </svg>
);

const FeatureIcons = {
  autonomous: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  reachOut: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  jira: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  ),
};

function App() {
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoEmail, setDemoEmail] = useState("");

  async function handleDemoRequest(e) {
    e.preventDefault();
    const email = demoEmail.trim();
    if (!email) return;
    if (FORMSPREE_FORM_ID && FORMSPREE_FORM_ID !== "YOUR_FORMSPREE_FORM_ID") {
      try {
        await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            _subject: "MetaSketch – Request for demo",
          }),
        });
      } catch (_) {}
    }
    setDemoSubmitted(true);
  }

  return (
    <div className="landing">
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo-wrap">
            <LogoIcon />
            <span className="logo-text">MetaSketch</span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#integrations">Integrations</a>
              </li>
              <li>
                <a href="#get-started">Get started</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="demo" className="hero-wrap">
          <div className="hero-bg" aria-hidden="true" />
          <section className="hero">
            <h1>QA and test your app 24/7.</h1>
            <p className="hero-subhead">
              Dont Make every release safer with an autonomous QA agent. Real
              browser, Jira tickets, and a human in the loop when it matters.
            </p>
            {demoSubmitted ? (
              <p className="hero-thank-you">Thank you.</p>
            ) : (
              <form className="hero-cta-block" onSubmit={handleDemoRequest}>
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  required
                />
                <button type="submit" className="cta-yellow">
                  Request for demo
                </button>
              </form>
            )}
          </section>
        </section>

        <section className="trust" id="integrations" aria-label="Integrations">
          <div className="trust-inner">
            <p className="trust-title">Integrates with your stack</p>
            <div className="integration-pills">
              <span className="pill">
                <CheckIcon /> Jira
              </span>
              <span className="pill">
                <CheckIcon /> Chrome
              </span>
              <span className="pill">
                <CheckIcon /> Real browser
              </span>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <h2 className="section-title">Built like a dedicated QA team</h2>
          <p className="section-desc">
            One agent. Observe–decide–act. Tickets and notifications when it
            matters.
          </p>
          <div className="features-grid">
            <article className="feature-card cream">
              <div className="feature-icon">{FeatureIcons.autonomous}</div>
              <h3>Autonomous testing, 24/7</h3>
              <p>
                Runs in a real Chrome browser around the clock.
                Observe–decide–act: it sees your app, decides what to do next,
                and acts until it finds issues or completes scope.
              </p>
            </article>
            <article className="feature-card mint">
              <div className="feature-icon">{FeatureIcons.reachOut}</div>
              <h3>Calls or messages you when it has doubts</h3>
              <p>
                Stays in sync with your team. When it needs human input—edge
                cases or critical decisions—it reaches out so you stay in the
                loop without blocking the agent.
              </p>
            </article>
            <article className="feature-card sky">
              <div className="feature-icon">{FeatureIcons.jira}</div>
              <h3>Jira tickets on your behalf</h3>
              <p>
                For every verified bug, creates a Jira ticket automatically:
                title, description, reproduction steps, severity, and evidence
                screenshots.
              </p>
            </article>
          </div>
        </section>

        <section className="two-col">
          <div className="card-left">
            <h2>Engineered for enterprises</h2>
            <p>
              Enterprise-ready by design. MetaSketch runs in your environment
              with strict security practices, so your app and data stay under
              your control.
            </p>
          </div>
          <div className="card-right">
            <h2>Made for your QA stack</h2>
            <p>
              MetaSketch integrates with Jira and Chrome, connecting quality
              improvements across your workflow. One agent, one loop.
            </p>
            <div
              className="integration-pills"
              style={{ justifyContent: "flex-start", marginBottom: "1rem" }}
            >
              <span className="pill">
                <CheckIcon /> Jira
              </span>
              <span className="pill">
                <CheckIcon /> Chrome
              </span>
            </div>
            <a href="#demo" className="cta-button">
              See how it works <ArrowIcon />
            </a>
          </div>
        </section>

        <section id="get-started" className="install-section">
          <h2 className="section-title">How to get started</h2>
          <p className="section-desc">
            Install the MetaSketch agent from the Chrome Web Store, grant
            browser access, and we run the automation for you.
          </p>
          <div className="install-steps">
            <div className="install-step">
              <div className="install-step-num">1</div>
              <h3>Install from Chrome Web Store</h3>
              <p>
                Add the MetaSketch agent as a Chrome extension. One click to
                install—no complex setup.
              </p>
            </div>
            <div className="install-step">
              <div className="install-step-num">2</div>
              <h3>Grant browser access</h3>
              <p>
                Give the agent permission to run in your browser. You stay in
                control; we only use it for QA automation.
              </p>
            </div>
            <div className="install-step">
              <div className="install-step-num">3</div>
              <h3>We run the automation</h3>
              <p>
                Our agent tests your app 24/7 in a real Chrome tab, creates Jira
                tickets, and reaches out when it needs you.
              </p>
            </div>
          </div>
          <div className="install-visuals">
            <div className="install-visual-card">
              <div className="visual-wrap">
                <ChromeExtensionVisual />
              </div>
              <h4>Install the extension</h4>
              <p>
                Get the MetaSketch agent from the Chrome Web Store and add it to
                your browser.
              </p>
            </div>
            <div className="install-visual-card">
              <div className="visual-wrap">
                <BrowserAutomationVisual />
              </div>
              <h4>We automate in your browser</h4>
              <p>
                Once you grant access, the agent runs tests in a real tab and
                files issues to Jira.
              </p>
            </div>
          </div>
        </section>

        <section className="section how" id="how-it-works">
          <h2 className="section-title">How it works</h2>
          <p className="section-desc">
            Configure context and intent, then let the agent run.
          </p>
          <div className="steps">
            <div className="step">
              <h3>Configure</h3>
              <p>
                Set context and test intent. Define what the agent should focus
                on and how it should behave.
              </p>
            </div>
            <div className="step">
              <h3>Agent runs</h3>
              <p>
                Observe–decide–act in a real browser. The agent navigates,
                clicks, types, and scrolls until it finds issues or completes
                scope.
              </p>
            </div>
            <div className="step">
              <h3>Tickets and notifications</h3>
              <p>
                Jira tickets are created for verified bugs. You’re notified when
                the agent needs your input.
              </p>
            </div>
          </div>
        </section>

        <section className="preview-section">
          <h2 className="section-title">See the agent in action</h2>
          <p className="section-desc">
            One dashboard. Real runs. Jira tickets and evidence, all in one
            place.
          </p>
          <div className="preview-visual-wrap">
            <AgentDashboardVisual />
          </div>
        </section>

        <section id="cta" className="cta-section">
          <h2>Ready for autonomous QA?</h2>
          <p>
            One agent. Real browser. Jira tickets. Human in the loop when it
            matters.
          </p>
          <div className="cta-row">
            <a href="#demo" className="cta-yellow">
              Book a demo <ArrowIcon />
            </a>
            <a href="#demo" className="cta-button">
              See how it works <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <LogoIcon className="footer-logo" />
            <p className="footer-copy">
              © 2026 MetaSketch. All rights reserved.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Menu</h4>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#integrations">Integrations</a>
                </li>
                <li>
                  <a href="#get-started">Get started</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
