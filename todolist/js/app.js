requirejs.config ({
    baseUrl: "js",
    paths: {
		  jquery:   'libs/jquery-3.0.0.min',
      template: 'libs/template'
    }
  });

requirejs(
  ['jquery','template', 'model', 'view', 'controller'],

  function (jquery, template, model, view, controller) {
      var firstToDoList = [];
      var model      = new model(firstToDoList);
      var view       = new view(model);
      var controller = new controller(model, view);
  }
);
