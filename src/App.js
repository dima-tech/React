import React from "react";
import Info from "./components/info";
import Form from "./components/form";

class App extends React.Component{

  st = {
  f: undefined,
  i: undefined,
  o: undefined,
  error: undefined,
}

gettinginf =  async (event) => {
  event.preventDefault();
  var i = event.target.elements.i.value;

  if(i) {
    const api_url = await
    fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014`);
    const data = await api_url.json();

    this.setSt({
      f: data.main.name,
      i: data.name,
      o: data.sys.name,
      error: undefined
    });
  } else {
    this.setState({
      f: undefined,
      i: undefined,
      o: undefined,
      error: "Введите имя!"
    });
  }
}

  render(){
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form infMethod={this.gettinginf} />
                <Inf
                  f={this.st.f}
                  i={this.st.i}
                  o={this.st.o}
                  error={this.st.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
