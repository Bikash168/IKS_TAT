export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;600;800&family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --saffron: #E8640C;
    --saffron-light: #F4A261;
    --saffron-pale: #FFF3E8;
    --deep: #1A0800;
    --earth: #5C2D00;
    --gold: #C9860C;
    --gold-light: #F5D078;
    --cream: #FDF6EC;
    --text: #2D1200;
    --muted: #7A5230;
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'Lato', sans-serif; background: var(--cream); color: var(--text); overflow-x: hidden; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--deep); }
  ::-webkit-scrollbar-thumb { background: var(--saffron); border-radius: 3px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-60px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(60px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
  @keyframes mandalaRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(232,100,12,0.4); }
    50% { box-shadow: 0 0 60px rgba(232,100,12,0.8); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* Nav */
  .nav {
    position: fixed; top: 0; width: 100%; z-index: 1000;
    background: rgba(26,8,0,0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(232,100,12,0.3);
    transition: all 0.3s;
  }
  .nav-inner {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem; height: 64px;
  }
  .nav-logo {
    font-family: 'Cinzel', serif; font-size: 1rem; font-weight: 600;
    color: var(--gold-light); letter-spacing: 0.05em;
    display: flex; align-items: center; gap: 10px;
    cursor: pointer;
  }
  .nav-logo-dot {
    width: 8px; height: 8px; background: var(--saffron);
    border-radius: 50%; animation: pulse 2s ease-in-out infinite;
  }
  .nav-links { display: flex; gap: 0.25rem; list-style: none; }
  .nav-link {
    padding: 0.5rem 1rem; font-family: 'Lato', sans-serif;
    font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: rgba(255,255,255,0.7);
    cursor: pointer; border-radius: 4px; transition: all 0.2s;
    position: relative; text-decoration: none; display: block;
  }
  .nav-link:hover, .nav-link.active {
    color: var(--gold-light); background: rgba(232,100,12,0.15);
  }
  .nav-link.active::after {
    content: ''; position: absolute; bottom: 2px; left: 50%;
    transform: translateX(-50%); width: 4px; height: 4px;
    background: var(--saffron); border-radius: 50%;
  }

  /* Shared section styles */
  .section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--saffron); margin-bottom: 1rem;
  }
  .section-tag::before { content: ''; width: 24px; height: 2px; background: var(--saffron); }
  .section-title-lg {
    font-family: 'Cinzel', serif;
    font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700;
    color: #fff; line-height: 1.15; margin-bottom: 1.5rem;
  }
  .section-body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; line-height: 1.85;
    color: rgba(255,255,255,0.65); max-width: 720px;
  }

  /* Buttons */
  .btn-primary {
    padding: 0.875rem 2rem; background: var(--saffron); color: #fff;
    font-family: 'Lato', sans-serif; font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    border: none; border-radius: 4px; cursor: pointer; transition: all 0.3s;
  }
  .btn-primary:hover {
    background: var(--saffron-light); transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(232,100,12,0.4);
  }
  .btn-secondary {
    padding: 0.875rem 2rem; background: transparent; color: var(--gold-light);
    font-family: 'Lato', sans-serif; font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    border: 1px solid rgba(201,134,12,0.4); border-radius: 4px;
    cursor: pointer; transition: all 0.3s;
  }
  .btn-secondary:hover {
    border-color: var(--gold-light); background: rgba(201,134,12,0.1);
    transform: translateY(-2px);
  }

  /* Ticker */
  .ticker { background: var(--saffron); overflow: hidden; padding: 0.625rem 0; }
  .ticker-track {
    display: flex; gap: 4rem;
    animation: marquee 30s linear infinite; white-space: nowrap;
  }
  .ticker-item {
    font-family: 'Lato', sans-serif; font-size: 0.75rem; font-weight: 700;
    letter-spacing: 0.15em; text-transform: uppercase; color: #fff;
    display: flex; align-items: center; gap: 1rem; flex-shrink: 0;
  }
  .ticker-dot { width: 4px; height: 4px; background: rgba(255,255,255,0.6); border-radius: 50%; }

  /* Stats */
  .stats-row { background: var(--deep); padding: 4rem 2rem; }
  .stats-inner {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
  }
  .stat-card {
    padding: 2rem 1.5rem; text-align: center;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(232,100,12,0.15); transition: all 0.3s;
  }
  .stat-card:hover {
    background: rgba(232,100,12,0.08); border-color: rgba(232,100,12,0.4);
    transform: translateY(-4px);
  }
  .stat-number {
    font-family: 'Cinzel', serif; font-size: 2.5rem; font-weight: 800;
    color: var(--saffron-light); display: block;
  }
  .stat-label {
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 0.5rem;
  }

  /* Timeline */
  .timeline-item {
    display: flex; gap: 1.5rem; margin-bottom: 2rem;
    opacity: 0; transform: translateX(-20px); transition: all 0.5s ease;
  }
  .timeline-item.visible { opacity: 1; transform: translateX(0); }
  .timeline-left { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
  .timeline-dot {
    width: 40px; height: 40px; background: var(--saffron); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; flex-shrink: 0;
    box-shadow: 0 0 0 4px rgba(232,100,12,0.2);
  }
  .timeline-line {
    width: 2px; flex: 1;
    background: linear-gradient(to bottom, var(--saffron), transparent);
    margin-top: 8px; min-height: 24px;
  }
  .timeline-content { padding-top: 0.25rem; }
  .timeline-content h4 {
    font-family: 'Cinzel', serif; font-size: 1rem; font-weight: 600;
    color: var(--earth); margin-bottom: 0.4rem;
  }
  .timeline-content p { font-size: 0.95rem; color: var(--muted); line-height: 1.65; }

  /* Impact cards */
  .impact-card {
    background: #fff; border: 1px solid rgba(232,100,12,0.12);
    border-radius: 16px; padding: 2.5rem; transition: all 0.4s ease;
    position: relative; overflow: hidden;
    opacity: 0; transform: translateY(30px);
  }
  .impact-card.visible { opacity: 1; transform: translateY(0); }
  .impact-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--saffron), var(--gold));
    transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
  }
  .impact-card:hover { box-shadow: 0 20px 60px rgba(232,100,12,0.12); transform: translateY(-6px) !important; }
  .impact-card:hover::before { transform: scaleX(1); }
  .impact-icon {
    width: 56px; height: 56px; background: var(--saffron-pale); border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; margin-bottom: 1.25rem; transition: all 0.3s;
  }
  .impact-card:hover .impact-icon { background: var(--saffron); transform: scale(1.1); }
  .impact-card h3 { font-family: 'Cinzel', serif; font-size: 1.1rem; color: var(--earth); margin-bottom: 0.75rem; }
  .impact-card p { font-size: 0.95rem; line-height: 1.7; color: var(--muted); }

  /* Video cards */
  .video-card {
    background: #fff; border-radius: 12px; overflow: hidden;
    box-shadow: 0 4px 20px rgba(92,45,0,0.08); transition: all 0.3s;
    opacity: 0; transform: translateY(20px);
  }
  .video-card.visible { opacity: 1; transform: translateY(0); }
  .video-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(92,45,0,0.15); }
  .play-btn {
    width: 56px; height: 56px; background: var(--saffron); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s; cursor: pointer; position: relative;
  }
  .play-btn::after {
    content: ''; position: absolute; inset: -6px;
    border: 2px solid rgba(232,100,12,0.3); border-radius: 50%;
    animation: ripple 2s ease-in-out infinite;
  }
  .video-card:hover .play-btn { background: var(--gold); transform: scale(1.1); animation: glow 1.5s ease-in-out infinite; }

  /* Gallery */
  .gallery-item {
    break-inside: avoid; margin-bottom: 1rem; border-radius: 8px; overflow: hidden;
    position: relative; cursor: pointer;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(232,100,12,0.15);
    transition: all 0.3s; opacity: 0; animation: scaleIn 0.5s ease forwards;
  }
  .gallery-item:hover { transform: scale(1.02); border-color: var(--saffron); }
  .gallery-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(26,8,0,0.85) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.3s;
    display: flex; align-items: flex-end; padding: 1rem;
  }
  .gallery-item:hover .gallery-overlay { opacity: 1; }

  /* Filter buttons */
  .filter-btn {
    padding: 0.4rem 1.25rem; font-size: 0.75rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    border: 1px solid rgba(232,100,12,0.3); background: transparent;
    color: rgba(255,255,255,0.6); border-radius: 999px; cursor: pointer; transition: all 0.2s;
  }
  .filter-btn:hover, .filter-btn.active { background: var(--saffron); border-color: var(--saffron); color: #fff; }

  /* Analysis tabs */
  .analysis-tab {
    padding: 0.75rem 1.5rem; font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--muted); background: transparent; border: none; cursor: pointer;
    border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.2s;
  }
  .analysis-tab:hover { color: var(--saffron); }
  .analysis-tab.active { color: var(--saffron); border-bottom-color: var(--saffron); }

  /* Bar chart */
  .bar-track {
    flex: 1; height: 28px; background: rgba(92,45,0,0.06);
    border-radius: 4px; overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--saffron), var(--gold-light));
    border-radius: 4px; width: 0;
    transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex; align-items: center; justify-content: flex-end; padding-right: 0.5rem;
  }

  /* Footer */
  .footer-section {
    background: linear-gradient(160deg, #1A0800 0%, #0D0400 100%);
    padding: 5rem 2rem 2rem; position: relative; overflow: hidden;
  }
  .footer-section::before {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(rgba(232,100,12,0.05) 1px, transparent 1px);
    background-size: 30px 30px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .stats-inner { grid-template-columns: repeat(2, 1fr); }
    .nav-links { display: none; }
  }
`;
