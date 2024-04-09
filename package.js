Package.describe({
  name: 'jessedev:alpinejs',
  version: '0.0.1',
  summary: 'Integrates Alpine.js into Meteor',
  git: 'https://github.com/Jessedev1/alpinejs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.15');
  api.use('ecmascript');
  api.mainModule('alpinejs.min.js');
});
