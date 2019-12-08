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
              price : "$899"
            },
            {
              id : 2,
              model : "iPhone Xr",
              price : "$599",
            },
            {
              id : 3,
              model : "iPhone 11",
              price : "$699",
            },
            {
              id : 4,
              model : "iPhone 11 pro",
              price : "$999",
            }
          ],
      list:[]
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
        price:itemArr[0].price
      };
      temp= [...this.state.list];
      console.log(temp);
      temp.push(item);
      console.log(temp);
      this.setState({ list : temp });
      console.log(this.state.list);
      console.log(item);

    }
  }

  deleteItem(y)
  {
    if(this.state.list.length > 0)
    {
      console.log("remove")
      var temp =[...this.state.list];
      const updatedList = temp.filter(mobile => mobile.id !== y);
      this.setState( {list: updatedList} );
    }
  }






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
                <hr/>
                <button onClick = {() => this.addItem(1)}>
                Compare
                </button>
                <hr/>
                <button onClick ={() => this.deleteItem(1)}>
                Remove
                </button>
                </div>
            </div>

          <div className="col-sm-3" style={{backgroundColor:"white",  borderStyle:"solid", borderColor:"black"}}>
            <img src ={i10r} className="image" style={{width:"100%", height:"400px",}}/>
            <div className="caption">
            <p>Model</p>
            <p>Price</p>
            <hr/>
            <button onClick = {() => this.addItem(2)}>
            Compare
            </button>
            <hr/>
            <button onClick ={() => this.deleteItem(2)}>
            Remove
            </button>
            </div>
          </div>

          <div className="col-sm-3" style={{backgroundColor:"white", borderStyle:"solid", borderColor:"black"}}>
            <img src ={i11} className="image" style={{width:"100%", height:"400px"}}/>
            <div className="caption">
            <p>Model</p>
            <p>Price</p>
            <hr/>
            <button onClick = {() => this.addItem(3)}>
            Compare
            </button>
            <hr/>
            <button onClick ={() => this.deleteItem(3)}>
            Remove
            </button>
            </div>
          </div>

          <div className="col-sm-3" style={{backgroundColor:"white", borderStyle:"solid", borderColor:"black"}}>
            <img src ={i11pro} style={{width:"100%", height:"400px"}}/>
            <div className="caption">
            <p>Model</p>
            <p>Price</p>
            <hr/>
            <button onClick = {() => this.addItem(4)}>
            Compare
            </button>
            <hr/>
            <button onClick ={() => this.deleteItem(4)}>
            Remove
            </button>
            </div>
          </div>
        </div>
          <ul>
            {this.state.list.map(phone =>{
              return (<li key={phone.id}>
                <p>{phone.model}</p>
                <p>{phone .price}</p>
                </li>);
            }
            )}
          </ul>
        </div>

    )
  }

}

export default App;
