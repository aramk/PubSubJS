// Meteor Package file.

Package.describe({
  name: 'pubsub',
  summary: 'Topic-based publish/subscribe library'
});

Package.on_use(function(api) {
  api.use('jquery', 'client');
  api.export('PubSub', ['client', 'server']);
  api.add_files([
    'src/pubsub.js'
  ], ['client', 'server']);
});
