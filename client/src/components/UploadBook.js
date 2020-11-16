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
import React from "react";
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
  const [files, setFiles] = React.useState([]);
  const [BookName, setBookName] = React.useState([]);
  const [Amount, setAmount] = React.useState([]);
  const [Author, setAuthor] = React.useState([]);
  const [Publisher, setPublisher] = React.useState([]);
  const [About, setAbout] = React.useState([]);
  const [Published, setPublished] = React.useState([]);

  const classes = useStyles();
  const Oninputchange = (event) => {};
  const onSubmit = (event) => {
    console.log(files);
    const formData = new FormData();
    formData.append("picture", files, files.name);
    // formData.append("About", About);

    console.log(files.name);
    Axios.post("/books", formData, {
      onUploadProgress: ProgressEvent => {
        console.log("Upload Progress: " + (ProgressEvent.loaded/ProgressEvent.total)*100);
      }
    })
    .then(alert("File Uploaded SuccesFully"))
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
              id="BookName"
              label="Book Name"
              variant="outlined"
              startAdornment={
                <InputAdornment position="start">Rs.</InputAdornment>
              }
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setBookName(e.target.value)}
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
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <TextField
              required
              id="Author"
              label="Author's Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="Publisher"
              label="Publisher"
              defaultValue=""
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="date"
              label="Published on"
              type="date"
              className={classes.textField}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setPublished(e.target.valueAsDate)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="About"
              label="About"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setAbout(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                name="picture"
                hidden
                onChange={(e) => setFiles(e.target.files[0])}
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
