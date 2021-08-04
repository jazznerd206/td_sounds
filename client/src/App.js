import './App.css';

function App() {

  const sounds = [
    {
      index: 0,
      name: 'beepboop',
      location: '/public/audio/beepboop.wav',
      icon: "fas fa-bell fa-5x"
    },
    {
      index: 1,
      name: 'heartbeat',
      location: '/public/audio/heartbeat.wav',
      icon: "fas fa-heartbeat fa-5x"
    },
    {
      index: 2,
      name: 'rocket',
      location: '/public/audio/rocket.wav',
      icon: "fas fa-rocket fa-5x"
    },
    {
      index: 3,
      name: 'transition',
      location: '/public/audio/transition.wav',
      icon: "fas fa-arrow-circle-right fa-5x"
    },
    {
      index: 4,
      name: 'trumpet',
      location: '/public/audio/trumpet.wav',
      icon: "fas fa-chess-king fa-5x"
    },
    {
      index: 5,
      name: 'whoosh',
      location: '/public/audio/whoosh.wav',
      icon: "fas fa-wind fa-5x"
    },
    {
      index: 6,
      name: 'airhorn',
      location: '/public/audio/airhorn.mp3',
      icon: "fas fa-bullhorn fa-5x"
    },
    {
      index: 7,
      name: 'alright',
      location: '/public/audio/alright.mp3',
      image: "/public/images/mm.jpeg",
      mm: true
    },
    {
      index: 8,
      name: 'whoawhoa',
      location: '/public/audio/whoawhoa.m4a',
      image: "/public/images/whoawhoa.png",
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
