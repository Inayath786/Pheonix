// analytics.js
export const GA_MEASUREMENT_ID = "G-VQMKVWXQEY";

export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
