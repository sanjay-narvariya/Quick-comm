
import { useState, useEffect } from 'react';
import { serverURL, getData, postData } from "../../../services/FetchNodeAdminServices";
import { Divider, Paper } from '@mui/material';
import { Grid, TextField, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Height } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';


export default function SignIn() {

  const prefix = "+91-";
  var string = '';
  const stringFormation = (prefix, string) => {
    return prefix.concat(string);;
  };



  const [phoneNumber, setPhoneNumber] = useState(stringFormation(prefix, string));
  const [state, setState] = useState('');
  const [overState, setOverState] = useState('#b5b5b5')

  const [open, setOpen] = useState(false)


  function changeTxt(event) {
    setPhoneNumber(event.target.value)
    setOpen(true)
  }

  const clear = () => {
    //document.getElementById("").value = "";
    setPhoneNumber("");
    setOpen(false);
  }



  function handleOnChange(value) {
    this.setState({
      phone: value
    });
  }
  document.getElementById('root')


  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper elevation={3} style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', height: 600, width: 450, marginTop: 40, borderRadius: 24 }}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: 'flex', alignSelf: 'flex-start' }}>
            <CloseIcon style={{ marginTop: 20, marginLeft: 20, fontSize: 35 }} />
          </div>
        </Grid>
        <Grid item xs={6} style={{ marginLeft: 25, }}>
          <span style={{ display: 'flex', alignSelf: 'flex-start', marginTop: 20, marginBottom: 10, fontWeight: 900, textTransform: 'none', fontSize: '1.8rem', letterSpacing: -.72, lineHeight: 1.166666666 }}>
            Sign in
          </span>
          <span style={{ padding: 1, marginLeft: '0rem', fontWeight: 500, textTransform: 'none', fontSize: '1.2rem', letterSpacing: -.72, lineHeight: 1.166666666, color: 'rgba(0, 0, 0, .65)' }}>
            Verify your mobile number to access your
            <span style={{ marginLeft: 5, marginRight: 5, width: 20, fontWeight: 800, textTransform: 'none', fontSize: '1rem', letterSpacing: -.72, lineHeight: 1.166666666, color: '#141414' }}>QuickComm Mart</span>
            account
          </span>
        </Grid>



        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', paddingTop: 25, marginLeft: 15 }}>
          <img src='/jiologo.png' style={{ width: 50, height: 50 }} />
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 22, marginTop: 50 }}>
            <span style={{ display: 'flex', alignItems: 'center', width: '100%', height: '1.5em', fontWeight: 600, fontSize: '1.2rem', letterSpacing: -.72, lineHeight: 1.166666666, color: '#141414' }} >


              <FormControl sx={{
                width: 380,
                "& .MuiInput-root": {
                  color: "rgba(0, 0, 0, .65)",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Bottom border
                  "&:before": {
                    borderColor: "rgba(0, 0, 0, .65)",
                    borderWidth: "3px",
                  },
                  // Border on focus
                  "&:after": {
                    borderColor: "rgba(0, 0, 0, .65)",
                    borderWidth: "3px",
                  },
                },
                // Label
                "& .MuiInputLabel-standard": {
                  color: "rgba(0, 0, 0, .65)",
                  fontWeight: "bold",
                },
              }}

                variant="standard">
                <InputLabel htmlFor="standard-start-adornment">Phone Number</InputLabel>
                <Input
                  id="standard-start-adornment"
                  onChange={changeTxt}
                  value={phoneNumber}
                  endAdornment={
                    <InputAdornment position="end">
                      {open ? <CancelIcon onClick={clear} style={{ cursor: 'pointer', fontSize: 25, padding: 12, zIndex: 2, }} /> : <></>}
                    </InputAdornment>
                  }
                />
              </FormControl>
            </span>
          </div>


          { /* <div style={{ marginTop: 35, marginLeft: 20 }}>
            <MuiPhoneNumber defaultCountry={'us'} onChange={(e) => handleOnChange(e.target.value)} label="Phone Number"
              variant="standard"
              sx={{
                width: 380,
                "& .MuiInput-root": {
                  color: "rgba(0, 0, 0, .65)",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Bottom border
                  "&:before": {
                    borderColor: "rgba(0, 0, 0, .65)",
                    borderWidth: "3px",
                  },
                  // Border on focus
                  "&:after": {
                    borderColor: "rgba(0, 0, 0, .65)",
                    borderWidth: "3px",
                  },
                },
                // Label
                "& .MuiInputLabel-standard": {
                  color: "rgba(0, 0, 0, .65)",
                  fontWeight: "bold",
                },
              }}

              fullWidth />,

          </div>*/}
        </Grid>





        <Grid item xs={12} sx={{ marginTop: 10, marginLeft: 2 }}>
          <div onMouseLeave={() => setOverState('#b5b5b5')} onMouseOver={() => setOverState('#1f3d4c')} style={{ cursor: 'pointer', marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '95%', height: 50, border: `0.7px solid ${overState}`, background: '#0f3cc9', color: '#fff', fontSize: 18, fontWeight: 'bold', borderRadius: 30 }}>
            Continue
          </div>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2, marginLeft: 4.6, }}>
          <span style={{ padding: 1, marginLeft: '0rem', fontWeight: 500, textTransform: 'none', fontSize: '0.9rem', letterSpacing: -.06, lineHeight: 1.33333, color: 'rgba(0, 0, 0, .65)' }}>
            By continuing, you agree to our
            &nbsp;
            <span style={{ marginLeft: 5, marginRight: 5, width: 20, fontWeight: 500, textTransform: 'none', fontSize: '0.9rem', letterSpacing: -.06, lineHeight: 1.33333, color: '#0a2885' }}>
              Terms and Conditions of Use
            </span>,<span style={{ marginLeft: 5, marginRight: 5, width: 20, fontWeight: 500, textTransform: 'none', fontSize: '0.9rem', letterSpacing: -.06, lineHeight: 1.33333, color: '#0a2885' }}>
              Privacy Policy
            </span>and
            <span style={{ marginLeft: 5, marginRight: 5, width: 20, fontWeight: 500, textTransform: 'none', fontSize: '0.9rem', letterSpacing: -.06, lineHeight: 1.33333, color: '#0a2885' }}>
              Retail Account Privacy Policy
            </span>
          </span>
        </Grid>
      </Grid>
    </Paper>
  </div>)
}