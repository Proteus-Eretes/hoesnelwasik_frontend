export const highLightWinner = item => {
    if (item.times[0].subRank === 1) {
        return 'font-weight-bold';
    }
    return '';
};
