import React from "react";
import ReactDOM from "react-dom";
import FilmBox from "./FilmBox.js";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => {
        return res.json();
      })
      .then(films => {
        this.setState({
          films: films
        });
      });
  }
  render() {
    const { films } = this.state;
    return (
      <div className="container">
        {films.map(film => {
          return <FilmBox film={film} />;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
