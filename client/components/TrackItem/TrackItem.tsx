import React, {FC} from 'react';
import {ITrack} from "../../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import s from './TrackItem.module.scss';
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();

    return (
        <Card className={s.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {
                    active ?
                        <Pause />
                        :
                        <PlayArrow />
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} alt={track.name}/>
            <Grid container direction="column" className={s.credit}>
                <div>{track.name}</div>
                <div className={s.artist}>{track.artist}</div>
            </Grid>
            {active && <div>00:00 / 03:20</div>}
            <IconButton className={s.delete} onClick={(e) => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;
