import React from "react";

class TextEditor extends React.Component {
  state = {
    text: "",
  };

  inputHandler = (e) => this.setState({ text: e.target.value });

  render() {
    console.log("textEditor state: ", this.state);
    console.log("textEditor props: ", this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            style={{ background: "gray", color: "white" }}
            className="col-sm"
          >
            <h6>Text Editor</h6>
            <form>
              <div className="form-group">
                <label>Escribe aqui</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="9"
                  onChange={this.inputHandler}
                ></textarea>
              </div>
            </form>
          </div>
          <div
            style={{ background: "black", color: "white" }}
            className="col-sm"
          >
            <h6>Text editor Ouput </h6>
            <p>{this.state.text && this.state.text}</p>
            <div style={{ backgroundColor: "white", color: "black" }}></div>
          </div>
        </div>

        <br />

        {/* <button onClick={this.handleSaveText}>Send Text</button> */}
      </div>
    );
  }
}

export default TextEditor;
