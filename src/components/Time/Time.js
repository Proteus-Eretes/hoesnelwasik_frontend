export const getFinishTime = times => {
    const time = times.find(time => time.type === 'Finish');
    if (time) {
        return time.time;
    }
    return 0;
};

export const getSplash = times => distance => times.find(time => time.distance === distance);
