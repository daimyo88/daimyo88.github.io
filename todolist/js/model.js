define(
  'model',
  [],
  function() {
    return  function(data) {
      var self = this;
      this.data = data;

      function itemIndex(item) {
        for ( var i=0; i < self.data.length; i++) {
            if (self.data[i].text == item)
            return i;
        }
      }

      self.addItem  = function(item) {
        if (item.length === 0 || itemIndex(item) || itemIndex(item) == 0) return;
        var newElement = {};
        newElement.text = item;
        self.data.push(newElement);

        return self.data;

      };

      self.removeItem = function(item) {
        self.data.splice(itemIndex(item), 1);

        return self.data
      };

      self.editItem = function(item, newItem) {
        self.data[itemIndex(item)].text = newItem;

        return self.data
      };

      self.doneItem = function(item) {
        var i = itemIndex(item);
        (self.data[i].className == "task-done") ? self.data[i].className= "" : self.data[i].className = "task-done";
        return self.data
      }
    }
  }
);
