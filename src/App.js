import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import i10 from './i10.jpg';
import i10r from './i10r.jpg';
import i11 from './i11.jpg';
import i11pro from './i11pro.jpg';


class App extends React.Component{
  render()
  {
    return(
      <div>
        <h1 className="App-header">Compare Models</h1>
        <div className="row">

          <div className="col-sm-3" style={{backgroundColor:"white", borderStyle:"solid", borderColor:"black"}}>
              <img src ={i10} className="image" style={{width:"100%", height:"400px"}}/>
                <div className="caption">
                <p>Model</p>
                <p>Price</p>
                </div>
            </div>

          <div className="col-sm-3" style={{backgroundColor:"white",  borderStyle:"solid", borderColor:"black"}}>
            <img src ={i10r} className="image" style={{width:"100%", height:"400px",}}/>
            <div className="caption">
            <p>Model</p>
            <p>Price</p>
            </div>
          </div>

          <div className="col-sm-3" style={{backgroundColor:"white", borderStyle:"solid", borderColor:"black"}}>
            <img src ={i11} className="image" style={{width:"100%", height:"400px"}}/>
            <div className="caption">
            <p>Model</p>
            <p>Price</p>
            </div>
          </div>

          <div className="col-sm-3" style={{backgroundColor:"white", borderStyle:"solid", borderColor:"black"}}>
            <img src ={i11pro} style={{width:"100%", height:"400px"}}/>
            <div className="caption">
            <p>Model</p>
            <p>Price</p>
            </div>
          </div>
        </div>
        </div>
    )
  }

}

export default App;
