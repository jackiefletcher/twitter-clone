Twitter.CommentController = Ember.ObjectController.extend ({
  actions: {
    addComment: function() {
      var comments = [];
      var newComment = this.get('comment');
        comments.addObject(newComment);
      }
      // this.set("comment", "");
    }
});
