export const GA_TRACKING_ID = 'UA-62300852-1' // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (title, location, url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_title: title,
    page_location: location,
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}