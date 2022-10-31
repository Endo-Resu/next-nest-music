import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "../../components/FileUpload/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const previous = () => {
        setActiveStep(prev => prev - 1)
    }

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={"Track name"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Track author"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Track lyrics"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload
                        setFile={setPicture}
                        accept="image/*"
                    >
                        <Button>
                            Download image
                        </Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload
                        setFile={setAudio}
                        accept="audio/*"
                    >
                        <Button>
                            Download track
                        </Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={previous}>
                    Previous
                </Button>
                <Button onClick={next}>
                    Next
                </Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
