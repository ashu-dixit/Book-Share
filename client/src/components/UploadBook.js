import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React,{useState} from "react";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  price: {
    width: "25ch",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  form: {},
}));

export default function UploadBooks(props) {
  
  const [formData, setFormData] = useState(
    {
       files: '',
       BookName: '',
       Amount: '',
       Author: '',
       Publisher: '',
       About: '',
       Published: ''
    }
  );

  const classes = useStyles();
  // const [displaysocialinput, togglesocialinput] = useState(false);

  const {
    files,
    BookName,
    Amount,
    Author,
    Publisher,
    About,
    Published
} = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
}

const handledate = e => {
  setFormData({ ...formData, Published: e.target.valueAsDate});
}

const handlePhoto = (e) => {
  console.log(e.target.files[0]);
  setFormData({ ...formData, files: e.target.files[0]});
}
  // const Oninputchange = (event) => {};
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(files);
    console.log(formData);
    
    Axios.post("/books",formData, {
      onUploadProgress: ProgressEvent => {
        console.log("Upload Progress: " + (ProgressEvent.loaded/ProgressEvent.total)*100);
      }
    })
    .then(res => {
      alert("File Uploaded SuccesFully")
      console.log(res.body);
    })
    .catch();
  };
  const hello = () => {
    console.log("Hello");
  };
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs>
            <TextField
              required
              name="BookName"
              label="Book Name"
              value={BookName}
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">Rs.</InputAdornment>
              }
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ e => onChange(e)}
            />
          </Grid>
          <Grid item xs>
            <FormControl fullWidth className={classes.price} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">Rs.</InputAdornment>
                }
                labelWidth={60}
                name="Amount"
                value={Amount}
                onChange={ e => onChange(e)}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <TextField
              required
              name="Author"
              label="Author's Name"
              value={Author}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ e => onChange(e)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="Publisher"
              label="Publisher"
              value={Publisher}
              defaultValue=""
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ e => onChange(e)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="date"
              label="Published on"
              value={Published}
              type="date"
              className={classes.textField}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handledate}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="About"
              label="About"
              value={About}
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ e => onChange(e)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              name="About"
              label="About"
              value={About}
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={ e => onChange(e)}
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                name="picture"
                value={files[0]}
                onChange={e => handlePhoto(e)}
              />
            </Button>
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
