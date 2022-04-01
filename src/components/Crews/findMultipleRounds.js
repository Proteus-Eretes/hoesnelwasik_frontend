import uniqBy from '../../Helpers/uniqBy';

export default teams => {
    const RoundsList = uniqBy(
        teams.reduce((timesList, team) => {
            if (team.times === undefined || team.times[0].times === undefined || team.times[0].times[0] === undefined) return []; //Lazy OR to not call times.times on undefined
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
    // If only 1 round in regatta
    if (RoundsList.length === 1) return [];
    return RoundsList;
}
