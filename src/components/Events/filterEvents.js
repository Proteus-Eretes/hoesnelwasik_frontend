export default (events, isMan, isLight, isMix = false) =>
    events.filter(
        event =>
            event.fieldnameshort.includes('Mix') === isMix &&
            (isMix || +event.isman === +isMan) &&
            +event.islight === +isLight
    );
