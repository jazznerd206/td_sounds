import './App.css';

function App() {

  const sounds = [
    {
      index: 0,
      name: 'beepboop',
      location: '/assets/audio/beepboop.wav',
      icon: "fas fa-bell fa-5x"
    },
    {
      index: 1,
      name: 'heartbeat',
      location: '/assets/audio/heartbeat.wav',
      icon: "fas fa-heartbeat fa-5x"
    },
    {
      index: 2,
      name: 'rocket',
      location: '/assets/audio/rocket.wav',
      icon: "fas fa-rocket fa-5x"
    },
    {
      index: 3,
      name: 'transition',
      location: '/assets/audio/transition.wav',
      icon: "fas fa-arrow-circle-right fa-5x"
    },
    {
      index: 4,
      name: 'trumpet',
      location: '/assets/audio/trumpet.wav',
      icon: "fas fa-chess-king fa-5x"
    },
    {
      index: 5,
      name: 'whoosh',
      location: '/assets/audio/whoosh.wav',
      icon: "fas fa-wind fa-5x"
    },
    {
      index: 6,
      name: 'airhorn',
      location: '/assets/audio/airhorn.mp3',
      icon: "fas fa-bullhorn fa-5x"
    },
    {
      index: 7,
      name: 'alright',
      location: '/assets/audio/alright.mp3',
      image: "/assets/images/mm.jpeg",
      mm: true
    },
    {
      index: 8,
      name: 'whoawhoa',
      location: '/assets/audio/whoawhoa.m4a',
      image: "/assets/images/whoawhoa.png",
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
