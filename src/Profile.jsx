import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0,
    };
  }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  };
  componentDidMount = () => {
    this.intervalId = setInterval(this.timer, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>
        <div className="a-box">
          <div className="img-container">
            <div className="img-inner">
              <div className="inner-skew">
                <img src={this.props.personne.imgSrc} alt="image" />
              </div>
            </div>
          </div>

          <div className="text-container">
            <h3 style={{ color: "#F55OP" }}>{this.props.personne.fullName}</h3>
            <h3 style={{ color: "#00BFA6" }}>
              {" "}
              {this.props.personne.profession}
            </h3>
            <h3>Who Is {this.props.personne.fullName}?</h3>

            <p>{this.props.personne.bio}</p>
            <p style={{ color: "red" }}>Counter: {this.state.currentCount}</p>
          </div>
        </div>
      </div>
    );
  }
}
