import React, { Component } from "react";
import { List } from "semantic-ui-react";
import ListItems from "./ListItems";

export default class MyList extends Component {
  render() {
    const listItems = this.props.userData.map((user) => {
      return (
        <ListItems
          key={user._id}
          userData={user}
          deleteEntry={this.props.deleteEntry}
        />
      );
    });
    return (
      <List divided verticalAlign="middle">
        {listItems}
      </List>
    );
  }
}
