import React from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import {Button, Card, Grid} from "@mui/material";

const Index = () => {
    return (
        <>
            <MainLayout>
                <Grid container justifyContent="center">
                    <Card>
                        <Grid container justifyContent="space-between">
                            <h1>
                                Tracks
                            </h1>
                            <Button>
                                Download
                            </Button>
                        </Grid>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    );
};

export default Index;
