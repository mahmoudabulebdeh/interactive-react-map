import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { min, max } from './mapConfig';

const useStyles = makeStyles(theme => ({
  root: {
    width: '97%',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function ControlBar(props) {
  const { count, isLoading, errMess, fetchTaxies } = props;
  const classes = useStyles();

  if (isLoading) {
    return <Typography gutterBottom>Loading . . . </Typography>;
  } else if (errMess) {
    return <Typography gutterBottom>{props.errMess} </Typography>;
  } else {
    return (
      <div className={classes.root}>
        <Typography id="taxi-slider" gutterBottom>
          Number of Taxi's to display {count}
        </Typography>
        <Slider
          className={classes.margin}
          marks={true}
          defaultValue={count}
          aria-labelledby="taxi-slider"
          valueLabelDisplay="auto"
          step={1}
          min={parseInt(min)}
          max={parseInt(max)}
          onChangeCommitted={(event, value) => {
            fetchTaxies(value);
          }}
        />
      </div>
    );
  }
}
