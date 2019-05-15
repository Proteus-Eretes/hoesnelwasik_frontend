import uniqBy from "../../helpers/uniqBy";

export default teams =>
    uniqBy(
        teams.reduce((timesList, team) =>  {
            timesList.push(
                ...team.times[0].times
                    .filter(time => time.type === 'Clocking location')
                    .map(time => ({ distance: time.distance, name: time.name }))
            );
            return timesList;
        }, []),
        'distance'
    );
