import * as React from 'react';
import {useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import './Signup.css'
import insta from '../Assets/Instagram.JPG'
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link,useHistory} from  'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { database,storage } from '../firebase';

export default function Signup() {
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        card2:{
            height:'5vh',
            marginTop:'2%'
        }
    })
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [file,setFile] = useState(null);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const {signup} = useContext(AuthContext);

    const handleClick = async() => {
        if(file==null){
            setError("Please upload profile image first");
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        try{
            setError('')
            setLoading(true)
            let userObj = await signup(email,password)
            let uid = userObj.user.uid
            const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
            uploadTask.on('state_changed',fn1,fn2,fn3);
            function fn1(snapshot){
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                console.log(`Upload is ${progress} done.`)
            }
            function fn2(error){
                setError(error);
                setTimeout(()=>{
                    setError('')
                },2000);
                setLoading(false)
                return;
            }
            function fn3(){
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                    console.log(url);
                    database.users.doc(uid).set({
                        email:email,
                        userId:uid,
                        fullname:name,
                        profileUrl:url,
                        createdAt:database.getTimeStamp()
                    })
                })
                setLoading(false);
                history.push('/')
            }
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000)
        }
    }

  return (
      <div className="signupWrapper">
          <div className="signupCard">
            <Card variant="outlined">
                <div className="insta-logo">
                    <img src={insta} alt="" />
                </div>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Sign up to see photos and videos from your friends
                    </Typography>
                    {error!='' && <Alert severity="error">{error}</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small"value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon />} component="label">
                    Upload Profile Image
                    <input type="file" accept="image/*" hidden onChange={(e)=>setFile(e.target.files[0])}/>
                    </Button>
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={handleClick}> 
                    Sign up
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        By signing up, you agree to our Terms, Conditions and Cookies policy.
                    </Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                    </Typography>
                </CardContent>
            </Card>
          </div>
      </div>
    
  );
}