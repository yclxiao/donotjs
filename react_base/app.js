class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  render() {
    let num = this.state.num;
    return React.createElement(
      "div",
      {},
      React.createElement("input", {
        type: "text",
        id: "showTxt",
        value: num
      }),
      React.createElement("input", {
        value: "测试",
        type: "button",
        onClick: () => this.changeNum()
      })
    );
  }

  changeNum() {
    this.setState({
      num: this.state.num + 1
    });
  }
}

ReactDom.render(
  React.createElement(AddPage, null),
  document.getElementById("root")
);
