import uniqBy from '../../Helpers/uniqBy';

export default teams =>
    uniqBy(
        teams.reduce((timesList, team) => {
            timesList.push(
                ...team.times
                    .filter(times => times.times[0].type === 'Finish')
                    .map(times => ({
                        distance: times.times[0].distance,
                        name: times.times[0].name
                    }))
            );
            return timesList;
        }, []),
        'distance'
    );
