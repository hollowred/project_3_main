import logo from './logo.svg';
import './App.css';
import axios from 'axios'





function App() {
  return (
    <>
    <h1 className="title">PlayList</h1>
    <div className='play-list'> 
    
       Artist: <br></br>
       <input type='text'/>
       <br></br>
       Album: <br></br>
        <input type='text'/>,
       <br></br>
       Song: <br></br>
              <input type='text'/>
       <br></br>
       Genre: <br></br>
       <input type='text'/> 
       <br></br>
       Album Cover: <br></br>
       <input type='url'/>
       
    </div>
    </>
    

  );
}

export default App;
