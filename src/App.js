import React, { Component } from "react";
import "./App.css";
import {
  Container,
  Header,
  Progress,
  Icon,
  Dropdown,
  Menu,
  Input,
  Button
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// const Web3 = require("web3");
const receiver = "0x29d1234567899c864d9db560d72a247c178ae86b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
      activeItem2: "home",
      isActive: "steps",
      tenKpercentage: 100,
      twentyKpercentage: 50,
      fiftyKpercentage: 20,
      hundredKpercentage: 10,
      twoHundredKpercentage: 5
    };
  }

  handleItemClick = (e, { name }) => {
    if (name === "activity") {
      this.setState({ activeItem: "steps" });
    } else {
      this.setState({ activeItem: "docs" });
    }
    this.setState({ activeItem: name });
  };

  handleItemClick2 = (e, { name }) => this.setState({ activeItem2: name });

  sendEther(amount) {
    // const web3 = new Web3(
    //   new Web3.providers.HttpProvider("http://localhost:8545")
    // );

    let toSend = 0.0045 * amount;

    //   web3.eth.sendTransaction({
    //     to: receiver,
    //     value: toSend,
    //     gasLimit: 21000,
    //     gasPrice: 20000000000
    //   });
  }

  enter = e => {
    this.setState({ activeItem2: "activity" });
  };

  render() {
    const { activeItem2 } = this.state;
    const { activeItem } = this.state;
    return (
      <div>
        {activeItem2 === "home" ? (
          <Container centered style={{ textAlign: "center", marginTop: "1%" }}>
            <img src="image.png" style={{ marginLeft: "30px" }} />
            <Header size="huge" color="teal">
              Moving the world, step by step
            </Header>
            <Header size="huge">
              <Button size="huge" color="teal" basic onClick={this.enter}>
                Enter
              </Button>
            </Header>
          </Container>
        ) : (
          <div>
            <div>
              <div style={{ textAlign: "center" }}>
                <img src="Image.png" style={{ width: "200px" }} />
              </div>
              <Menu pointing secondary style={{ width: "80%", margin: "auto" }}>
                <Menu.Item
                  name="activity"
                  active={activeItem2 === "activity"}
                  onClick={this.handleItemClick2}
                />
                <Menu.Item
                  name="documents"
                  active={activeItem2 === "documents"}
                  onClick={this.handleItemClick2}
                />
                <Menu.Menu position="right">
                  <Menu.Item
                    name="logout"
                    active={activeItem2 === "logout"}
                    onClick={this.handleItemClick2}
                  />
                </Menu.Menu>
              </Menu>
            </div>
            <div>
              {this.state.activeItem2 === "activity" ? (
                <div>
                  <Container style={{ marginTop: "50px" }}>
                    <Header size="huge">Overview of your reward goals</Header>
                  </Container>
                  <Container style={{ marginTop: "80px" }}>
                    <Header size="big">
                      Your goal of walking 10'000 steps a day
                    </Header>
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
                          {this.sendEther(1)}
                        </div>
                      ) : (
                        ""
                      )}
                    </Progress>
                  </Container>
                  <Container style={{ marginTop: "80px" }}>
                    <Header size="big">
                      Your goal of walking 20'000 steps a day
                    </Header>
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
                          {this.sendEther(2)}
                        </div>
                      ) : (
                        ""
                      )}
                    </Progress>
                  </Container>
                  <Container style={{ marginTop: "80px" }}>
                    <Header size="big">
                      Your goal of walking 50'000 steps a day
                    </Header>
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
                          {this.sendEther(5)}
                        </div>
                      ) : (
                        ""
                      )}
                    </Progress>
                  </Container>
                  <Container style={{ marginTop: "80px" }}>
                    <Header size="big">
                      Your goal of walking 100'000 steps a day
                    </Header>
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
                          {this.sendEther(10)}
                        </div>
                      ) : (
                        ""
                      )}
                    </Progress>
                  </Container>
                  <Container style={{ marginTop: "80px" }}>
                    <Header size="big">
                      Your goal of walking 200'000 steps a day
                    </Header>
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
                          {this.sendEther(20)}
                        </div>
                      ) : (
                        ""
                      )}
                    </Progress>
                  </Container>
                </div>
              ) : (
                <div>
                  <Container>
                    <Menu
                      vertical
                      style={{
                        width: "40%",
                        marginTop: "20px"
                      }}
                    >
                      <Menu.Item>
                        <Input placeholder="Search..." />
                      </Menu.Item>

                      <Dropdown item text="Bills">
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <a
                              href="medical-bill-invoice-template.pdf"
                              type="application/pdf"
                              target="_blank"
                              style={{ color: "black" }}
                            >
                              <Icon name="file text" />
                              <span style={{ marginRight: "5px" }}>
                                17.11.2018_Helsana
                              </span>
                            </a>
                            <Icon name="checkmark" color="green" />
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <a
                              href="medical-bill-invoice-template.pdf"
                              type="application/pdf"
                              target="_blank"
                              style={{ color: "black" }}
                            >
                              <Icon name="file text" />
                              <span style={{ marginRight: "5px" }}>
                                04.08.2018_MedBase
                              </span>
                            </a>
                            <Icon name="wait" color="orange" />
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <a
                              href="medical-bill-invoice-template.pdf"
                              type="application/pdf"
                              target="_blank"
                              style={{ color: "black" }}
                            >
                              <Icon name="file text" />
                              <span style={{ marginRight: "5px" }}>
                                01.01.2018_year2018
                              </span>
                            </a>
                            <Icon name="close" color="red" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Menu.Item
                        name="currentsavings"
                        active={activeItem === "currentsavings"}
                        onClick={this.handleItemClick}
                      >
                        Current Savings: CHF 6.40.-
                      </Menu.Item>
                      <Menu.Item
                        name="browse"
                        active={activeItem === "browse"}
                        onClick={this.handleItemClick}
                      >
                        <Icon name="grid layout" />
                        Browse
                      </Menu.Item>
                      <Menu.Item
                        name="messages"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                      >
                        Messages
                      </Menu.Item>
                    </Menu>
                  </Container>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
