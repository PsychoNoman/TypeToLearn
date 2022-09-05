import React, { Component } from "react";
import Preview from "../../mainTypeTest/Preview";
import Speed from "../../mainTypeTest/Speed";
import GetTextCS from "../../mainTypeTest/getTextTopics/GetTextCS";
import { Textarea, Button, Center, Box, Text } from "@chakra-ui/react";

const initialState = {
  GetTextCS,
  text: GetTextCS(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class Computerscience extends Component {
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
        <div marginLeft={"300px"} marginTop={"100px"}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Text style={{ fontSize: "30px" }}>Computer Science</Text>

              <Text>
                <Preview
                  text={this.state.text}
                  userInput={this.state.userInput}
                />
              </Text>
              <Textarea
                width={"50rem"}
                padding={"3px"}
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

export default Computerscience;
