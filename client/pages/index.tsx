import React from 'react';
import MainLayout from "../layouts/MainLayout/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
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
            </MainLayout>
        </>
    );
};

export default Index;
