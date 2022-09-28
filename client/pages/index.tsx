import React from 'react';
import {Button} from "@mui/material";

const Index = () => {
    return (
        <>
            <div className="center">
                <h1>Welcome!</h1>
                <h2>We collect some good music for you.</h2>
            </div>

            <style jsx>
                {`
                    .center {
                      margin-top: 150px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    }
                `}
            </style>
        </>
    );
};

export default Index;
