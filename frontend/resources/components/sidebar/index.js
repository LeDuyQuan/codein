import React from 'react';
import Search from './search';
import AboutMe from './about-me';
import './styles.scss';

const Sidebar = () => {
    return (
        <React.Fragment>
            <Search />
            <AboutMe />
        </React.Fragment>
    )
}

export default Sidebar;