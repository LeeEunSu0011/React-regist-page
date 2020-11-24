import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

class Register extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.country}</TableCell>
                <TableCell>{this.props.belongs}</TableCell>
                <TableCell>{this.props.status}</TableCell>
                <TableCell>{this.props.skill}</TableCell>
                <TableCell>{this.props.tel}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.adress}</TableCell>
                <TableCell>{this.props.bill}</TableCell>
                <TableCell>{this.props.note}</TableCell>
            </TableRow>
        )
    }
}

export default Register;