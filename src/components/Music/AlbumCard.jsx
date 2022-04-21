import React, { Component } from "react";

export default class AlbumCard extends Component {
  render() {
    let { name, front_img_url, back_img_url } = this.props;

    return (
      <div className="col-sm-12 p-3">
        <div>
          <div className="container">
            {name && <h4>
              <b>
                {name} 🐔
              </b>
            </h4>}

            <div className="row">
              <div className="col-sm-6"> <figure>
                <img
                  src={front_img_url}
                  alt={name}
                  style={{ width: "100%" }}
                  caption=""
                />
              </figure></div>
              <div className="col-sm-6"> <figure>
                <img
                  src={back_img_url}
                  alt={name}
                  style={{ width: "100%" }}
                  caption=""
                />
              </figure></div>

            </div>


          </div>
        </div>
      </div>
    );
  }



}
