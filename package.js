Package.describe({
  name: 'jessedev:alpinejs',
  version: '3.13.8',
  summary: 'Integrates Alpine.js into Meteor',
  git: 'https://github.com/Jessedev1/alpinejs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.15');
  api.use('ecmascript');
  api.mainModule('alpinejs.min.js');
});
