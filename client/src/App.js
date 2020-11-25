import React, { Component } from 'react';
import './App.css';
/* --------------------- Component file --------------------- */
import Register from './components/Register';
/* --------------------- Table --------------------- */
import { Table, TableRow, TableCell, TableHead, TableBody, Paper, TextField, MenuItem, FormControl, FormLabel, FormControlLabel, InputLabel, OutlinedInput, Radio, RadioGroup, Checkbox, FormGroup } from '@material-ui/core';
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

const selectoption = [
  {
    label : "日本",
    value : "japan",
  },
  {
    label : "中国",
    value : "china",
  },
  {
    label : "韓国",
    value : "korea",
  },
  {
    label : "その他",
    value : "another",
  },
]

const billoptions = [
  {
    value : "10万円~20万円",
    label : "10万円~20万円",
  },
  {
    value : "20万円~30万円",
    label : "20万円~30万円",
  },
  {
    value : "30万円~40万円",
    label : "30万円~40万円",
  },
  {
    value : "40万円~50万円",
    label : "40万円~50万円",
  },
  {
    value : "50万円~60万円",
    label : "50万円~60万円",
  },
  {
    value : "60万円~70万円",
    label : "60万円~70万円",
  },
  {
    value : "70万円~80万円",
    label : "70万円~80万円",
  },
  {
    value : "80万円~90万円",
    label : "80万円~90万円",
  },
  {
    value : "90万円~100万円",
    label : "90万円~100万円",
  },
  {
    value : "100万円以上",
    label : "100万円以上",
  },
]

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
    const skillList = ['html/css','java','javascript','php','react','jquery','git'];

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
        <form className={classes.root}>
          <Paper className={classes.Paper} align="center">
            <h2 className={classes.titleborder}>エンジニア個人情報登録ページ</h2>

            {/* ------------------ 名前 (text) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>お名前</FormLabel>
                <FormGroup className={classes.inputradiodisplay}>
                  <TextField id="name" className={ classes.inputnameMargin} label="性(漢字)" value={this.state.name} variant="filled" />
                  <TextField id="name" className={ classes.inputnameMargin} label="名前(漢字)" value={this.state.name} variant="filled" /><br></br>
                  <TextField id="name" className={ classes.inputnameMargin} label="性(カタカナ)" value={this.state.name} variant="filled" />
                  <TextField id="name" className={ classes.inputnameMargin} label="名前(カタカナ)" value={this.state.name} variant="filled" />
                </FormGroup>
              </FormControl>
            </div>

            {/* ------------------ 国籍 (select) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>国籍</FormLabel>
                <TextField variant="filled" label="国籍" select className={classes.inputwidth}>
                  { selectoption.map(c => {return(<MenuItem key={c.value} value={c.value} >{c.label}</MenuItem>)}) }
                </TextField>
              </FormControl>
            </div>

            {/* ------------------ 所属 (radio) ------------------ */}
            <div className={classes.textmargin} >
              <FormControl >
                <FormLabel>所属</FormLabel>
                <RadioGroup className={classes.inputradiodisplay}>
                  <FormControlLabel value="move" label="稼働中" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                  <FormControlLabel value="wait" label="待機中" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                  <FormControlLabel value="another" label="その他" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </div>

            {/* ------------------ ステータス(radio) ------------------ */}
            <div className={classes.textmargin}>
            <FormControl>
                <FormLabel>ステータス</FormLabel>
                <RadioGroup className={classes.inputradiodisplay}>
                  <FormControlLabel value="ContractEmployee" label="契約社員" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                  <FormControlLabel value="Full-timeEmployee" label="正社員" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                  <FormControlLabel value="SlefEmployee" label="個人事業主" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                  <FormControlLabel value="LivingAbroad" label="海外住み" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </div>

            {/* ------------------ スキル (checkbox) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>スキル</FormLabel>
                <FormGroup className={classes.inputradiodisplay}>
                  { skillList.map(c => {return(<FormControlLabel labelPlacement="end" label={c} control={<Checkbox></Checkbox>} value={c}></FormControlLabel>)})}
                </FormGroup>
              </FormControl>
            </div>

            {/* ------------------ 電話番号 (text) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <TextField id="phoneNumber" className={classes.inputwidth} label="電話番号" value={this.state.name} variant="filled" />
              </FormControl>
            </div>

            {/* ------------------ 性別 (radio) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>所属</FormLabel>
                <RadioGroup className={classes.inputradiodisplay}>
                  <FormControlLabel value="Male" label="男" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                  <FormControlLabel value="Female" label="女" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                </RadioGroup>
              </FormControl>
            </div>

            {/* ------------------ 生年月日 (select) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>生年月日</FormLabel>
                <TextField type="date" id="date"></TextField>
              </FormControl>
            </div>

            {/* ------------------ 住所 (select) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>住所</FormLabel>
                <FormGroup >
                  <TextField className={classes.inputStandardMargin} variant="filled" label="郵便番号"></TextField>
                  <TextField className={classes.inputStandardMargin} variant="filled" label="住所"></TextField>
                </FormGroup>
              </FormControl>
            </div>

            {/* ------------------ 希望単価 (select) ------------------ */}
            <div className={classes.textmargin}>
              <FormControl>
                <FormLabel>希望単価</FormLabel>
                <TextField variant="filled" label="希望単価" select className={classes.inputwidth}>
                  { billoptions.map(c => {return(<MenuItem  key={c.value} value={c.value} >{c.label}</MenuItem>)}) }
                </TextField>
              </FormControl>
            </div>

            {/* ------------------ 備考 (textarea) ------------------ */}
            <div className={classes.textmargin}>
              
            </div>

            {/* ------------------ 入力フォーム ------------------ */}
            <div className={classes.textmargin}>
              <FormControl variant="outlined" className={classes.inputwidth}>
                <InputLabel>履歴</InputLabel>
                <OutlinedInput startAdornment="Amount"></OutlinedInput>
              </FormControl>
            </div>
          </Paper>
        </form>

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
