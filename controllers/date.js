Twitter.DateController = Ember.ObjectController.extend ({
  actions: {
    currentTime: function() {
      var currentTime = date_value //COME BACK TO THIS
      var hours = currentTime.getHours()
      var minutes = currentTime.getMinutes()

      if (minutes < 10)
        minutes = "0" + minutes

        var suffix = "AM";
        if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
        }
        if (hours == 0) {
          hours = 12;
        }

        document.write("<b>" + hours + ":" + minutes + " " + suffix + "</b>")

    }
  }
});
