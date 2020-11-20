import React, { Component } from 'react';
import './App.css';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import Register from './components/Register';

class App extends Component {
  state = {
    registers : ""
  }

  componentDidMount = () => {
    this.callApi().then(res => this.setState({registers : res})).catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/registers');
    const body = await response.json();
    return body;
  }

  render(){
    const cellList = ['名前','誕生日','性別','職業']
    return(
      <div>
        <Table>
          <TableHead>
            {
              cellList.map(c => {
                return (
                  <TableCell>{c}</TableCell>
                );
              })
            }
          </TableHead>
          <TableBody>
            {
              this.state.registers ? this.state.registers.map(c => {
                return (
                    <Register key={c.name} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                )
              }) : ""
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default App;
