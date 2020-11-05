import './App.css';
import Typical from 'react-typical';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://avatars2.githubusercontent.com/u/63564492?s=460&u=1f8d12bf53b8dd5e1daf8010a03a671dad5fc92d&v=4" className="App-logo" alt="logo" />    
        <h1> Hi, i'm Franco Caporaletti</h1>
        <p>
          I'm {' '}
          <Typical
            loop={Infinity} //Si cambias infinity por 1 solo reproduce el texto 1 vez.
            wrapper="b"
            steps={[
              'full stack developer',
              1000,
              'creative',
              1000,
              'movie lover',
              1000,
              'drummer',
              1000,
              '24 years old',
              1000
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
