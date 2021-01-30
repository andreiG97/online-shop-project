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
                
                 <form className='career-form h-50 w-50 col-lg-6 offset-lg-3' onSubmit={(event) => this.handleSubmit(event)}>
                     <h2>Apply here</h2>
                     <label htmlFor="name">Name</label>
                     <input type="text" id='name' required value={this.state.name} onChange={(e) => this.handleName(e)}/>
                     <label htmlFor="email">Email</label>
                    <input type="email" id='email' required value={this.state.email} onChange={(e) => this.handleEmail(e)}/>
                    <label htmlFor="file">CV</label>
                    <input type="file" id='file' required  value={this.state.cv} onChange={(e) => this.handleCV(e)}/>
                    <button type="submit" className="bg-primary">Apply</button>
                 </form>
             </Layout>
             </div>
        )
    }
}
