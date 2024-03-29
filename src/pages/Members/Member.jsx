import React, { Component } from "react";
import RRImage from "../../components/RRImage";
import "./member.css";

export default class Member extends Component {
  render() {
    let { name, instrument, img_url } = this.props;
    return (
      <div className="col-sm-4 p-3">
        <div className="">
          <div className="container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{instrument}</p>
          </div>
          <RRImage src={img_url} alt={name} className="rounded-circle" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }
}
