import React from 'react';
import { post } from 'axios';
/* --------------------- Table --------------------- */
import { Paper, TextField, MenuItem, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Checkbox, FormGroup } from '@material-ui/core';

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
  

class RegisterAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : null,
            name : '',
            country : '',
            belongs : '',
            status : '',
            skill : '',
            tel : '',
            gender : '',
            birthday : '',
            adress : '',
            bill : '',
            note : '',
        }
    }

    addRegister = () => {
        const url = '/api/register';
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('country', this.state.country);
        formData.append('belongs', this.state.belongs);
        formData.append('status', this.state.status);
        formData.append('skill', this.state.skill);
        formData.append('tel', this.state.tel);
        formData.append('gender', this.state.gender);
        formData.append('birthday', this.state.birthday);
        formData.append('adress', this.state.adress);
        formData.append('bill', this.state.bill);
        formData.append('note', this.state.note);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data',
            }
        }
        return post(url, formData, config);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addRegister()
            .then((response) => {
                console.log(response.data);
            })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        const { classes } = this.props;
        const skillList = ['html/css','java','javascript','php','react','jquery','git'];
    
        return(
            <form className={classes.root} onSubmit={this.handleFormSubmit}>
                <Paper className={classes.Paper} align="center">
                    <h2 className={classes.titleborder}>エンジニア個人情報登録ページ</h2>
        
                    {/* ------------------ 名前 (text) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>お名前</FormLabel>
                            <FormGroup  className={classes.inputradiodisplay} >
                                <TextField id="name" name="name" value={this.state.name} onChange={this.handleValueChange} className={ classes.inputnameMargin} label="名前" variant="filled" />
                            </FormGroup>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 国籍 (select) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>国籍</FormLabel>
                            <TextField variant="filled" name="country" value={this.state.country} onChange={this.handleValueChange} label="国籍" select className={classes.inputwidth}>
                                { selectoption.map(c => {return(<MenuItem key={c.value} value={c.value} >{c.label}</MenuItem>)}) }
                            </TextField>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 所属 (radio) ------------------ */}
                    <div className={classes.textmargin} >
                        <FormControl >
                            <FormLabel>所属</FormLabel>
                            <RadioGroup className={classes.inputradiodisplay} name="belongs" value={this.state.belongs} onChange={this.handleValueChange}>
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
                            <RadioGroup className={classes.inputradiodisplay} name="status" value={this.state.status} onChange={this.handleValueChange}>
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
                            <FormGroup className={classes.inputradiodisplay} name="skill" value={this.state.skill} onChange={this.handleValueChange}>
                                { skillList.map(c => {return(<FormControlLabel name="skill[]" key={c} value={c} label={c} control={<Checkbox></Checkbox>} ></FormControlLabel>)}) }
                            </FormGroup>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 電話番号 (text) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                        <FormLabel>電話番号</FormLabel>
                            <TextField id="phoneNumber" name="tel" value={this.state.tel} onChange={this.handleValueChange} className={classes.inputwidth} label="電話番号" variant="filled" />
                        </FormControl>
                    </div>
        
                    {/* ------------------ 性別 (radio) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>所属</FormLabel>
                            <RadioGroup className={classes.inputradiodisplay} name="gender" value={this.state.gender} onChange={this.handleValueChange}>
                                <FormControlLabel value="Male" label="男" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                                <FormControlLabel value="Female" label="女" control={<Radio ></Radio>} labelPlacement="End"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 生年月日 (select) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>生年月日</FormLabel>
                            <TextField name="birthday" value={this.state.birthday} onChange={this.handleValueChange} type="date" id="date"></TextField>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 住所 (select) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>住所</FormLabel>
                            <FormGroup name="adress" value={this.state.adress} onChange={this.handleValueChange}>
                                <FormControlLabel variant="filled" className={classes.inputStandardMargin} control={<TextField></TextField>} label="郵便番号"></FormControlLabel>
                                <FormControlLabel variant="filled" className={classes.inputStandardMargin} control={<TextField></TextField>} label="住所"></FormControlLabel>
                            </FormGroup>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 希望単価 (select) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>希望単価</FormLabel>
                            <TextField variant="filled" name="bill" value={this.state.bill} onChange={this.handleValueChange} label="希望単価" select className={classes.inputwidth}>
                                { billoptions.map(c => {return(<MenuItem  key={c.value} value={c.value} >{c.label}</MenuItem>)}) }
                            </TextField>
                        </FormControl>
                    </div>
        
                    {/* ------------------ 備考 (textarea) ------------------ */}
                    <div className={classes.textmargin}>
                        <FormControl>
                            <FormLabel>備考</FormLabel>
                            <FormGroup name="note" value={this.state.note} className={classes.inputradiodisplay} onChange={this.handleValueChange}>
                                <TextField className={ classes.inputnameMargin} label="備考" variant="filled" />
                            </FormGroup>
                        </FormControl>
                    </div>

                </Paper>
                <button type="submit">追加</button>
            </form>
        )
    }
}

export default withStyles(styles)(RegisterAdd);