Twitter.Router.map(function() {
  this.resource('posts', {path: '/'},
  function() {
    this.resource('date', {path: 'date/:post_id'});
    this.resource('comment', {path: 'comment/:post_id'});
  });
  this.resource('notifications');
  this.resource('messages');
  this.resource('discover');
});
