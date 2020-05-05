import React from "react";


class TextEditor extends React.Component {
  state = {
    text: ""
  };

  inputHandler = (e) => this.setState({ text: e.target.value });

  render() {
    console.log(this.state)
    return (
      <div class="container-fluid">
        <div class="row">
          <div style={{ background: "gray", color: "white" }} class="col-sm">
            <h6>Text Editor imput</h6>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Escribe aqui</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" onChange={this.inputHandler}></textarea>
              </div>
            </form>
          </div>
          <div style={{ background: "black", color: "white" }} class="col-sm">
            <h6>Text editor Ouput </h6>
            <p>{this.state.text && this.state.text}</p>
            <div style={{ backgroundColor: "white", color: "black" }}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor;

// HAY dos tipos de componentes en react STATELEST Y STATEFUL
// DUMB VS SMART DUMB SOLO LEE SMART ES UNA CLASE