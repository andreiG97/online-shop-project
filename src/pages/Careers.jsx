import React, { Component } from 'react';
import './Careers.css';
import Layout from '../components/Layout';



export default class Careers extends Component {
    constructor(props){
        super(props);

        this.state={
            name: '',
            email: '',
            cv: ''
        }
    }

    handleName(e){
        let name = e.target.value;
       
        this.setState({
            name: name
        })
    }
    handleCV(e){
        let file = e.target.value;
       
        this.setState({
            cv: file
        })
    }

     handleEmail(e){
        let mail = e.target.value;
       
        this.setState({
            email: mail
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    
        console.log(event);
    }
    render() {
        return (
            <div className="container">
             <Layout>
                
                 <form action="/termsandconditions" method="POST" encType="multipart/form-data" className='form form-group ' onSubmit={(event) => this.handleSubmit(event)}>
                     <h2>Apply here</h2>
                     <label htmlFor="name">Name</label>
                     <input type="text" id='name' className="form-control" required value={this.state.name} onChange={(e) => this.handleName(e)}/>
                     <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id='email' required value={this.state.email} onChange={(e) => this.handleEmail(e)}/>
                    <label htmlFor="file">CV</label>
                    <input type="file" className="form-control" id='file' required  value={this.state.cv} onChange={(e) => this.handleCV(e)}/>
                    <button type="submit" className="bg-primary">Apply</button>
                 </form>
             </Layout>
             </div>
        )
    }
}
