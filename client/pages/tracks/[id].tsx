import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
    const track: ITrack = {
            _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Text 1', listens: 1, audio: '', picture: '', comments: [{_id: '1', username: 'Username 1', text: 'Comment 1'}]
    }

    const router = useRouter();


    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 16}}
                onClick={() => router.push('/tracks')}
            >
                Back
            </Button>
            <Grid container style={{margin: "20px 0"}}>
                <img
                    src={track.picture}
                    alt={track.name}
                    width={200}
                    height={200}
                />
                <div style={{margin: "20px 0"}}>
                    <h1>{track.name}</h1>
                    <h2>{track.artist}</h2>
                    <h3>Listens - {track.listens}</h3>
                </div>
            </Grid>
            <h2>Lyrics</h2>
            <p>{track.text}</p>
            <h3>Comments</h3>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                />
                <TextField
                    label="Comment..."
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>
                    Send
                </Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div key={comment._id}>
                        <div>{comment.username}</div>
                        <div>{comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
