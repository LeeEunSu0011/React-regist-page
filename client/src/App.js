import React, { Component } from 'react';
import './App.css';
/* --------------------- Component file --------------------- */
import Register from './components/Register';
import RegisterAdd from './components/RegisterAdd'
/* --------------------- Table --------------------- */
import { Table, TableCell, TableHead, TableBody, Paper } from '@material-ui/core';
/* --------------------- App Bar --------------------- */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

/* --------------------- styles --------------------- */
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';

const styles = theme => ({
  menu :{
    marginTop : 15,
    marginBottom : 15,
    display : 'flex',
    justifyContent : 'center'
  },
  Paper : {
    marginLeft : 18,
    marginRight : 18,
    paddingLeft : 'auto',
    paddingRight : 'auto',
    overflowY : 'hidden',
    alignItems : 'center',
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  table : {
    minWidth : 1200,
  },
  tableheadWidth : {
    width : '150px',
  },
  tableLeft : {
    width : '30%',
  },
  tableRight : {
    width : '70%',
  },
  formstyles : {
    align : 'center',
  },
  textmargin : {
    marginTop : 20,
    marginBottom : 20,
  },
  inputwidth : {
    width : '200px',
  },
  inputradiodisplay : {
    display : 'block',
  },
  titleborder : {
    paddingBottom : 10,
    borderBottom : "1px solid rgb(220,220,220)",
  },
  inputnameMargin : {
    marginTop : 5,
    marginBottom : 5,
    marginLeft : 5,
    marginRight : 5,
    width : '200px',
  },
  inputStandardMargin : {
    marginTop : 5,
    marginBottom : 5,
  },
});


class App extends Component {

  /* --------------------- state 初期化 --------------------- */
  state = {
    loginID : "admin",
    registers : "",
    firstName : "",
    birthday : "",
  }

  /* --------------------- localhost:4000　連結 --------------------- */
  componentDidMount = () => {
    this.callApi().then(res => this.setState({registers : res})).catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/registers');
    const body = await response.json();
    return body;
  }

  /* --------------------- render --------------------- */
  render(){
    const { classes } = this.props;
    const cellList = ['id','名前','国籍','所属','ステータス','スキル','電話番号','性別','生年月日','住所','希望単価','備考'];

    /* --------------------- Return --------------------- */
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              エンジニア登録サイト
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
            </div>
          </Toolbar>
        </AppBar>

        {/* ------------------ 入力フォーム ------------------ */}
        <div className={classes.menu}></div>
        <RegisterAdd></RegisterAdd>

        {/* ------------------ お客一覧 ------------------ */}
        <div className={classes.menu}></div>
        {
          this.state.loginID === "admin" ?
          <Paper className={classes.Paper}>
            <Table className={classes.table}>
              <TableHead className={classes.tableheadWidth}>
                { cellList.map(c => { return ( <TableCell >{c}</TableCell>);})}
              </TableHead>
              <TableBody>
                {
                  this.state.registers ? this.state.registers.map(c => {
                    return (<Register key={c.id} id={c.id} name={c.name} country={c.country} belongs={c.belongs} status={c.status} skill={c.skill} tel={c.tel} gender={c.gender} birthday={c.birthday} adress={c.adress} bill={c.bill} note={c.note} />)
                  }) : ""
                }
              </TableBody>
            </Table>
          </Paper>
         : ""
        }
      </div>
    )
  }
}

export default withStyles(styles)(App);
