import React, {FC, ReactNode} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Container} from "@mui/material";
import s from './MainLayout.module.css'
import Player from "../../components/Player/Player";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container>
                <div className={s.content}>
                    {children}
                </div>
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;
