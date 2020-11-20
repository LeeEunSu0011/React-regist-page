import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

class Register extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

export default Register;