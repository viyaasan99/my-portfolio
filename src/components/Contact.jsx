import { Mail, MapPin, ExternalLink } from 'lucide-react'
import './Contact.css'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-eyebrow" data-reveal>Contact</div>
        <div className="contact__grid">
          <div className="contact__left" data-reveal data-delay="1">
            <h2 className="contact__heading">
              Let's build something<br />
              <span className="contact__heading-accent">worth shipping.</span>
            </h2>
            <p className="contact__sub">
              I'm open to internship extensions, full-time roles, and freelance projects —
              especially anything building real products for Sri Lanka or the broader South Asian market.
            </p>
            <div className="contact__links">
              <a href="mailto:tviyaasan@gmail.com" className="contact__link">
                <Mail size={16} /> tviyaasan@gmail.com
              </a>
              <a href="https://github.com/viyaasan99" target="_blank" rel="noopener noreferrer" className="contact__link">
                <GithubIcon /> github.com/viyaasan99
              </a>
              <a href="https://linkedin.com/in/viyaasan-thanabalasingam" target="_blank" rel="noopener noreferrer" className="contact__link">
                <LinkedinIcon /> linkedin.com/in/viyaasan-thanabalasingam
              </a>
              <span className="contact__link contact__link--static">
                <MapPin size={16} /> Sri Lanka
              </span>
            </div>
          </div>
          <div className="contact__right" data-reveal data-delay="2">
            <div className="contact__card">
              <div className="contact__card-header">
                <div className="contact__card-dots"><span /><span /><span /></div>
                <span className="contact__card-title">quick_message.txt</span>
              </div>
              <div className="contact__card-body">
                <p className="contact__card-line"><span className="contact__card-key">To:</span>{' '}<a href="mailto:tviyaasan@gmail.com" className="contact__card-email">tviyaasan@gmail.com</a></p>
                <p className="contact__card-line"><span className="contact__card-key">Subject:</span>{' '}<span className="contact__card-val">Let's connect</span></p>
                <div className="contact__card-divider" />
                <p className="contact__card-body-text">
                  Hi Viyaasan,<br /><br />
                  I came across your portfolio and I'm interested
                  in discussing [opportunity / project / collaboration]...<br /><br />
                  Looking forward to hearing from you.
                </p>
              </div>
              <div className="contact__card-footer">
                <a href="mailto:tviyaasan@gmail.com" className="contact__send-btn">Send Email →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__copy">© 2025 Viyaasan Thanabalasingam</span>
          <div className="footer__social">
            <a href="https://github.com/viyaasan99" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/viyaasan-thanabalasingam" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="mailto:tviyaasan@gmail.com" className="footer__social-link" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
          <a href="https://github.com/viyaasan99" target="_blank" rel="noopener noreferrer" className="footer__built">
            Built with React &amp; Vite <ExternalLink size={11} />
          </a>
        </div>
      </footer>
    </section>
  )
}
