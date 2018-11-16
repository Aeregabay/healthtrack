import React, { Component } from "react";
import "./App.css";
import { Container, Header, Progress, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenKpercentage: 100,
      twentyKpercentage: 50,
      fiftyKpercentage: 20,
      hundredKpercentage: 10,
      twoHundredKpercentage: 5
    };
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: "50px" }}>
          <Header size="huge">Overview of your reward goals</Header>
        </Container>
        <Container style={{ marginTop: "80px" }}>
          <Header size="big">Your goal of walking 10'000 steps a day</Header>
          <Progress
            style={{ width: "70%" }}
            percent={this.state.tenKpercentage}
            indicating
            progress
          >
            {this.state.tenKpercentage === 100 ? (
              <div>
                <span style={{ marginTop: "10px", float: "right" }}>
                  You have been credited 80 Rappen!
                </span>
                <Icon
                  size="huge"
                  name="check"
                  style={{ float: "right" }}
                  color="green"
                />
              </div>
            ) : (
              ""
            )}
          </Progress>
        </Container>
        <Container style={{ marginTop: "80px" }}>
          <Header size="big">Your goal of walking 20'000 steps a day</Header>
          <Progress
            style={{ width: "70%" }}
            percent={this.state.twentyKpercentage}
            indicating
            progress
          >
            {this.state.twentyKpercentage === 100 ? (
              <div>
                <span style={{ marginTop: "10px", float: "right" }}>
                  You have been credited 1.60.- CHF!
                </span>
                <Icon
                  size="huge"
                  name="check"
                  style={{ float: "right" }}
                  color="green"
                />
              </div>
            ) : (
              ""
            )}
          </Progress>
        </Container>
        <Container style={{ marginTop: "80px" }}>
          <Header size="big">Your goal of walking 50'000 steps a day</Header>
          <Progress
            style={{ width: "70%" }}
            percent={this.state.fiftyKpercentage}
            indicating
            progress
          >
            {this.state.fiftyKpercentage === 100 ? (
              <div>
                <span style={{ marginTop: "10px", float: "right" }}>
                  You have been credited 4 CHF!
                </span>
                <Icon
                  size="huge"
                  name="check"
                  style={{ float: "right" }}
                  color="green"
                />
              </div>
            ) : (
              ""
            )}
          </Progress>
        </Container>
        <Container style={{ marginTop: "80px" }}>
          <Header size="big">Your goal of walking 100'000 steps a day</Header>
          <Progress
            style={{ width: "70%" }}
            percent={this.state.hundredKpercentage}
            indicating
            progress
          >
            {this.state.hundredKpercentage === 100 ? (
              <div>
                <span style={{ marginTop: "10px", float: "right" }}>
                  You have been credited 8 CHF!
                </span>
                <Icon
                  size="huge"
                  name="check"
                  style={{ float: "right" }}
                  color="green"
                />
              </div>
            ) : (
              ""
            )}
          </Progress>
        </Container>
        <Container style={{ marginTop: "80px" }}>
          <Header size="big">Your goal of walking 200'000 steps a day</Header>
          <Progress
            style={{ width: "70%" }}
            percent={this.state.twoHundredKpercentage}
            indicating
            progress
          >
            {this.state.twoHundredKpercentage === 100 ? (
              <div>
                <span style={{ marginTop: "10px", float: "right" }}>
                  You have been credited 16 CHF!
                </span>
                <Icon
                  size="huge"
                  name="check"
                  style={{ float: "right" }}
                  color="green"
                />
              </div>
            ) : (
              ""
            )}
          </Progress>
        </Container>
      </div>
    );
  }
}

export default App;
