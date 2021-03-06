import React, { Component } from "react";
import Preview from "./mainTypeTest/Preview";
import Speed from "./mainTypeTest/Speed";
import CustomTypeBase from "./CustomTypeText";
import { Textarea, Button, Center, Box, Text } from "@chakra-ui/react";

let awdawdwawdawdawdawd = document.getElementById("awdawdwawdawdawdawd");
// let aetatetae = document.getElementById("pasteText");

// aetatetae.addEventListener("input", (e) => {
//   awdawdwawdawdawdawd.textContent = e.target.value;
// });

const initialState = {
  // CustonTypeBase,
  text: CustomTypeBase(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class CustomType extends Component {
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
            width: "700px",
            position: "fixed",
            right: "150px",
            top: "90px",
          }}
          className="container mt-5 mb-5"
        >
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Text style={{ fontSize: "30px" }}>Custom Type</Text>
              <span id="awdawdwawdawdawdawd">awd</span>

              <Textarea
                w={"700px"}
                placeholder="Copy and paste text that you want to type up and understand."
                type="text"
                id="pasteText"
                onChange={(e) => {
                  awdawdwawdawdawdawd.textContent = e.target.value;
                }}

                // value={text}
                // onChange={(e) => setText(e.target.value)}
              ></Textarea>

              <Text>
                <Preview
                  text={this.state.text}
                  userInput={this.state.userInput}
                />
              </Text>
              <Textarea
                padding={"10px"}
                value={this.state.userInput}
                onChange={this.onUserInputChange}
                className="form-control mb-3"
                placeholder="Start typing..."
                readOnly={this.state.finished}
              ></Textarea>

              <Speed sec={this.state.sec} symbols={this.state.symbols} />
              <div className="text-right">
                {/* <Text color={"red"}>Check you have everything correct</Text> */}
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

export default CustomType;
