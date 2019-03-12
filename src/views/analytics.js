export const sendPageView = () => {
    window.gtag('event', 'page_view', { send_to: 'UA-92572628-2' });
};
