import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import i10 from './i10.jpg';
import i10r from './i10r.jpg';
import i11 from './i11.jpg';
import i11pro from './i11pro.jpg';


class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      data:[
            {
              id : 1,
              model : "iPhone X",
              price : "$899",
              dp : "Display: 5.8-inch diagonal all-screen OLED",
              rc : "A12 Bionic chip Second-generation Neural Engine 3gb RAM"
            },
            {
              id : 2,
              model : "iPhone Xr",
              price : "$599",
              dp : "Liquid Retina HD display 6.1-inch",
              rc : "A12 Bionic chip Second-generation Neural Engine 3gb RAM"
            },
            {
              id : 3,
              model : "iPhone 11",
              price : "$699",
              dp : "Liquid Retina HD display 6.1‑inch ",
              rc :"A13 Bionic chip Third‑generation Neural Engine 4gb RAM"
            },
            {
              id : 4,
              model : "iPhone 11 pro",
              price : "$999",
              dp : "Super Retina XDR display 5.8‑inch ",
              rc : "A13 Bionic chip Third‑generation Neural Engine 4gb RAM"
            }
          ],
      list:[],
      ctr:0
    }
  }


  addItem(x)
  {
    var temp = [...this.state.data];
    const itemArr = temp.filter(mobile => mobile.id === x );
    if(itemArr.length>0)
    {
      const item ={
        id:itemArr[0].id,
        model:itemArr[0].model,
        price:itemArr[0].price,
        dp:itemArr[0].dp,
        rc:itemArr[0].rc
      };
      temp= [...this.state.list];
      temp.push(item);
      this.setState({ list : temp, ctr: this.state.ctr+1 });
      console.log(this.state.ctr);
    }
  }

  deleteItem(y)
  {
    if(this.state.list.length > 0)
    {
      console.log("remove")
      var temp =[...this.state.list];
      const updatedList = temp.filter(mobile => mobile.id !== y);
      this.setState( {list: updatedList, ctr:this.state.ctr-1} );
      console.log(this.state.ctr);
    }
  }

  render()
  {
    return(
      <div className="container-fluid" style={{backgroundColor:"#D8D9DE"}}>
        <h1 style={{backgroundColor:"#grey", textAlign:"center"}}>Compare Models</h1>
        <div className="row" style={{backgroundColor:"#DCDCDC"}}>

          <div className="col-sm-3" style={{backgroundColor:"black", borderStyle:"solid", borderColor:"black"}}>
              <img src ={i10} className="image" style={{width:"100%", height:"400px"}}/>
                <div className="caption">
                <p>iPhone X</p>
                <p>$899</p>
                <hr/>
                <button  className="button" onClick = {() => this.addItem(1)} style={{float:"left"}}>
                Compare
                </button>
                <button className="button" onClick ={() => this.deleteItem(1)} style={{float:"right"}}>
                Remove
                </button>
                </div>
            </div>

          <div className="col-sm-3" style={{backgroundColor:"black",  borderStyle:"solid", borderColor:"black"}}>
            <img src ={i10r} className="image" style={{width:"100%", height:"400px",}}/>
            <div className="caption">
            <p>iPhone Xr</p>
            <p>$599</p>
            <hr/>
            <button className="button" onClick = {() => this.addItem(2)} style={{float:"left"}}>
            Compare
            </button>
            <button className="button" onClick ={() => this.deleteItem(2)} style={{float:"right"}}>
            Remove
            </button>
            </div>
          </div>

          <div className="col-sm-3" style={{backgroundColor:"black", borderStyle:"solid", borderColor:"black"}}>
            <img src ={i11} className="image" style={{width:"100%", height:"400px"}}/>
            <div className="caption">
            <p>iPhone 11</p>
            <p>$699</p>
            <hr/>
            <button className="button" onClick = {() => this.addItem(3)} style={{float:"left"}}>
            Compare
            </button>
            <button className="button" onClick ={() => this.deleteItem(3)} style={{float:"right"}}>
            Remove
            </button>
            </div>
          </div>

          <div className="col-sm-3" style={{backgroundColor:"black", borderStyle:"solid", borderColor:"black"}}>
            <img src ={i11pro} style={{width:"100%", height:"400px"}}/>
            <div className="caption">
            <p>iPhone 11 Pro</p>
            <p>$999</p>
            <hr/>
            <button className="button" onClick = {() => this.addItem(4)} style={{float:"left"}}>
            Compare
            </button>
            <button className="button" onClick ={() => this.deleteItem(4)} style={{float:"right"}}>
            Remove
            </button>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className = "row" style={{backgroundColor:"#A1AAB3"}}>
          <div className = "col-sm-2" style={{ borderStyle:"inset"}}>
            <h4 className="caption" style={{color:"black", fontSize:"30px"}}>Model</h4>
            <hr/>
            {this.state.list.map(phone =>{
              return (<div key={phone.id}>
                <p>{phone.model}</p>
                <hr/>
                </div>);
            }
            )}
          </div>
          <div className = "col-sm-3" style={{ borderStyle:"inset"}}>
            <h4 className="caption" style={{color:"black", fontSize:"30px"}}>Display</h4>
            <hr/>
            {this.state.list.map(phone =>{
              return (<div key={phone.id}>
                <p>{phone.dp}</p>
                <hr/>
                </div>);
            }
            )}
          </div>
          <div className = "col-sm-5" style={{ borderStyle:"inset"}}>
            <h4 className="caption" style={{color:"black", fontSize:"30px"}}>Ram & Chip</h4>
            <hr/>
            {this.state.list.map(phone =>{
              return (<div key={phone.id}>
                <p>{phone.rc}</p>
                <hr/>
                </div>);
            }
            )}
          </div>
          <div className = "col-sm-2" style={{ borderStyle:"inset"}}>
            <h4 className="caption" style={{color:"black", fontSize:"30px"}}>Price</h4>
            <hr/>
            {this.state.list.map(phone =>{
              return (<div key={phone.id}>
                <p>{phone.price}</p>
                <hr/>
                </div>);
            }
            )}
          </div>
        </div>
        </div>
    )
  }
}

export default App;


/*{this.state.list.map(phone =>{
  return (<li key={phone.id}>
    <p>{phone.model}</p>
    <p>{phone .price}</p>
    </li>);
}
)}*/
