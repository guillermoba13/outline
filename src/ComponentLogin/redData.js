import React, { Component } from 'react'
import dataLoginUsers from '../DATA/dataUsers.json';

export default class RedData extends Component {
    state={
     dataLoginUsers: dataLoginUsers       
    }
    render() {
        return (
            this.state.dataLoginUsers.map(post =>{
                return(
                    console.log(dataLoginUsers),
                    this.state.dataLoginUsers.id,
                    this.state.dataLoginUsers.user,
                    this.state.dataLoginUsers.password
                );
            })
        )
    }
}
