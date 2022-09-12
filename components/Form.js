import React from 'react';

class Form extends React.Component { 
  render() {
    return (
      <div id="Form">
        <u><h3>CRUD OPERATION</h3></u>
        <form onSubmit={this.props.handleFormSubmit}>
        <span><label htmlFor="firstname">
          Firstname&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="firstname" placeholder='Firstname' value={this.props.newFirstname} required
            type="text" name="firstname"
            onChange={this.props.handleInputChange} />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="Lastname">
          Lastname&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="text" placeholder='Lastname' value={this.props.newLastname} required
            type="text" name="lastname"
            onChange={this.props.handleInputChange} /><br/><br/>
          </label></span>
          <span>  <label for="emailid">
          Emailid&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="emailid" placeholder='Emailid' value={this.props.newemailid} required
            type="email" name="emailid"
            onChange={this.props.handleInputChange} />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="emailid">
          Mobilenumber&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="mobilenum" placeholder='Mobilenumber' value={this.props.newmobilenumber} required
            type="number" name="mobilenum"
            onChange={this.props.handleInputChange} /><br/><br/>
          </label> </span>
          
          <span><label for="gender">
          Gender&nbsp;&nbsp;&nbsp;&nbsp;
          <select  value={this.props.newgender} onChange={this.props.handleInputChange} name="gender"> 
            <option>select option</option> 
            <option>Male</option>
            <option>Female</option>
          </select>
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            Date&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="date" id="date" name="date"  value={this.props.newdate} required  onChange={this.props.handleInputChange}  />
          </label></span><br/><br/>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;