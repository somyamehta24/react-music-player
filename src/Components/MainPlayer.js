import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: 'rgb(40,40,40)',
        // color: 'rgb(0,0,0)',
        padding: '2rem'
    },
    play: {
        '& svg': {
            fontSize: 50
        }
    },

});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('play');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Previous" value="previous" icon={<ChevronLeftIcon />} />
            <BottomNavigationAction label="Play" value="play" icon={<PlayCircleOutlineIcon />} className={classes.play} />
            <BottomNavigationAction label="Next" value="next" icon={<ChevronRightIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}
