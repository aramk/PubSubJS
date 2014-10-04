// Meteor Package file.

Package.describe({
  name: 'aramk:pubsub',
  summary: 'Topic-based publish/subscribe library',
  git: "https://github.com/aramk/PubSubJS.git",
  version: "1.5.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.use('jquery', 'client');
  api.export('PubSub', ['client', 'server']);
  api.addFiles([
    'src/pubsub.js'
  ], ['client', 'server']);
});
