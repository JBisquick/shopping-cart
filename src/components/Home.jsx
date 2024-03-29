import Store from './public/store.png';
import '../css/home.css'

function Home() {
  return (
    <div className='home-container'>
      <h2>We Sell Random Shit</h2>
      <p>
        We don't believe in consistency for the Odin Online Shopping website. We just sell what ever
        we feel like it. If we see something cool we impulsively start stocking up and selling it.
        One day we may be selling clothes and by the next day we start selling sawed off shotguns.
        Our philosophy is to stay unpredictable and to keep our customers on their toes.
      </p>
      <img src={Store} />
      <h2>Contact Information</h2>
      <p>Don't do this actually. We really don't want to talk to you.</p>
    </div>
  );
}

export default Home;
