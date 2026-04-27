import { Component } from "react";
class Img extends Component {
  render() {
    return (
      <div>
        <img src={this.props.path} alt="Foto Gatto" />
      </div>
    );
  }
}

export default Img;
