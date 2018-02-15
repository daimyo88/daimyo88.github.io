define(
  'controller',
  ['model','view'],
  function() {
    return  function(model, view) {
      var self = this;
      var item;

      view.elements.addBtn.on("click", addItem);
      view.elements.input.on("keypress", function(e) {
        if (e.which == 13) addItem();
      })

      view.elements.listContainer.on("click", ".item-delete", removeItem);
      view.elements.listContainer.on("click", ".item-edit", editItem);
      view.elements.listContainer.on("click", ".item-save", saveEdit);
      view.elements.listContainer.on("click", ".item-done", doneItem);

      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input
          .val('')
          .focus();
      }

      function removeItem() {
        var item = $(this).attr("data-value");
        model.removeItem(item);
        view.renderList(model.data);
      }

      function editItem() {
        var element = $(this).siblings(".task-text")[0];

        if ($(element).parent().hasClass("task-done")) return;

        item = $(this).attr("data-value");

        $(element).replaceWith("<input class='task-text'></input>");
          $(this).siblings("input").val(item)

          $(this)
            .parent()
            .addClass("task-edit")
            .children("input")
            .focus()
            .siblings(".item-save")
            .show()
            .siblings(".item-done, .item-delete")
            .hide()

           $(".item-edit").hide()

        }

        function saveEdit() {
          var element = $(this).siblings(".task-text")[0];
          var newItem = $(element).val();

          model.editItem(item, newItem);
          view.renderList(model.data);
        }

        function doneItem() {
          item = $(this).attr("data-value");
          model.doneItem(item);
          view.renderList(model.data);
        }
    }
  }
);
