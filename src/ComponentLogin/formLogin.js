import React, { Component } from 'react';
import RedData from '../DATA/dataUsers.json';
import Home from '../ComponentLogin/home';
import firebase from '../firebase';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default class FormLogin extends Component {
    state={
        termino:'',
        firebase:firebase,
        user:'',
        password:'',
        RedData:RedData,
        done:false
    }
    consultarApi=()=>{
        const url='https://pixabay.com/api/?key={ KEY }&q=${this.state.termino}';
        console.log(url);
    }
    dataBusqueda=(termino)=>{
        this.setState({
            termino
        },()=>{
            this.consultarApi();
        })
      }
    syncChanges(value,property){
        let state ={};
        state[property]=value;
        this.setState(state);
    }
    submitForm =(e) =>{
        if (this.state.user === 'Guillermo Barajas Arias' && this.state.password === '123456'
            || this.state.user === 'Antonio Brito Estrada' && this.state.password === '123456'
            || this.state.user === 'Cesar Andres Covarrubias' && this.state.password === '123456') {
            //ASI ES COMO CAMBIAS EL ESTADO DE UNA VARIABLE DENTRO DE UN ELEMENTO
                this.setState((state)=>{
                    return state.done = true
                });
            }else{  
                alert('The users or password is the fails');
            }
            e.preventDefault();
        }
 
    render() {
        if (this.state.done === true) {
            return (
                <div className="app container">
                    <div className="jumbotron">
                        <p className="lead text-center">Buscador de Imágenes</p>
                        <Home/>
                    </div>
                </div>
            );
        }
        const responseFacebook =(response)=>{
            console.log(response);
        }
        const responseGoogle =(response)=>{
            console.log(response);
        }
        return (
            <form className="lead text-center">
                <input 
                    onChange={(ev)=>{this.syncChanges(ev.target.value, 'user')}}
                    type="text" 
                    name="user" 
                    placeholder="User Name"
                    value={this.state.user}
                />
                <br/>
                <br/>
                <input 
                    onChange={(ev)=>{this.syncChanges(ev.target.value, 'password')}}
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={this.state.password}
                />
                <br/>
                <br/>
                <input
                    onClick={this.submitForm} 
                    type="submit" 
                    value="Iniciar"
                />
                <br/>
                <br/>
                <FacebookLogin
                    appId=""
                    fields="name,email"
                    callback={responseFacebook}
                />
                <GoogleLogin
                    clientId={this.state.firebase.apiKey}
                    buttonText="Inicia Sesion con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </form>
        );
    }
}

