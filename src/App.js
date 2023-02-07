import image from "./image.png";
import "./App.css";
import React from "react";
import Profile from "./Profile";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Mariem Hamed",
        bio: `She is a Full Stack Developer.`,
        imgSrc: image,
        profession: "Full Stack Developer",
      },
      visibility: false,
      btnName: "Show",
    };
  }

  toggleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });

    if (this.state.visibility === true) {
      this.setState({ btnName: "Show" });
    } else {
      this.setState({ btnName: "Hide" });
    }
    //
  };

  render() {
    return (
      <div className="App">
        {this.state.visibility && <Profile personne={this.state.person} />}
        <button
          type="button"
          className="simple"
          onClick={this.toggleVisibility}
        >
          {" "}
          {this.state.btnName}
        </button>
      </div>
    );
  }
}

export default App;
