import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Text 1', listens: 1, audio: '', picture: '', comments: [{_id: '1', username: 'Username 1', text: 'Comment 1'}]
        },
        {
            _id: '2', name: 'Track 2', artist: 'Artist 2', text: 'Text 2', listens: 2, audio: '', picture: '', comments: [{_id: '2', username: 'Username 2', text: 'Comment 2'}]
        },
        {
            _id: '3', name: 'Track 3', artist: 'Artist 3', text: 'Text 3', listens: 3, audio: '', picture: '', comments: [{_id: '3', username: 'Username 3', text: 'Comment 3'}]
        },
    ]

    return (
        <>
            <MainLayout>
                <Grid container justifyContent="center">
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent="space-between">
                                <h1>
                                    Tracks
                                </h1>
                                <Button onClick={() => router.push('/tracks/create')}>
                                    Download
                                </Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks} />
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
};

export default Index;
