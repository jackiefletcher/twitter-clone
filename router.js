Twitter.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('notifications');
  this.resource('messages');
  this.resource('discover');
});
