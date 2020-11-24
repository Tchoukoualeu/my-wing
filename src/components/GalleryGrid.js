import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withWidth, isWidthUp } from '@material-ui/core';
import ImageModal from './ImageModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  pointer: {
    cursor: 'pointer'
  }
}));

const GalleryGrid = ({ images, width }) => {
  const classes = useStyles();

  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [imageDetails, setImageDetails] = useState(false);

  const handleOpen = (imgDetails) => {
    setImageIsOpen(true);
    setImageDetails(imgDetails);
  };

  const handleClose = () => {
    setImageIsOpen(false);
    setImageDetails(false);
  };

  const getGridListCols = () => {
    if (isWidthUp('lg', width)) {
      return 5;
    }

    if (isWidthUp('md', width)) {
      return 4;
    }

    if (isWidthUp('sm', width)) {
      return 3;
    }

    return 2;
  }

  const getImageParts = (image) => {
    let link = image.link,
        title = image.title,
        imageObj = {
          title,
          desc: image.description,
          link,
          type: image.type,
          ups: image.ups,
          downs: image.downs,
          score: image.score
        };

    if (!!image.type && image.type === 'video/mp4') {
      link = image.gifv.slice(0, -1);
    }

    if (typeof image.images !== 'undefined') {
      const curImage = image.images[0];

      link = curImage.link;
      imageObj.link = curImage.link;
      if (curImage.type === 'video/mp4') {
        link = curImage.gifv.slice(0, -1);
      }
      if (!title) {
        title = curImage.title;
        imageObj.title = curImage.title;
      }
      if (!image.description) {
        imageObj.desc = curImage.description;
      }
      if (!image.type) {
        imageObj.type = curImage.type;
      }
      if (!image.ups) {
        imageObj.ups = curImage.ups;
      }
      if (!image.downs) {
        imageObj.downs = curImage.downs;
      }
      if (!image.score) {
        imageObj.score = curImage.score;
      }
    }

    return [link, title, imageObj];
  };

  return (
    <div className={classes.root}>
      <ImageModal
        imageIsOpen={imageIsOpen}
        imageDetails={imageDetails}
        handleClose={handleClose}
      />
      <GridList
        cols={getGridListCols()}
        spacing={(isWidthUp('md', width) ? 20 : 4)}
      >
        {images.map((image, key) => {
          const [link, title, imageObj] = getImageParts(image);

          return (
            <GridListTile className={classes.pointer} key={key} onClick={() => handleOpen(imageObj)}>
              <img src={link} alt={title} />
              <GridListTileBar title={title} />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
};

export default withWidth()(GalleryGrid);