import React from 'react';

class Table extends React.Component {

  handleDel=(i)  => {
    let items =  this.props.items;
    items.splice(i,1);
    this.setState({
      items:items
    });
  }
  render() {
    const items = this.props.items;
    return (
      <div id="Table"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}>
        <table>
          <tbody>
            <tr>
              <th>Firstname</th>&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Lastname</th>&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Emailid</th>&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Mobilenumber</th>&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Gender</th>&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Date</th>&nbsp;&nbsp;
            </tr>
            {
          items.map((item, i) =>
          <tr key={i}>
                  <td>{item.firstname}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{item.lastname}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{item.emailid}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{item.mobilenum}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{item.gender}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>{item.date}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={e =>this.handleDel(i)}>
                Deleted
              </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={e =>this.props.handleFormEdit(item.id)}>
                Edit
              </button>
            </tr> )
        }
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;