const validateTime = time => (time ? time.time : 0);

export const getFinishTime = times =>
    validateTime(times.find(time => time.type === 'Calculation' || time.type === 'Finish'));

export const getSplash = times => distance =>
    validateTime(
        times.find(
            time =>
                time.distance === distance && time.type === 'Clocking location'
        )
    );

export const getRoundTime = times => distance => {
    const t = times.find(
        time =>
            time.times[0].distance === distance && time.times[0].type === 'Finish'
    );
    if (t !== undefined) {
        return validateTime(t.times[0]);
    } else {
        return 0;
    }
};


