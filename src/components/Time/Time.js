const validateTime = time => (time ? time.time : 0);

export const getFinishTime = times =>
    validateTime(times.find(time => time.type === 'Finish'));

export const getSplash = times => distance =>
    validateTime(
        times.find(
            time =>
                time.distance === distance && time.type === 'Clocking location'
        )
    );
