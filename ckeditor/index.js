import React from "react";
import { WebView, View } from "react-native";
const webapp = require("./index.html");
class CKEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <WebView
        style={{ marginTop: 20 }}
        scrollEnabled={false}
        source={webapp}
      />
    );
  }
}

export default CKEditor;
