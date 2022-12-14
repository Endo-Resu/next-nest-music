import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {TNextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/action-creators/tracks";

const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.track)

    if (error) {
        return <MainLayout>
            <h1>
                {error}
            </h1>
        </MainLayout>
    }

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

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as TNextThunkDispatch
    await dispatch(await fetchTracks())
})