import React from 'react';

import Box from './layout/Box';

const Layout = () => (
    <section className="hero is-info is-fullheight">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <Box></Box>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Layout;