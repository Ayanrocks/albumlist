// eslint-disable-next-line react/require-extension
import React from "react";
import { View } from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";
class AlbumList extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => {
        this.setState({ albums: res.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
