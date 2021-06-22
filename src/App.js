import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact name="Musashi Miyamoto"
        avatar="https://i.pinimg.com/originals/82/04/f5/8204f56fd44e3071fad7fff47f246766.jpg"
        isOnline />
      <Contact name="Kojiro Sasaki"
        avatar="https://pm1.narvii.com/5784/2abc6ced7ea1d34392a07c67fef3498de1b9a8ae_hq.jpg" />
      <Contact name="Seijuro Yoshioka"
        avatar="https://i.pinimg.com/originals/9b/dd/c2/9bddc233f7fbbedee75efc1d1eeca58c.jpg"
        isOnline />
    </div>
  );
}

export default App;
