Twitter.PostsController = Ember.ArrayController.extend ({
  actions: {
    save: function() {
      var newTweet = this.get('tweet');
      posts.addObject({
        id: posts.length + 1,
        tweet: newTweet
      });
    }
  }
});
