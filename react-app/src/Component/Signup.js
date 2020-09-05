import React, { Component } from 'react'
import "./Signup.css"

class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            Firstname: "",
            Lastname: "",
            Password: "",
            Gender: ""
        }
    }

    firsthandler = (event) => {
        this.setState({
            Firstname: event.target.value
        })
    }

    lasthandler = (event) => {
        this.setState({
            Lastname: event.target.value
        })
    }

    passhandler = (event) => {
        this.setState({
            Password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            Gender: event.target.value
        })
    }

    submithandler = (event) => {
        alert (this.state.Firstname + " " + this.state.Lastname + " " +  "Submission Successfully!!")
        console.log(this.state);
        event.preventDefault()
    }
    


    render() {
        return (
            <div className="form">
                <h1>Sign Up</h1>
                <form className="formcard" onSubmit={this.submithandler}>
                    <label className="lable" >FirstName: </label> 
                    <input className="input" type="text" value={this.state.Firstname } onChange={this.firsthandler} placeholder="    FirstName" required></input>
                    <br/><br/>
                    <label className="lable" >LastName: </label>
                    <input className="input" type="text" value={this.state.Lastname} onChange={this.lasthandler} placeholder="    LastName" required></input>
                    <br/><br/>
                    <label className="lable" >Password: </label>
                    <input className="input" type="password" value={this.state.Password} onChange={this.passhandler} placeholder="    Password" required></input>
                    <br/><br/>
                    <label className="lable" >Gender: </label>
                    <select className="input1" onChange={this.genderhandler} defaultValue="Select gender">
                        <option defaultValue>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br/><br/>
                    <button className="submit" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup
