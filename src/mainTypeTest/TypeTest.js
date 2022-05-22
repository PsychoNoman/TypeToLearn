import React, { Component } from "react";
import Preview from "./Preview";
import Speed from "./Speed";
import getText from "./getText";
import { Textarea, Button, Center, Box } from "@chakra-ui/react";
import BaseItems from "../base/BaseItems";

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class TypeTest extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
  };

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setTimer();
    this.onFinish(v);
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v),
    });
  };

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
      });
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }

  render() {
    return (
      <Box>
        <Center
          style={{
            width: "800px",
            position: "fixed",
            right: "200px",
            top: "90px",
          }}
          className="container mt-5 mb-5"
        >
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Preview
                text={this.state.text}
                userInput={this.state.userInput}
              />
              <Textarea
                value={this.state.userInput}
                onChange={this.onUserInputChange}
                className="form-control mb-3"
                placeholder="Start typing..."
                readOnly={this.state.finished}
              ></Textarea>
              <Speed sec={this.state.sec} symbols={this.state.symbols} />
              <div className="text-right">
                <Button className="btn btn-light" onClick={this.onRestart}>
                  Restart
                </Button>
              </div>
            </div>
          </div>
        </Center>
      </Box>
    );
  }
}

export default TypeTest;
