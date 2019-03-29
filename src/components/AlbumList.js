// eslint-disable-next-line react/require-extension
import React from "react";
import { View, Text } from "react-native";
import axios from "axios";

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
  render() {
    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    );
  }
}

export default AlbumList;
