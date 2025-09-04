import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return <section className="hero" style={{ backgroundImage: `url(${heroImage})` }} />;
}
