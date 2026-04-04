"use client";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-bottom-bar {
          max-width: 1100px;
          margin: 0 auto;
          padding-top: 2rem;
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(232, 100, 12, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.25);
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-social-icons {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-icon {
          width: 36px;
          height: 36px;
          background: rgba(232, 100, 12, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.9rem;
        }

        .footer-social-icon:hover {
          background: var(--saffron);
        }

        .footer-nav-item {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 0.5rem;
          cursor: pointer;
          transition: color 0.2s;
          list-style: none;
        }

        .footer-nav-item:hover {
          color: var(--gold-light);
        }

        .footer-bottom-link {
          cursor: pointer;
          transition: color 0.2s;
        }

        .footer-bottom-link:hover {
          color: rgba(255, 255, 255, 0.5);
        }

        /* Tablet: stack brand full-width, links side by side */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2.5rem;
            padding: 0 1.25rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom-bar {
            padding: 2rem 1.25rem 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }

        /* Mobile: single column */
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
            padding: 0 1rem;
          }

          .footer-brand {
            grid-column: 1;
          }

          .footer-bottom-bar {
            padding: 1.5rem 1rem 0;
          }

          .footer-bottom-links {
            gap: 1rem;
          }
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.3rem",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Bhagabata Tungi
              <br />
              Digital Archive
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              An IKS-funded initiative documenting the socio-cultural impact of
              Bhagabata Tungis on social harmony in Odisha. A project of Trident
              Academy of Technology, Bhubaneswar.
            </p>
            <div className="footer-social-icons">
              {[
                { icon: "🌐", href: "https://tat.ac.in/", label: "Website" },
                { icon: "📧", href: "mailto:info@trident.ac.in", label: "Email" },
                { icon: "📍", href: "https://maps.google.com/?q=Trident+Academy+of+Technology+Bhubaneswar", label: "Location" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-icon"
                  style={{ textDecoration: "none" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Archive links */}
          <div>
            <h3
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--saffron)",
                marginBottom: "1rem",
              }}
            >
              Archive
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Photo Gallery",
                "Video Interviews",
                "Field Notes",
                "Research Papers",
              ].map((l) => (
                <li key={l} className="footer-nav-item">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--saffron)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Trident Academy of Technology",
                "F-2, Chandaka Industrial Estate",
                "Chandrasekharpur, Bhubaneswar",
                "Odisha – 751024",
              ].map((line) => (
                <li
                  key={line}
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {line}
                </li>
              ))}
              <li
                style={{
                  fontSize: "0.85rem",
                  color: "var(--saffron-light)",
                  marginTop: "0.5rem",
                }}
              >
                info@trident.ac.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <span>
            © {new Date().getFullYear()} Bhagabata Tungi Research Project ·
            Trident Academy of Technology
          </span>
          <div className="footer-bottom-links">
            {["IKS Mission", "Privacy", "Credits"].map((l) => (
              <span key={l} className="footer-bottom-link">
                {l}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
