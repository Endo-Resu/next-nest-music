import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import s from './Player.module.scss';
import {ITrack} from "../../types/track";
import TrackProgress from "../TrackProgress/TrackProgress";

const Player = () => {
    const active = false;

    const track: ITrack = {
        _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Text 1', listens: 1, audio: '', picture: '', comments: [{_id: '1', username: 'Username 1', text: 'Comment 1'}]
    }

    return (
        <div className={s.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active ?
                        <Pause />
                        :
                        <PlayArrow />
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div className={s.artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    );
};

export default Player;
