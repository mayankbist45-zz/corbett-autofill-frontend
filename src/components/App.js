import React, { Component } from "react";
import Myform from "./Myform";
import axios from "axios";
import MyList from "./MyList";
import { Menu, Button, Label, Icon } from "semantic-ui-react";
import "./App.css";

const url = `https://corbett-autofill-backend.herokuapp.com/users`;

export default class App extends Component {
  state = { data: [] };
  postData = async (data) => {
    const result = await axios.post(url, data);
    this.setState({ data: result.data });
  };

  deleteEntry = async (id) => {
    const result = await axios.delete(url + "/" + id);
    this.setState({ data: result.data });
  };

  initialize = async () => {
    const result = await axios.get(url);
    console.log(result.data);
    this.setState({ data: result.data });
  };

  componentDidMount() {
    this.initialize();
  }

  checkData = (data) => {
    this.postData(data);
  };
  render() {
    return (
      <div>
        <Menu className="menuStyle">
          <Menu.Item>
            <Button
              color="pink"
              content="CORBETT AUTOFILL POPULATE USERS DATA"
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button as="div" labelPosition="right">
                <Button color="red">
                  <Icon name="users" />
                  USERS ADDED
                </Button>
                <Label as="a" basic color="red" pointing="left">
                  2,048
                </Label>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="ui container">
          <Myform onSubmitForm={this.checkData} />
          <MyList deleteEntry={this.deleteEntry} userData={this.state.data} />
        </div>
      </div>
    );
  }
}
