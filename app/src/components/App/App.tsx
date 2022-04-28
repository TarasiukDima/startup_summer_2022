import React from 'react';
import Header from '../Header';
import Main from '../Main';
import PageContent from '../PageContent';

function App() {
    return (
        <>
            <Header />

            <Main>
                <PageContent />
            </Main>
        </>
    );
}

export default App;
