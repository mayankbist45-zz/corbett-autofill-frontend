import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";

export default class ListItems extends Component {
  removeEntry = () => {
    this.props.deleteEntry(this.props.userData._id);
  };
  render() {
    return (
      <List.Item>
        <List.Header>User Data [ID: {this.props.userData._id}]</List.Header>
        <List.Content floated="right">
          <Button color="red" onClick={this.removeEntry}>
            Remove
          </Button>
        </List.Content>
        <List.Description>Name: {this.props.userData.name}</List.Description>
        <List.Description>Age: {this.props.userData.age}</List.Description>
        <List.Description>
          Phone Number: {this.props.userData.phone}
        </List.Description>
        <List.Description>
          Document Number:{this.props.userData.documentNumber}
        </List.Description>
      </List.Item>
    );
  }
}
