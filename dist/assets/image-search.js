"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('image-search/app', ['exports', 'ember', 'image-search/resolver', 'ember-load-initializers', 'image-search/config/environment'], function (exports, _ember, _imageSearchResolver, _emberLoadInitializers, _imageSearchConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _imageSearchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _imageSearchConfigEnvironment['default'].podModulePrefix,
    Resolver: _imageSearchResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _imageSearchConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('image-search/blueprints/ember-material-lite', ['exports', 'ember-material-lite/blueprints/ember-material-lite'], function (exports, _emberMaterialLiteBlueprintsEmberMaterialLite) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteBlueprintsEmberMaterialLite['default'];
    }
  });
});
define('image-search/components/image-search-bar', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			hitApi: function hitApi(text) {
				var starredIds = JSON.parse(window.localStorage.getItem('starredIds')) ? JSON.parse(window.localStorage.getItem('starredIds')) : [];
				this.set('showLoader', true);
				this.set('welcome', false);
				var self = this;
				var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&' + 'api_key=ef4dbc42acb7e073f5cfdd1020fafb9b' + '&text=' + text + '&extras=url_n%2C&per_page=50&format=json&nojsoncallback=1' + '&secret=7700d2eee8518fb7';
				console.log(text);
				_ember['default'].$.ajax({
					type: 'GET',
					url: url
				}).then(function (data) {
					self.set('showLoader', false);
					data.photos.photo.map(function (obj) {
						obj.like = false;
						if (starredIds.length > 0 && starredIds.indexOf(obj.id) > -1) obj.like = true;
					});
					self.sendAction('setData', data);
				}, function (err) {
					console.log(err);
				});
			}
		}
	});
});
define('image-search/components/mdl-button', ['exports', 'ember-material-lite/components/mdl-button'], function (exports, _emberMaterialLiteComponentsMdlButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlButton['default'];
    }
  });
});
define('image-search/components/mdl-card-actions', ['exports', 'ember-material-lite/components/mdl-card-actions'], function (exports, _emberMaterialLiteComponentsMdlCardActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCardActions['default'];
    }
  });
});
define('image-search/components/mdl-card-buttons', ['exports', 'ember-material-lite/components/mdl-card-buttons'], function (exports, _emberMaterialLiteComponentsMdlCardButtons) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCardButtons['default'];
    }
  });
});
define('image-search/components/mdl-card', ['exports', 'ember-material-lite/components/mdl-card'], function (exports, _emberMaterialLiteComponentsMdlCard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCard['default'];
    }
  });
});
define('image-search/components/mdl-checkbox', ['exports', 'ember-material-lite/components/mdl-checkbox'], function (exports, _emberMaterialLiteComponentsMdlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCheckbox['default'];
    }
  });
});
define('image-search/components/mdl-footer-dropdown-section', ['exports', 'ember-material-lite/components/mdl-footer-dropdown-section'], function (exports, _emberMaterialLiteComponentsMdlFooterDropdownSection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlFooterDropdownSection['default'];
    }
  });
});
define('image-search/components/mdl-footer-linklist', ['exports', 'ember-material-lite/components/mdl-footer-linklist'], function (exports, _emberMaterialLiteComponentsMdlFooterLinklist) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlFooterLinklist['default'];
    }
  });
});
define('image-search/components/mdl-footer-section', ['exports', 'ember-material-lite/components/mdl-footer-section'], function (exports, _emberMaterialLiteComponentsMdlFooterSection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlFooterSection['default'];
    }
  });
});
define('image-search/components/mdl-icon-toggle', ['exports', 'ember-material-lite/components/mdl-icon-toggle'], function (exports, _emberMaterialLiteComponentsMdlIconToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlIconToggle['default'];
    }
  });
});
define('image-search/components/mdl-icon', ['exports', 'ember-material-lite/components/mdl-icon'], function (exports, _emberMaterialLiteComponentsMdlIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlIcon['default'];
    }
  });
});
define('image-search/components/mdl-mega-footer', ['exports', 'ember-material-lite/components/mdl-mega-footer'], function (exports, _emberMaterialLiteComponentsMdlMegaFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMegaFooter['default'];
    }
  });
});
define('image-search/components/mdl-menu-item', ['exports', 'ember-material-lite/components/mdl-menu-item'], function (exports, _emberMaterialLiteComponentsMdlMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMenuItem['default'];
    }
  });
});
define('image-search/components/mdl-menu', ['exports', 'ember-material-lite/components/mdl-menu'], function (exports, _emberMaterialLiteComponentsMdlMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMenu['default'];
    }
  });
});
define('image-search/components/mdl-mini-footer', ['exports', 'ember-material-lite/components/mdl-mini-footer'], function (exports, _emberMaterialLiteComponentsMdlMiniFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMiniFooter['default'];
    }
  });
});
define('image-search/components/mdl-nav-item', ['exports', 'ember-material-lite/components/mdl-nav-item'], function (exports, _emberMaterialLiteComponentsMdlNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlNavItem['default'];
    }
  });
});
define('image-search/components/mdl-nav', ['exports', 'ember-material-lite/components/mdl-nav'], function (exports, _emberMaterialLiteComponentsMdlNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlNav['default'];
    }
  });
});
define('image-search/components/mdl-progress', ['exports', 'ember-material-lite/components/mdl-progress'], function (exports, _emberMaterialLiteComponentsMdlProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlProgress['default'];
    }
  });
});
define('image-search/components/mdl-radio', ['exports', 'ember-material-lite/components/mdl-radio'], function (exports, _emberMaterialLiteComponentsMdlRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlRadio['default'];
    }
  });
});
define('image-search/components/mdl-slider', ['exports', 'ember-material-lite/components/mdl-slider'], function (exports, _emberMaterialLiteComponentsMdlSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlSlider['default'];
    }
  });
});
define('image-search/components/mdl-spinner', ['exports', 'ember-material-lite/components/mdl-spinner'], function (exports, _emberMaterialLiteComponentsMdlSpinner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlSpinner['default'];
    }
  });
});
define('image-search/components/mdl-switch', ['exports', 'ember-material-lite/components/mdl-switch'], function (exports, _emberMaterialLiteComponentsMdlSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlSwitch['default'];
    }
  });
});
define('image-search/components/mdl-tab', ['exports', 'ember-material-lite/components/mdl-tab'], function (exports, _emberMaterialLiteComponentsMdlTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTab['default'];
    }
  });
});
define('image-search/components/mdl-table-col', ['exports', 'ember-material-lite/components/mdl-table-col'], function (exports, _emberMaterialLiteComponentsMdlTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTableCol['default'];
    }
  });
});
define('image-search/components/mdl-table', ['exports', 'ember-material-lite/components/mdl-table'], function (exports, _emberMaterialLiteComponentsMdlTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTable['default'];
    }
  });
});
define('image-search/components/mdl-tabs', ['exports', 'ember-material-lite/components/mdl-tabs'], function (exports, _emberMaterialLiteComponentsMdlTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTabs['default'];
    }
  });
});
define('image-search/components/mdl-textarea', ['exports', 'ember-material-lite/components/mdl-textarea'], function (exports, _emberMaterialLiteComponentsMdlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTextarea['default'];
    }
  });
});
define('image-search/components/mdl-textfield', ['exports', 'ember-material-lite/components/mdl-textfield'], function (exports, _emberMaterialLiteComponentsMdlTextfield) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTextfield['default'];
    }
  });
});
define('image-search/components/mdl-tooltip', ['exports', 'ember-material-lite/components/mdl-tooltip'], function (exports, _emberMaterialLiteComponentsMdlTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTooltip['default'];
    }
  });
});
define('image-search/helpers/app-version', ['exports', 'ember', 'image-search/config/environment'], function (exports, _ember, _imageSearchConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _imageSearchConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('image-search/helpers/eq', ['exports', 'ember'], function (exports, _ember) {
  exports.eq = eq;

  function eq(params) {
    return params[0] == params[1] ? true : false;
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('image-search/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('image-search/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('image-search/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'image-search/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _imageSearchConfigEnvironment) {
  var _config$APP = _imageSearchConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('image-search/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('image-search/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('image-search/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('image-search/initializers/export-application-global', ['exports', 'ember', 'image-search/config/environment'], function (exports, _ember, _imageSearchConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_imageSearchConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _imageSearchConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_imageSearchConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('image-search/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('image-search/initializers/material-lite-extensions', ['exports', 'ember-material-lite/initializers/material-lite-extensions'], function (exports, _emberMaterialLiteInitializersMaterialLiteExtensions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteInitializersMaterialLiteExtensions['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteInitializersMaterialLiteExtensions.initialize;
    }
  });
});
define('image-search/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('image-search/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("image-search/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('image-search/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('image-search/router', ['exports', 'ember', 'image-search/config/environment'], function (exports, _ember, _imageSearchConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _imageSearchConfigEnvironment['default'].locationType,
    rootURL: _imageSearchConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' }, function () {});
  });

  exports['default'] = Router;
});
define('image-search/routes/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		setupController: function setupController(controller, model) {
			this._super(controller, model);
			controller.set('searchValue', '');
			controller.set('showLoader', false);
			controller.set('images', null);
			controller.set('starredImages', null);
			controller.set('welcome', true);
		},
		actions: {
			setData: function setData(data) {
				var controller = this.get('controller');
				controller.set('starredImages', null);
				controller.set('images', data);
			},
			getStarred: function getStarred(data) {
				var controller = this.get('controller');
				controller.set('images', null);
				var starredIds = JSON.parse(window.localStorage.getItem('starredIds')) ? JSON.parse(window.localStorage.getItem('starredIds')) : [];
				var length = starredIds.length;
				if (length) controller.set('showLoader', true);
				controller.set('welcome', false);
				controller.set('starredImages', []);
				for (var i = 0; i < length; i++) {
					var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&' + 'api_key=ef4dbc42acb7e073f5cfdd1020fafb9b' + '&photo_id=' + parseInt(starredIds[i]) + '&format=json&nojsoncallback=1' + '&secret=7700d2eee8518fb7';
					_ember['default'].$.ajax({
						type: 'GET',
						url: url
					}).then(function (data) {
						controller.set('showLoader', false);
						data.sizes.size.forEach(function (obj) {
							if (obj.label == 'Small 320') {
								obj.like = true;
								controller.get('starredImages').pushObject(obj);
							}
						});
					}, function (err) {
						console.log(err);
					});
				}
			},
			likePicture: function likePicture(photo) {
				_ember['default'].set(photo, 'like', photo.like ? false : true);
				var starredIds = JSON.parse(window.localStorage.getItem('starredIds')) ? JSON.parse(window.localStorage.getItem('starredIds')) : [];
				if (!photo.like) {
					var index = starredIds.indexOf(photo.id);
					if (index > -1) {
						starredIds.splice(index, 1);
					}
				} else starredIds.push(photo.id);
				window.localStorage.setItem('starredIds', JSON.stringify(starredIds));
			}
		}
	});
});
define('image-search/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("image-search/templates/components/image-search-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 7
          }
        },
        "moduleName": "image-search/templates/components/image-search-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "mdl-textfield", [], ["expandableIcon", "search", "value", ["subexpr", "@mut", [["get", "searchValue", ["loc", [null, [1, 46], [1, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "label", "Search"], ["loc", [null, [1, 0], [1, 74]]], 0, 0], ["element", "action", ["hitApi"], [], ["loc", [null, [3, 6], [3, 25]]], 0, 0], ["inline", "mdl-button", [], ["icon", "search"], ["loc", [null, [4, 1], [4, 29]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("image-search/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 5
            },
            "end": {
              "line": 15,
              "column": 5
            }
          },
          "moduleName": "image-search/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    		\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 6
              },
              "end": {
                "line": 18,
                "column": 3
              }
            },
            "moduleName": "image-search/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	    		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "mdl-spinner", ["loc", [null, [17, 7], [17, 22]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.9.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 28,
                      "column": 11
                    },
                    "end": {
                      "line": 30,
                      "column": 11
                    }
                  },
                  "moduleName": "image-search/templates/index.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("												");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("i");
                  dom.setAttribute(el1, "class", "material-icons");
                  var el2 = dom.createTextNode("star_border");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes() {
                  return [];
                },
                statements: [],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.9.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 30,
                      "column": 11
                    },
                    "end": {
                      "line": 32,
                      "column": 11
                    }
                  },
                  "moduleName": "image-search/templates/index.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("												");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("i");
                  dom.setAttribute(el1, "class", "material-icons");
                  var el2 = dom.createTextNode("star");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes() {
                  return [];
                },
                statements: [],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.9.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 37,
                    "column": 6
                  }
                },
                "moduleName": "image-search/templates/index.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "mdl-cell mdl-cell-4-col");
                var el2 = dom.createTextNode("\n								");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2, "class", "demo-card-image mdl-card mdl-shadow--2dp");
                var el3 = dom.createTextNode("\n									");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("img");
                dom.setAttribute(el3, "height", "250");
                dom.setAttribute(el3, "width", "330");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n									");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "mdl-card__title mdl-card--expand");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n										");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3, "class", "mdl-card__actions");
                var el4 = dom.createTextNode("\n										");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("span");
                dom.setAttribute(el4, "class", "demo-card-image__filename pointer");
                var el5 = dom.createTextNode("\n");
                dom.appendChild(el4, el5);
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode("										");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n									");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n								");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n							");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element2 = dom.childAt(fragment, [1, 1]);
                var element3 = dom.childAt(element2, [1]);
                var element4 = dom.childAt(element2, [5, 1]);
                var morphs = new Array(3);
                morphs[0] = dom.createAttrMorph(element3, 'src');
                morphs[1] = dom.createElementMorph(element4);
                morphs[2] = dom.createMorphAt(element4, 1, 1);
                return morphs;
              },
              statements: [["attribute", "src", ["get", "photo.url_n", ["loc", [null, [24, 20], [24, 31]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["likePicture", ["get", "photo", ["loc", [null, [27, 81], [27, 86]]], 0, 0, 0, 0]], [], ["loc", [null, [27, 58], [27, 88]]], 0, 0], ["block", "if", [["subexpr", "eq", [["get", "photo.like", ["loc", [null, [28, 21], [28, 31]]], 0, 0, 0, 0], false], [], ["loc", [null, [28, 17], [28, 38]]], 0, 0]], [], 0, 1, ["loc", [null, [28, 11], [32, 18]]]]],
              locals: ["photo"],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 7
                },
                "end": {
                  "line": 39,
                  "column": 4
                }
              },
              "moduleName": "image-search/templates/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "mdl-grid");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("					");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "images.photos.photo", ["loc", [null, [21, 14], [21, 33]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [21, 6], [37, 15]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.9.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 49,
                    "column": 10
                  },
                  "end": {
                    "line": 51,
                    "column": 10
                  }
                },
                "moduleName": "image-search/templates/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("											");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "material-icons");
                var el2 = dom.createTextNode("star_border");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.9.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 51,
                    "column": 10
                  },
                  "end": {
                    "line": 53,
                    "column": 10
                  }
                },
                "moduleName": "image-search/templates/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("											");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("i");
                dom.setAttribute(el1, "class", "material-icons");
                var el2 = dom.createTextNode("star");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 42,
                  "column": 5
                },
                "end": {
                  "line": 58,
                  "column": 5
                }
              },
              "moduleName": "image-search/templates/index.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "mdl-cell mdl-cell-4-col");
              var el2 = dom.createTextNode("\n							");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "demo-card-image mdl-card mdl-shadow--2dp");
              var el3 = dom.createTextNode("\n								");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("img");
              dom.setAttribute(el3, "height", "250");
              dom.setAttribute(el3, "width", "330");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n								");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "mdl-card__title mdl-card--expand");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n									");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "mdl-card__actions");
              var el4 = dom.createTextNode("\n									");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("span");
              dom.setAttribute(el4, "class", "demo-card-image__filename pointer");
              var el5 = dom.createTextNode("\n");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("									");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n								");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n							");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1, 1]);
              var element1 = dom.childAt(element0, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element1, 'src');
              morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 1, 1);
              return morphs;
            },
            statements: [["attribute", "src", ["get", "photo.source", ["loc", [null, [45, 19], [45, 31]]], 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["subexpr", "eq", [["get", "photo.like", ["loc", [null, [49, 20], [49, 30]]], 0, 0, 0, 0], false], [], ["loc", [null, [49, 16], [49, 37]]], 0, 0]], [], 0, 1, ["loc", [null, [49, 10], [53, 17]]]]],
            locals: ["photo"],
            templates: [child0, child1]
          };
        })();
        var child2 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.9.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 59,
                    "column": 6
                  },
                  "end": {
                    "line": 63,
                    "column": 6
                  }
                },
                "moduleName": "image-search/templates/index.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1, "class", "mdl-cell mdl-cell-4-col");
                var el2 = dom.createTextNode("\n								Starred list is empty !!\n							");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 58,
                  "column": 5
                },
                "end": {
                  "line": 64,
                  "column": 5
                }
              },
              "moduleName": "image-search/templates/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "unless", [["get", "images", ["loc", [null, [59, 16], [59, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [59, 6], [63, 17]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 3
              },
              "end": {
                "line": 66,
                "column": 3
              }
            },
            "moduleName": "image-search/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "mdl-grid");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "if", [["get", "images", ["loc", [null, [19, 13], [19, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [19, 7], [39, 11]]]], ["block", "each", [["get", "starredImages", ["loc", [null, [42, 13], [42, 26]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [42, 5], [64, 14]]]]],
          locals: [],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 5
            },
            "end": {
              "line": 67,
              "column": 2
            }
          },
          "moduleName": "image-search/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "showLoader", ["loc", [null, [16, 12], [16, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [16, 6], [66, 10]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 70,
            "column": 6
          }
        },
        "moduleName": "image-search/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "mdl-layout mdl-js-layout mdl-layout--fixed-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2, "class", "mdl-layout__header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "mdl-layout__header-row");
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "mdl-layout-spacer");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    	");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "pointer");
        var el5 = dom.createTextNode("\n    		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "material-icons");
        var el6 = dom.createTextNode("star");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("main");
        dom.setAttribute(el2, "class", "mdl-layout__content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "page-content");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0]);
        var element6 = dom.childAt(element5, [1, 1]);
        var element7 = dom.childAt(element6, [5]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element6, 1, 1);
        morphs[1] = dom.createElementMorph(element7);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [3, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "image-search-bar", [], ["searchValue", ["subexpr", "@mut", [["get", "searchValue", ["loc", [null, [4, 33], [4, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "setData", "setData", "showLoader", ["subexpr", "@mut", [["get", "showLoader", ["loc", [null, [4, 74], [4, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "welcome", ["subexpr", "@mut", [["get", "welcome", ["loc", [null, [4, 93], [4, 100]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 2], [4, 102]]], 0, 0], ["element", "action", ["getStarred"], [], ["loc", [null, [6, 26], [6, 49]]], 0, 0], ["block", "if", [["get", "welcome", ["loc", [null, [13, 11], [13, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [13, 5], [67, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('image-search/config/environment', ['ember'], function(Ember) {
  var prefix = 'image-search';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("image-search/app")["default"].create({"name":"image-search","version":"0.0.0+ce4d8360"});
}

/* jshint ignore:end */
//# sourceMappingURL=image-search.map
