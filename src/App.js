
import './App.css';
import imageInSrc from "./imageInSrc.png"
import './style.css'

function App() {
  return (
    <div className="App">




      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:'100vw'}}>
          <h1 className="title red">EMOJIS</h1>
        <br/>
            <img src={imageInSrc} alt='ImageInSrc' />
        <br/>
          <img src="/imageInPublic.jpg" alt="ImageInpublic"/>
        </div>
        <video width="320" height="240" controls>
            <source src="/EMOJI-3d.mp4" type="video/mp4" alt='videomp4' />
        </video>
       
      </header>
    </div>
  );
}

export default App;
