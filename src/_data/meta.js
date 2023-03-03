const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Denton Left',
  siteDescription:
    "Official website of the Denton Left.",
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Denton Left',
  authorEmail: 'DentonLeft@protonmail.com',
  authorWebsite: 'https://www.dentonleft.org',
  meta_data: {
    twitterSite: '@DentonLeft',
    twitterCreator: '@DentonLeft',
    opengraph_default: '/assets/images/opengraph-default.jpg'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    firma: 'Denton Left',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'hola@yoursite.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
