import React from 'react';
import data from '../data/data.json';
import Release from './Release';

class SectionReleases1 extends React.Component {
    render() {
        // Tomar los primeros cuatro elementos de data
        const firstFourReleases = data.slice(0, 4);

        return (
            <div>
                {firstFourReleases.map(release => (
                    <Release key={release.id} release={release} />
                ))}
            </div>
        );
    }
}

export default SectionReleases1;

