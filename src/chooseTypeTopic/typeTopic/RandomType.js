import React, { Component } from "react";
import Preview from "../../mainTypeTest/Preview";
import Speed from "../../mainTypeTest/Speed";
import GetTextRandom from "../../mainTypeTest/getTextTopics/GetTextRandom";
import { Textarea, Button, Center, Box, Text } from "@chakra-ui/react";

const initialState = {
  GetTextRandom,
  text: GetTextRandom(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class RandomType extends Component {
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
      <Box marginLeft={"300px"} marginTop={"100px"}>
        <div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Text style={{ fontSize: "30px" }}>Random Facts</Text>

              <Text>
                <Preview
                  text={this.state.text}
                  userInput={this.state.userInput}
                />
              </Text>
              <Textarea
                padding={"3px"}
                width={"50rem"}
                value={this.state.userInput}
                onChange={this.onUserInputChange}
                className="form-control mb-3"
                placeholder="Start typing..."
                readOnly={this.state.finished}
              ></Textarea>
              <Speed sec={this.state.sec} symbols={this.state.symbols} />
              <div className="text-right">
                <Text color={"red"}>Check you have everything correct</Text>
                <Button className="btn btn-light" onClick={this.onRestart}>
                  Restart
                </Button>
                <Button
                  marginLeft={"10px"}
                  onClick={() => window.location.reload(false)}
                >
                  Get New Text
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

export default RandomType;
