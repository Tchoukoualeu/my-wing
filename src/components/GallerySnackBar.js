import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const GallerySnackBar = ({ isError, setIsError }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsError(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isError} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleClose}
        >
          Something went wrong!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default GallerySnackBar;
