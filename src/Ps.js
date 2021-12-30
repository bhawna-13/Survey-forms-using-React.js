import React,{Component} from "react";
import Axios from 'axios';
import './Pop.css';


class Ps extends Component
{
    constructor(prop) 
    {
        super(prop);
        this.state = {
          firstname:"",
          lastname:"",
          Age:"",
          members:"",
          childrens:"",
          Income:"",
          Contact:"",
          gender:"",
          emp:"",
          loc:"",
          aadhar:"",
          message:""
        }
      }
      onInputchange=(e)=> {
        this.setState({[e.target.name]:e.target.value});
      }
    
      onSubmitForm(){
        const firstname=this.state.firstname;
        const lastname=this.state.lastname;
        const Age=this.state.Age;
        const members=this.state.members;
        const childrens=this.state.childrens;
        const Income=this.state.Income;
        const Contact=this.state.Contact;
        const gender=this.state.gender;
        const emp=this.state.emp;
        const loc=this.state.loc;
        const aadhar=this.state.aadhar;
        const data={
          firstname,lastname,Age,members,childrens,Income,Contact,gender,emp,loc,aadhar
      }
      
      Axios.get('http://localhost/new/popsurjson.php/',{params:data}).then(popsur=>{console.log(popsur);
      this.setState({message:popsur.data.response})}).catch(err=>{console.log("Failed");})
  }
    
    render()
    {
        return(
           
            <div id="head">
                <h1>GRAM SEVA YOJANA</h1>
                <h3>COVID SURVEY</h3>
                <form className='form'>  
                <label className='firstn'>Enter Your FirstName  </label><input name="firstname" onChange={this.onInputchange.bind(this)} value={this.state.firstname} placeholder="FirstName"type="text" id="tf" /><br/>
                <label className='lastn'>Enter Your LastName  </label><input name="lastname" onChange={this.onInputchange.bind(this)} value={this.state.lastname} placeholder="LastName" type="text" id="tf" /><br/>
                <label className='age'>Enter Your Age  </label><input name="Age" onChange={this.onInputchange.bind(this)} value={this.state.Age}  placeholder="Age" type="text" id="tf" /><br/>
                <label className='mem'>Had COVID </label><input name="members" onChange={this.onInputchange.bind(this)} value={this.state.members}  placeholder="How Many Family Members " type="text" id="tf" /><br/>
                <label className='child'>Are you Vaccinated?  </label><input name="childrens" onChange={this.onInputchange.bind(this)} value={this.state.childrens} placeholder="How Many Childrens in family" type="text" id="tf" /><br/>
                <label className='In'>Vaccine you got </label><input name="Income" onChange={this.onInputchange.bind(this)} value={this.state.Income} placeholder="Income"type="text" id="tf" /><br/>
                <label className='no'>Date of 1st Dose </label><input name="Contact" onChange={this.onInputchange.bind(this)} value={this.state.Contact} placeholder="Contact Number"type="text" id="tf" /><br/>
                <label className='gen'>1st Center Name  </label><input name="gender" onChange={this.onInputchange.bind(this)} value={this.state.gender}  placeholder="Gender"type="text" id="tf" /><br/>
                <label className='emp'>Date of 1st Dose  </label><input name="emp" onChange={this.onInputchange.bind(this)} value={this.state.emp}  placeholder="Emp Status"type="text" id="tf" /><br/>
                <label className='loc'>2nd Center Name  </label><input name="loc" onChange={this.onInputchange.bind(this)} value={this.state.loc} placeholder="Locality"type="text" id="tf" /><br/>
                <label className='aadh'>Aadhar-No.  </label><input name="aadhar" onChange={this.onInputchange.bind(this)} value={this.state.aadhar} placeholder="ID"type="text" id="tf" /><br/>
                <button className='btn' onClick={this.onSubmitForm.bind(this)}>SUBMIT</button>
                {
                  this.state.message
                }
            
                </form>
                
           </div>
        );
    }
}

export default Ps;