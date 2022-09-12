import React from 'react';
import Table from './components/Table';
import { Header } from './components/common'
import Footer from './components/Footer';

var rootStyle = {
  backgroundColor : 'green',
  color : 'white',
  height : '100%'

}
class Update extends React.Component {
  constructor() {
    super();

    this.state = {
      isUpdate:false,
      id:0,
      firstname: '',
      lastname: '',
      emailid: '',
      mobilenum:'',
      gender:'',
      date:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = this.state.items

    if(this.state.isUpdate) {
      items.map((item) =>{
      if(item.id===this.state.id) 
      {
        item.firstname= this.state.firstname
        item.lastname= this.state.lastname
        item.emailid= this.state.emailid
        item.mobilenum=this.state.mobilenum
        item. gender=this.state.gender
        item.date=this.state.date
      }
      })
    }
    else  {
      items.push({
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        emailid: this.state.emailid,
        mobilenum:this.state.mobilenum,
        gender:this.state.gender,
        date:this.state.date,
      });
  
  }
  this.setState({
    items,
    id:this.state.id+1,
    firstname: '',
    lastname: '',
    emailid:'',
    mobilenum:'',
    gender:'',
    date:'',
    isUpdate:false,
  });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  handleFormEdit = (id) => { 
  let value = this.state.items.find((key)=>id===key.id) 
  this.setState({
    isUpdate:true,
    id:id,
    firstname: value.firstname,
    lastname:value.lastname,
    emailid:value.emailid,
    mobilenum:value.mobilenum,
    gender:value.gender,
    date:value.date,
  });
  console.log(value);
  }


  render() {
    return (
      <div className="App" style={rootStyle}>
         <Header />
           <Table items={ this.state.items }
           handleFormEdit ={ this.handleFormEdit } 
           />
           <Footer />
           
      </div>
    );
  }
}

export default Update;