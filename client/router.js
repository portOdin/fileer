initializing(function() {
    var Helpers = {
        absoluteUrl: function() {
            return Meteor.absoluteUrl();
        },
        ifThen: function(a, b) {
            return a == b;
        }
    };

    // set helpers context
    _.each(Helpers, function(fn, prop) {
        UI.registerHelper(prop, fn);  
    });
});

// Router
initializing(function() {
    var preloadSubscriptions, filters;

    // main subscribes list
    preloadSubscriptions = [''];

    Filters = {
        requireLogin: function(pause) {
            if (!Meteor.user()) {
                if (Meteor.loggingIn()) this.render(this.loadingTemplate);
                else this.render('accessDenied');
                pause();
            }
        }
    };

    // configure
    Router.configure({
        layoutTemplate: 'layout',
        loadingTemplate: 'loading',
        notFoundTemplate: 'not_found',
        waitOn: function () {
            return _.map(preloadSubscriptions, function(sub) { 
                Meteor.subscribe(sub);
            });
        }
    });

    // Routes
    Router.map(function() {
        this.route('index', { path: '/', template: 'index' });
    });

    // filters
    Router.onBeforeAction(Filters.requireLogin, { only: [
        // filters
    ]});
});
