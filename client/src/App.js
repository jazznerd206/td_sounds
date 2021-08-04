import './App.css';
import beepboop from '../src/audio/beepboop.wav';
import heartbeat from '../src/audio/heartbeat.wav';
import rocket from '../src/audio/rocket.wav';
import transition from '../src/audio/transition.wav';
import whoosh from '../src/audio/whoosh.wav';
import airhorn from '../src/audio/airhorn.mp3';
import alright from '../src/audio/alright.mp3';
import whoawhoa from '../src/audio/whoawhoa.m4a';
import trumpet from '../src/audio/trumpet.wav';
import mm_img from '../src/images/mm.jpeg';
import whoawhoa_img from '../src/images/whoawhoa.png';

function App() {

  const sounds = [
    {
      index: 0,
      name: 'beepboop',
      location: beepboop,
      icon: "fas fa-bell fa-5x"
    },
    {
      index: 1,
      name: 'heartbeat',
      location: heartbeat,
      icon: "fas fa-heartbeat fa-5x"
    },
    {
      index: 2,
      name: 'rocket',
      location: rocket,
      icon: "fas fa-rocket fa-5x"
    },
    {
      index: 3,
      name: 'transition',
      location: transition,
      icon: "fas fa-arrow-circle-right fa-5x"
    },
    {
      index: 4,
      name: 'trumpet',
      location: trumpet,
      icon: "fas fa-chess-king fa-5x"
    },
    {
      index: 5,
      name: 'whoosh',
      location: whoosh,
      icon: "fas fa-wind fa-5x"
    },
    {
      index: 6,
      name: 'airhorn',
      location: airhorn,
      icon: "fas fa-bullhorn fa-5x"
    },
    {
      index: 7,
      name: 'alright',
      location: alright,
      image: mm_img,
      mm: true
    },
    {
      index: 8,
      name: 'whoawhoa',
      location: whoawhoa,
      image: whoawhoa_img,
      mm: true
    },
  ]

  const play = e => {
    e.preventDefault();
    const el = document.getElementById(e.target.value);
    console.log(`e`, el.id);
    if (!el.paused) {
      console.log('pause');
      el.pause();
      el.src = el.src;
    } else {
      console.log('play');
      el.play();
      el.style.background = 'rbg(0,0,0,.35)'
    }
  }

  return (
    <div className="container">
      <div className="buttonField">
        {sounds.map(s => {
          return (
            <button 
              className='button' 
              key={s.index}
              value={s.name}
              onClick={(e) => {play(e)}}
            >
              {s.icon != undefined ? <i className={s.icon}></i> : <img src={s.image} alt={s.name}/>}
              <audio id={s.name} src={s.location} preload="none"></audio>
            </button>
          )})}
      </div>
    </div>
  );
}

export default App;
