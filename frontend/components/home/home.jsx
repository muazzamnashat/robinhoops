import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freeStock: {},
      freeAthlete: {}
    };
    this.freeStockClicked = this.freeStockClicked.bind(this);
  }

  componentDidMount() {
    this.props.fetchStocks();
  }

  freeStockClicked(e) {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * this.props.stocks.length);
    const freeSection = document.getElementById("free-stock-section");
    freeSection.classList.remove("jackInTheBox");
    freeSection.classList.add("lightSpeedOut");
    this.setState({ freeStock: this.props.stocks[randomNum] });
    console.log(document.getElementsByClassName("free-stock-result")[0]);

    document.getElementById("free-stock-view").setAttribute("id", "show");
  }

  render() {
    let currentUser = this.props.currentUser;
    const loader = () => (
      <span className="cssload-loader">
        <span className="cssload-loader-inner" />
      </span>
    );

    const freeStockView = () => (
      <div id="free-stock-view" className="free-stock-result">
        <h1>{this.state.freeStock.initial_price}</h1>
        <h3>{this.state.freeStock.athlete_id}</h3>
      </div>
    );

    console.log("Rendering");

    return (
      <div className="home-section">
        <div className="fixed-nav-bar">
          <img
            className="logo-img"
            src="https://media.glassdoor.com/sqll/1167765/robinhood-squarelogo-1530549970728.png"
          />
          <nav className="login-signup">
            <button
              className="login-logout-button"
              onClick={() => this.props.logout(currentUser)}
            >
              Logout
            </button>
          </nav>
        </div>
        {this.state.freeStock ? freeStockView() : loader()}
        <div
          id="free-stock-section"
          className="free-stock-pop-up animated jackInTheBox"
        >
          <h1 className="free-stock-header animated zoomIn delay-1s">
            WE LOVE NEW USERS!
          </h1>
          <h2 className="free-stock-subtitle animated fadeInUp delay-1s">
            To get you started, here's a free stock on us.
          </h2>
          <button
            id="free-stock-button-1"
            className="free-stock-button animated fadeInDown delay-2s"
            onClick={this.freeStockClicked}
          />
          <button
            id="free-stock-button-2"
            className="free-stock-button animated fadeInDown delay-3s"
            onClick={this.freeStockClicked}
          />
          <button
            id="free-stock-button-3"
            className="free-stock-button animated fadeInDown delay-4s"
            onClick={this.freeStockClicked}
          />
        </div>
      </div>
    );
  }
}

export default Home;
