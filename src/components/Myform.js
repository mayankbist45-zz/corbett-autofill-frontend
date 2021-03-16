import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];
const idOptions = [
  { key: "1", text: "Aadhar", value: 1 },
  // { key: "", text: "", value: "" },
  // { key: "", text: "", value: "" },
  // { key: "", text: "", value: "" },
  // { key: "", text: "", value: "" },
  // { key: "", text: "", value: "" },
];
class Myform extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    country: "India",
    gender: "",
    phone: "",
    documentType: "",
    documentNumber: "",
    name: "",
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      country: "India",
      gender: "",
      phone: "",
      documentType: "",
      documentNumber: "",
      name: "",
    });
  };

  submitForm = () => {
    this.props.onSubmitForm(this.state);
  };

  render() {
    return (
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>FIRST NAME</label>
              <input
                placeholder="FIRST NAME"
                value={this.state.firstName}
                onChange={(e) => {
                  this.setState({
                    firstName: e.target.value,
                    name: e.target.value + " " + this.state.lastName,
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>LAST NAME</label>
              <input
                placeholder="LAST NAME"
                value={this.state.lastName}
                onChange={(e) => {
                  this.setState({
                    lastName: e.target.value,
                    name: this.state.firstName + " " + e.target.value,
                  });
                }}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="GENDER"
              options={options}
              placeholder="GENDER"
              value={this.state.gender}
              onChange={(e, { value }) => {
                this.setState({ gender: value });
              }}
            />
            <Form.Field>
              <label>AGE</label>
              <input
                type="number"
                placeholder="AGE"
                value={this.state.age}
                onChange={(e) => {
                  this.setState({ age: e.target.value });
                }}
              />
            </Form.Field>

            <Form.Field>
              <label>MOBILE NUMBER</label>
              <input
                type="number"
                placeholder="9876543210"
                value={this.state.phone}
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>COUNTRY</label>
              <input
                value={this.state.country}
                onChange={(e) => {
                  this.setState({ country: e.target.value });
                }}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="ID TYPE"
              options={idOptions}
              placeholder="ID TYPE"
              value={this.state.documentType}
              onChange={(e, { value }) => {
                this.setState({ documentType: value });
              }}
            />
            <Form.Field>
              <label>ID NUMBER</label>
              <input
                type="number"
                placeholder="ID NUMBER"
                value={this.state.documentNumber}
                onChange={(e) => {
                  this.setState({ documentNumber: e.target.value });
                }}
              />
            </Form.Field>
          </Form.Group>
          <Button color="black" type="submit" onClick={this.submitForm}>
            Add User
          </Button>
          <Button color="violet" onClick={this.resetForm}>
            Reset Form
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default Myform;
