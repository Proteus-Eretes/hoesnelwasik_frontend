const tabs = ['#velden', '#blocks', '#clubs'];
const urlParts = ['uitslagen', 'loting', 'club'];

export const getActiveTab = (selectedIndex, tabIndex) =>
    Math.max(tabIndex, 0) === Math.max(selectedIndex, 0);

export const findTabIndex = (hash, path) => {
    const tab = tabs.findIndex(tab => tab === hash);
    if (tab === -1) {
        return urlParts.findIndex(urlPart => path.includes(urlPart));
    }
    return tab;
};
