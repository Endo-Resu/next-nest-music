import React, {FC, ReactNode} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Container} from "@mui/material";
import s from './MainLayout.module.css'

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
        </>
    );
};

export default MainLayout;
