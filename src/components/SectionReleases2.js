import React from 'react';
import data from '../data/data.json';
import Release from './Release';

class SectionReleases2 extends React.Component {
    render() {
        // Tomar el quinto elemento de data
        const fifthRelease = data.find(release => release.id === 5);

        return (
            <div>
                {fifthRelease && <Release release={fifthRelease} />}
            </div>
        );
    }
}

export default SectionReleases2;
