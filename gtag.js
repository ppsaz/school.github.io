const gtagSet = require('gtagSet');

gtagSet({
  'ads_data_redaction': true,
  'url_passthrough': true,
});

const setDefaultConsentState = require('setDefaultConsentState');

setDefaultConsentState({
  'ad_storage': 'denied',
  'analytics_storage': 'granted',
  'third_party_storage': 'denied',
  'region': ['US-CA'],
  'wait_for_update': 500
});

const updateConsentState = require('updateConsentState');

updateConsentState({
  'ad_storage': 'granted',
  'analytics_storage': 'denied',
  'third_party_storage': 'granted',
});