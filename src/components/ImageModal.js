import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloseIcon from '@material-ui/icons/Close';
import ScoreIcon from '@material-ui/icons/Score';

const useStyles = makeStyles((theme) => ({
  modal: {
    overflow: 'auto',
    maxWidth: 800,
    margin: 'auto'
  },
  header: {
    textAlign: 'center',
    padding: 0
  },
  root: {
    padding: theme.spacing(1)
  },
  box: {
    '& > *': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }
}));

const ImageModal = ({ imageIsOpen, imageDetails, handleClose }) => {
  const classes = useStyles();
  const mediaType = imageDetails.type === 'video/mp4' ? 'video' : 'img';

  return (
      <Modal
        className={classes.modal}
        open={imageIsOpen}
        onClose={handleClose}
      >
        <Card className={classes.root}>
          <CardHeader
            className={classes.header}
            title={imageDetails.title}
            subheader={imageDetails.desc ? imageDetails.desc : null}
            action={
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent className={classes.root}>
            <Box display="flex" justifyContent="space-evenly">
              {imageDetails.ups ?
                <Box display="flex" className={classes.box}>
                  <ThumbUpIcon />
                  <Typography>
                    {imageDetails.ups}
                  </Typography>
                </Box>
              : null}
              {imageDetails.downs ?
                <Box display="flex" className={classes.box}>
                  <ThumbDownIcon />
                  <Typography>
                    {imageDetails.downs}
                  </Typography>
                </Box>
              : null}
              {imageDetails.score ?
                <Box display="flex" className={classes.box}>
                  <ScoreIcon />
                  <Typography>
                    {imageDetails.score}
                  </Typography>
                </Box>
              : null}
            </Box>
          </CardContent>
          <CardMedia
            component={mediaType}
            image={imageDetails.link}
            title={imageDetails.title}
            controls
          />
        </Card>
      </Modal>
  );
};

export default ImageModal;
