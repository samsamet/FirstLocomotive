// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.

module.exports = function routes() {
  this.root('authentication#loginview');
  this.match('/login', 'authentication#login', { via: 'POST' });
  this.match('/login', 'authentication#loginview', { via: 'GET' });
  this.match('/main', 'pages#main');
  this.match('/logout', 'authentication#logout');
    this.match('/404', 'pages#NoPermission');
    this.match('/test', 'pages#test');
    this.match('/kogrid', 'pages#kogrid');
    this.match('/admin', 'pages#admin');
    this.match('/users', 'admin#userPage');
    this.match('/procs','admin#procurementsPage');
    this.match('/procs/save','admin#procurementsSave',{ via: 'POST' });
}
