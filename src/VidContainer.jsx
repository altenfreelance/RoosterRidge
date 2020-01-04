import React, { Component } from "react";
import YouTube from "react-youtube";
// import ReactPlayer from "react-player";
import ReactLoading from 'react-loading';


export default class VidContainer extends Component {
  state = {
    newest_id: "",
    isLoading: true
  };

  render() {
    // const opts = {
    //   width:"100%",
    //   height:"400px"
    // };
    if (this.state.isLoading){
      return (
      <div style={{margin:'auto', padding:'0px 75px'}}>
          <ReactLoading type={"spin"} color={"maroon"} height={50} width={50} />
        </div>
    );}
    return (

      <div className="iframe-container">
        <YouTube videoId={this.state.newest_id} />
      </div>
    );
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE0jXwLwL7T6zIoQCnHVUzw&maxResults=1&order=date&type=video&key=AIzaSyA1YtJvaAS53VWCfna1MRqJuJRYaba1OYo"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ newest_id: response.items[0].id.videoId })
        this.setState({isLoading: false})
      }
        
      );
  }
}
