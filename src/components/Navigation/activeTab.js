const tabs = ['#velden', '#blocks', '#clubs'];

export const getActiveTab = (selectedIndex, tabIndex) => Math.max(tabIndex, 0) === Math.max(selectedIndex, 0);

export const findTabIndex = hash => tabs.findIndex(tab => tab === hash);