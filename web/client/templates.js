var Handlebars=require("handlebars");module.exports.body=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<body>\n  <div data-hook="modal"></div>\n  <div id="wrapper">\n    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle" data-hook="toggle-nav">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <span class="navbar-brand" href="/">Boss</span>\n        <small>Hello '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</small>\n      </div>\n      <div class="collapse navbar-collapse" data-hook="nav-container">\n        <ul class="nav navbar-nav side-nav host-list" data-hook="host-list">\n        </ul>\n      </div>\n    </nav>\n    <div id="nav-shadow"></div>\n    <div id="page-wrapper" data-hook="page-container"></div>\n    <footer>\n      <small><a href="http://github.com/tableflip/boss-web" class="boss-web">boss-web</a> <span data-hook="version">5</span> by <a href="http://tableflip.io" class="tableflip">TABLEFLIP</a></small>\n      <small>A side effect of the JavaScript Adventure Club</small>\n    </footer>\n  </div>\n</body>\n'},useData:!0}),module.exports.forms={},module.exports.forms.controls={},module.exports.forms.controls.checkbox=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="form-group">\n  <label data-hook="label"></label>\n  <input class="form-control" type="checkbox"/>\n  <div data-hook="message-container">\n    <div class="alert alert-danger" data-hook="message-text"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.forms.controls.element=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="row">\n  <div class="col-xs-5">\n    <input data-hook="key">\n  </div>\n  <div class="col-xs-5">\n    <input data-hook="value">\n  </div>\n  <div class="col-xs-2">\n    <a data-hook="remove-field" class="remove-field"><i class="fa fa-minus-circle"></i> remove</a>\n  </div>\n</div>\n'},useData:!0}),module.exports.forms.controls.array=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="form-group">\n  <label data-hook="label"></label>\n  <div data-hook="field-container"></div>\n  <a data-hook="add-field" class="add-field"><i class="fa fa-plus-circle"></i> add</a>\n  <div data-hook="main-message-container">\n    <div class="alert alert-danger" data-hook="main-message-text"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.forms.controls.select=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="form-group">\n  <label data-hook="label"></label>\n  <select class="form-control"></select>\n  <div data-hook="message-container">\n    <div class="alert alert-danger" data-hook="message-text"></div>\n  </div>\n</div>'},useData:!0}),module.exports.head=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/>\n<meta name="apple-mobile-web-app-capable" content="yes"/>\n<meta name="mobile-web-app-capable" content="yes"/>\n<script src="/socket.io/socket.io.js"></script>\n'},useData:!0}),module.exports.forms.controls.tuple=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="form-group">\n  <input class="form-control">\n  <div data-hook="field-container"></div>\n  <a data-hook="remove-field">remove</a>\n  <div data-hook="message-container">\n    <div class="alert alert-danger" data-hook="message-text"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.forms.controls.input=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="form-group">\n  <label data-hook="label"></label>\n  <input class="form-control" type="text"/>\n  <div data-hook="message-container">\n    <div class="alert alert-danger" data-hook="message-text"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.includes={},module.exports.includes.apps={},module.exports.includes.apps.installing=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<ul data-hook="install-log" class="install-log"></ul>\n'},useData:!0}),module.exports.includes.apps.install=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<form>\n  <p>To install an app, specify a git url that contains a package.json file at it\'s root.</p>\n  <p>If you omit the app name, it will be taken from the package.json file.</p>\n  <hr>\n  <fieldset data-hook="field-container"></fieldset>\n  <hr>\n  <div class="buttons">\n    <button class="btn btn-default" data-hook="cancel-button">Cancel</button>\n    <button class="btn btn-primary" data-hook="submit-button" type="submit">Clone</button>\n  </div>\n</form>\n'},useData:!0}),module.exports.includes.apps.line=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<li class="'+s(n(null!=(a=null!=e?e.model:e)?a.type:a,e))+'">'+s(n(null!=(a=null!=e?e.model:e)?a.message:a,e))+"</li>\n"},useData:!0}),module.exports.includes.host={},module.exports.includes.host.resources=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="panel panel-primary">\n  <div class="panel-heading">\n    <h4 class="panel-title">Resource usage</h4>\n  </div>\n  <div class="panel-body resource-data">\n    <div class="resource-data-graph" data-hook="cpu-usage"></div>\n    <div class="resource-data-graph" data-hook="memory-usage"></div>\n  </div>\n</div>'},useData:!0}),module.exports.includes.host.system=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<div class="panel panel-primary table-panel system">\n  <div class="panel-heading">\n    <h4 class="panel-title">Vital statistics</h4>\n  </div>\n  <div class="panel-body">\n    <table class="table table-striped system-details">\n      <thead>\n        <tr>\n          <th class="hostname">Hostname</th>\n          <th class="type">Type</th>\n          <th class="platform">Platform</th>\n          <th class="arch">Arch</th>\n          <th class="release">Release</th>\n          <th class="boss">Boss</th>\n          <th class="uptime">Uptime</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class="hostname">'+s(n(null!=(a=null!=e?e.model:e)?a.hostname:a,e))+'</td>\n          <td class="type">'+s(n(null!=(a=null!=e?e.model:e)?a.type:a,e))+'</td>\n          <td class="platform">'+s(n(null!=(a=null!=e?e.model:e)?a.platform:a,e))+'</td>\n          <td class="arch">'+s(n(null!=(a=null!=e?e.model:e)?a.arch:a,e))+'</td>\n          <td class="release">'+s(n(null!=(a=null!=e?e.model:e)?a.release:a,e))+'</td>\n          <td class="boss">'+s(n(null!=(a=null!=e?e.model:e)?a.version:a,e))+'</td>\n          <td class="uptime" data-hook="uptime">'+s(n(null!=(a=null!=e?e.model:e)?a.uptimeFormatted:a,e))+"</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"},useData:!0}),module.exports.includes.confirm=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<p data-hook="message"></p>\n'},useData:!0}),module.exports.includes.apps.app=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<tr>\n  <td class="name" data-hook="name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</td>\n  <td class="user" data-hook="user">'+s(n(null!=(a=null!=e?e.model:e)?a.user:a,e))+'</td>\n  <td class="url" data-hook="url">'+s(n(null!=(a=null!=e?e.model:e)?a.url:a,e))+'</td>\n  <td class="remove" data-hook="remove">\n    <button type="button" class="btn btn-default btn-xs start" data-hook="startbutton"><i class="fa fa-play"></i> Start</button>\n    <button type="button" class="btn btn-danger btn-xs remove" data-hook="removebutton" data-toggle="modal" data-target="#myModal"><i class="fa fa-remove"></i> Remove</button>\n  </td>\n</tr>\n'},useData:!0}),module.exports.includes.hostlist={},module.exports.includes.hostlist.host=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<li class="host-name">\n  <ul>\n    <li><a href="/host/'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'"><i class="fa fa-desktop"></i> '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</a></li>\n    <li class="processes"><a href="/host/'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'/apps"><i class="fa fa-code-fork"></i> Apps</a></li>\n    <li class="processes"><a href="/host/'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'/processes"><i class="fa fa-tasks"></i> Processes</a></li>\n    <li class="process-list" data-hook="process-list"></li>\n  </ul>\n</li>\n'},useData:!0}),module.exports.includes.hostlist.process=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<ul class="process">\n  <li class="processName"><a href="/host/'+s(n(null!=(a=null!=(a=null!=(a=null!=e?e.model:e)?a.collection:a)?a.parent:a)?a.name:a,e))+"/process/"+s(n(null!=(a=null!=e?e.model:e)?a.id:a,e))+'"><span class="nodeIcon">&#11042;</span> <span data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</span></a></li>\n  <li class="processLogs"><a href="/host/'+s(n(null!=(a=null!=(a=null!=(a=null!=e?e.model:e)?a.collection:a)?a.parent:a)?a.name:a,e))+"/process/"+s(n(null!=(a=null!=e?e.model:e)?a.id:a,e))+'/logs"><i class="fa fa-book"></i> Logs</a></li>\n  <li class="processExceptions"><a href="/host/'+s(n(null!=(a=null!=(a=null!=(a=null!=e?e.model:e)?a.collection:a)?a.parent:a)?a.name:a,e))+"/process/"+s(n(null!=(a=null!=e?e.model:e)?a.id:a,e))+'/exceptions"><i class="fa fa-exclamation-triangle"></i> Exceptions</a></li>\n</ul>\n'},useData:!0}),module.exports.includes.modal=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" data-hook="close-button" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <h4 class="modal-title" data-hook="title"></h4>\n      </div>\n      <div class="modal-body" data-hook="modal-content">\n      </div>\n      <div class="modal-footer" data-hook="modal-buttons">\n        <button type="button" class="btn btn-default" data-dismiss="modal" data-hook="cancel-button">Close</button>\n        <button type="button" class="btn btn-primary" data-hook="ok-button">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n'},useData:!0}),module.exports.includes.process={},module.exports.includes.process.exceptionlist={},module.exports.includes.process.exceptionlist.entry=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<ul>\n  <li class="date">'+s(n(null!=(a=null!=e?e.model:e)?a.dateFormatted:a,e))+'</li>\n  <li class="code">'+s(n(null!=(a=null!=e?e.model:e)?a.code:a,e))+'</li>\n  <li class="message">'+s(n(null!=(a=null!=e?e.model:e)?a.messageOrStackSummary:a,e))+'</li>\n  <li class="stack"><pre><code>'+s(n(null!=(a=null!=e?e.model:e)?a.stack:a,e))+"</code></pre></li>\n</ul>\n"},useData:!0}),module.exports.includes.process.exceptions=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<span data-hook="exceptions"></span>\n'},useData:!0}),module.exports.includes.process.loglist={},module.exports.includes.process.loglist.entry=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression,t='<li class="'+s(n(null!=(a=null!=e?e.model:e)?a.type:a,e))+' visible"><span class="date">'+s(n(null!=(a=null!=e?e.model:e)?a.dateFormatted:a,e))+"</span>";return a=n(null!=(a=null!=e?e.model:e)?a.messageFormatted:a,e),null!=a&&(t+=a),t+"</li>\n"},useData:!0}),module.exports.includes.process.logs=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<span data-hook="logs"></span>\n'},useData:!0}),module.exports.includes.process.overview={},module.exports.includes.process.overview.cpu=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="panel panel-primary details">\n  <div class="panel-heading">\n    <h4 class="panel-title">CPU usage</h4>\n  </div>\n  <div class="panel-body">\n    <div data-hook="cpu-usage" style="width: 100%; height: 150px; margin: auto"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.includes.process.overview.memory=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="panel panel-primary details">\n  <div class="panel-heading">\n    <h4 class="panel-title">Memory usage</h4>\n  </div>\n  <div class="panel-body">\n    <div data-hook="memory-usage" style="width: 100%; height: 200px; margin: auto"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.includes.process.overview.latency=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div class="panel panel-primary details">\n  <div class="panel-heading">\n    <h4 class="panel-title">Event loop latency</h4>\n  </div>\n  <div class="panel-body">\n    <div data-hook="latency-usage" style="width: 100%; height: 150px; margin: auto"></div>\n  </div>\n</div>\n'},useData:!0}),module.exports.includes.process.overview.running=Handlebars.template({1:function(){return'      <button type="button" class="btn btn-default btn-xs process-addworker" data-hook="addworkerbutton"><i class="fa fa-plus"></i> Add worker</button>\n      <button type="button" class="btn btn-default btn-xs process-removeworker" data-hook="removeworkerbutton"><i class="fa fa-minus"></i> Remove worker</button>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,a,n,s){var t,l=this.lambda,o=this.escapeExpression,i='<div class="panel panel-primary details">\n  <div class="panel-heading">\n    <h4 class="panel-title">Vital statistics</h4>\n  </div>\n  <div class="panel-body" data-hook="debugger-warning">\n    <div class="alert alert-warning">\n      '+o(l(null!=(t=null!=e?e.model:e)?t.name:t,e))+" is running in debug mode, is paused and is waiting for a debugger to attach to port "+o(l(null!=(t=null!=e?e.model:e)?t.debugPort:t,e))+'. Please click the debug button below.\n    </div>\n    <button type="button" class="btn btn-default btn-xs process-debug"><i class="fa fa-bug"></i> Debug</button>\n  </div>\n  <div class="panel-body" data-hook="running-information">\n    <p>'+o(l(null!=(t=null!=e?e.model:e)?t.name:t,e))+' has been running for <span data-hook="uptime">'+o(l(null!=(t=null!=e?e.model:e)?t.uptimeFormatted:t,e))+'</span> with <span data-hook="restarts">'+o(l(null!=(t=null!=e?e.model:e)?t.restarts:t,e))+'</span> restart(s).</p>\n    <p>The current pid is <span data-hook="pid">'+o(l(null!=(t=null!=e?e.model:e)?t.pid:t,e))+'</span> and it\'s running as <span data-hook="user">'+o(l(null!=(t=null!=e?e.model:e)?t.user:t,e))+'</span>:<span data-hook="group">'+o(l(null!=(t=null!=e?e.model:e)?t.group:t,e))+'</span>.</p>\n\n    <button type="button" class="btn btn-default btn-xs process-gc" data-hook="gcbutton"><i class="fa fa-trash"></i> Garbage collect</button>\n    <button type="button" class="btn btn-default btn-xs process-heap" data-hook="heapdumpbutton"><i class="fa fa-h-square"></i> Heap dump</button>\n    <button type="button" class="btn btn-default btn-xs process-debug"><i class="fa fa-bug"></i> Debug</button>\n    <button type="button" class="btn btn-default btn-xs process-restart" data-hook="restartbutton"><i class="fa fa-refresh"></i> Restart</button>\n    <button type="button" class="btn btn-default btn-xs process-stop" data-hook="stopbutton"><i class="fa fa-stop"></i> Stop</button>\n\n';return t=a["if"].call(e,null!=(t=null!=e?e.model:e)?t.cluster:t,{name:"if",hash:{},fn:this.program(1,s),inverse:this.noop,data:s}),null!=t&&(i+=t),i+"  </div>\n</div>\n"},useData:!0}),module.exports.includes.process.overview.stopped=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<div class="panel panel-primary details">\n  <div class="panel-heading">\n    <h4 class="panel-title">Vital statistics</h4>\n  </div>\n  <div class="panel-body">\n    <p>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' is not running.</p>\n    <button type="button" class="btn btn-default btn-xs btn-success process-start" data-hook="startbutton"><i class="fa fa-play"></i> Start</button>\n    <button type="button" class="btn btn-default btn-xs btn-warning process-remove" data-hook="removebutton"><i class="fa fa-remove"></i> Remove</button>\n  </div>\n</div>\n'},useData:!0}),module.exports.includes.process.startOrRemove=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<div>\n  <button type="button" class="btn btn-default btn-xs btn-default process-start" data-hook="startbutton"><i class="fa fa-play"></i> Start</button>\n  <button type="button" class="btn btn-default btn-xs btn-danger process-remove" data-hook="removebutton"><i class="fa fa-remove"></i> Remove</button>\n</div>\n'},useData:!0}),module.exports.includes.process.start=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<form data-hook="start-form" class="start-form">\n  <fieldset data-hook="field-container"></fieldset>\n  <div class="buttons">\n    <button class="btn btn-default" data-hook="cancel-button" type="reset">Cancel</button>\n    <button class="btn btn-primary" data-hook="submit-button" type="submit">Start</button>\n  </div>\n</form>\n'},useData:!0}),module.exports.pages={},module.exports.pages.host={},module.exports.pages.host.apps=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary table-panel apps">\n        <div class="panel-heading">\n          <h4 class="panel-title">Apps</h4>\n          <button type="button" class="btn btn-default btn-xs install-button" data-hook="installbutton"><i class="fa fa-cloud-download"></i> Install</button>\n        </div>\n        <div class="panel-body">\n          <p data-hook="no-apps">No apps are installed</p>\n          <table class="table table-striped apps-list" data-hook="apps-list">\n            <thead>\n            <tr>\n              <th class="name">Name</th>\n              <th class="user">User</th>\n              <th class="url">URL</th>\n              <td class="remove">&nbsp;</td>\n            </tr>\n            </thead>\n            <tbody data-hook="apps"></tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.host.connecting=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<div class="alert alert-info" role="alert">Connecting to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+"...</div>\n"},useData:!0}),module.exports.pages.host.badsignature=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page badsignature">\n  <div class="alert alert-danger" role="alert">\n    <h4>Could not connect to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' - message signature was invalid</h4>\n    <p>This usually means that you did not configure boss-web correctly.</p>\n    <p>Please see the <a href="https://github.com/tableflip/boss-web#step-3-still-on-the-boss-machine-add-a-remote-user">README entry about adding remote users</a>.</p>\n  </div>\n</section>\n'},useData:!0}),module.exports.includes.processlist={},module.exports.includes.processlist.process=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<tr>\n  <td class="title" data-hook="name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+"<br /><small>"+s(n(null!=(a=null!=e?e.model:e)?a.script:a,e))+'</small></td>\n  <td class="pid" data-hook="pid">'+s(n(null!=(a=null!=e?e.model:e)?a.pid:a,e))+'</td>\n  <td class="uptime" data-hook="uptime">'+s(n(null!=(a=null!=e?e.model:e)?a.uptimeFormatted:a,e))+'</td>\n  <td class="restarts" data-hook="restarts">'+s(n(null!=(a=null!=e?e.model:e)?a.restarts:a,e))+'</td>\n  <td class="memory" data-hook="memory">'+s(n(null!=(a=null!=e?e.model:e)?a.memoryFormatted:a,e))+'</td>\n  <td class="cpu" data-hook="cpu">'+s(n(null!=(a=null!=e?e.model:e)?a.cpuFormatted:a,e))+"</td>\n</tr>\n"},useData:!0}),module.exports.pages.host.connectionrefused=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page badsignature">\n  <div class="alert alert-danger" role="alert">\n    <h4>Could not connect to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" - connection refused</h4>\n    <p>Is boss running on the remote machine?</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.connectiontimedout=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<div class="alert alert-danger" role="alert">\n  <h4>Could not connect to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+"</h4>\n  <p>Connection timed out, will attempt to reconnect shortly.</p>\n</div>\n"},useData:!0}),module.exports.pages.host.error=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page error">\n  <div class="alert alert-danger" role="alert">\n    <h4>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" encounterd an error</h4>\n    <p>Sorry it didn't work out. Maybe check the logs?</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.connectionreset=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page badsignature">\n  <div class="alert alert-danger" role="alert">\n    <h4>Could not connect to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" - connection reset</h4>\n    <p>Has something disrupted your network conneciton?</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.errorconnecting=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page error">\n  <div class="alert alert-danger" role="alert">\n    <h4>Could not connect to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+"</h4>\n    <p>Sorry it didn't work out. Maybe check the logs?</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.incompatible=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,a,n,s){var t,l="function",o=a.helperMissing,i=this.escapeExpression;return'<section class="page incompatible">\n  <div class="alert alert-danger">\n    <p><strong>'+i((t=null!=(t=a.name||(null!=e?e.name:e))?t:o,typeof t===l?t.call(e,{name:"name",hash:{},data:s}):t))+" is running a version of boss incompatible with this version of boss-web</strong></p>\n    <p>It is running "+i((t=null!=(t=a.version||(null!=e?e.version:e))?t:o,typeof t===l?t.call(e,{name:"version",hash:{},data:s}):t))+' - instead please run a version that <a href="http://semver.org/">satisfies</a> '+i((t=null!=(t=a.requiredVersion||(null!=e?e.requiredVersion:e))?t:o,typeof t===l?t.call(e,{name:"requiredVersion",hash:{},data:s}):t))+".</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.install=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Install app</h4>\n        </div>\n        <div class="panel-body" data-hook="view">\n          <form data-hook="install-form">\n            <fieldset data-hook="field-container"></fieldset>\n            <div class="buttons">\n              <button class="btn btn-default btn-sm" data-hook="reset" type="submit">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.host.networkdown=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page timeout">\n  <div class="alert alert-danger" role="alert">\n    <h4>Connection to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" lost</h4>\n    <p>Your network connection went down.</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.hostnotfound=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page badsignature">\n  <div class="alert alert-danger" role="alert">\n    <h4>Could not connect to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" - host not found</h4>\n    <p>Either the configured hostname is wrong or your DNS is b0rked</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.loadinghosts=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section class="page loadinghosts">\n  <div class="alert alert-info" role="alert">Waiting for hosts...</div>\n</section>\n'},useData:!0}),module.exports.pages.host.timeout=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page timeout">\n  <div class="alert alert-warning" role="alert">\n    <h4>Connection to '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" lost</h4>\n    <p>Connection timed out.</p>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.host.overview=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page host">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <span data-hook="system"></span>\n      <span data-hook="resources"></span>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.host.processes=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary table-panel processes">\n        <div class="panel-heading">\n          <h4 class="panel-title">Processes</h4>\n        </div>\n        <div class="panel-body">\n          <p data-hook="no-processes">There are no processes loaded</p>\n          <table class="table table-striped table-hover process-list"  data-hook="process-list">\n            <thead>\n            <tr>\n              <th class="title">Title</th>\n              <th class="pid">Pid</th>\n              <th class="uptime">Uptime</th>\n              <th class="restarts">Restarts</th>\n              <th class="memory">Memory</th>\n              <th class="cpu">CPU</th>\n            </tr>\n            </thead>\n            <tbody data-hook="processes"></tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process={},module.exports.pages.process.aborted=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Aborted</h4>\n        </div>\n        <div class="panel-body">\n          <div class="alert alert-danger">\n            <p>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' was aborted because it failed to start too many times.</p>\n            <p>Please use the logs and exception tabs to diagnose the problem and the start button to try again.</p>\n          </div>\n          <span data-hook="startOrRemove"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.nohosts=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<section class="page nohosts">\n  <div class="alert alert-warning" role="alert">\n    <strong>No hosts to show</strong> Please configure some hosts in your boss-web config file.\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.exceptions=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary table-panel exceptions">\n        <div class="panel-heading panel-heading-exceptions">\n          <h4 class="panel-title">Exceptions</h4>\n        </div>\n        <div class="panel-body panel-exceptions">\n          <p data-hook="no-exceptions">No exceptions have been thrown</p>\n          <ul class="exceptions" data-hook="exception-list">\n            <li class="date">Date</li>\n            <li class="code">Code</li>\n            <li class="message">Message</li>\n            <li class="list" data-hook="exceptions"></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.errored=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Errored</h4>\n        </div>\n        <div class="panel-body">\n          <div class="alert alert-danger">\n            <p>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' errored.</p>\n            <p>This means an error was thrown by your module.</p>\n            <p>Please check the exception list or logs for more information.</p>\n          </div>\n          <span data-hook="startOrRemove"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.overview=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div data-hook="details"></div>\n      <div data-hook="memory"></div>\n      <div data-hook="cpu"></div>\n      <div data-hook="latency"></div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.failed=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Failed</h4>\n        </div>\n        <div class="panel-body">\n          <div class="alert alert-danger">\n            <p>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' failed to initialise.</p>\n            <p>This usually means something was wrong with the process configuration.</p>\n            <p>Please double check the script path, current working directory, user/group, etc.</p>\n          </div>\n          <span data-hook="startOrRemove"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'
},useData:!0}),module.exports.pages.process.logs=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary logs">\n        <div class="panel-heading panel-heading-logs">\n          <button type="button" class="btn btn-default btn-xs logs-clear"><i class="fa fa-trash"></i> Clear</button>\n          <button type="button" class="btn btn-default btn-xs logs-time active"><i class="fa fa-calendar"></i> Time</button>\n          <button type="button" class="btn btn-default btn-xs logs-pin active"><i class="fa fa-paperclip"></i> Pin</button>\n          <h4 class="panel-title">Logs</h4>\n        </div>\n        <div class="panel-body panel-logs">\n          <ul class="logs showTimes" data-hook="logs"></ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.paused=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page process">\n  <div class="row">\n    <div class="col-md-12">\n      <h1 data-hook="process-name">'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Paused</h4>\n        </div>\n        <div class="panel-body">\n          <div class="alert alert-warning">\n            '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" is running in debug mode, is paused and is waiting for a debugger to attach to port "+s(n(null!=(a=null!=e?e.model:e)?a.debugPort:a,e))+'. Please click the debug button below.\n          </div>\n          <button type="button" class="btn btn-default btn-xs process-debug"><i class="fa fa-bug"></i> Debug</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.restarting=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Starting</h4>\n        </div>\n        <div class="panel-body">\n          <p><i class="fa fa-circle-o-notch fa-spin"></i> '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" restarting...</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.process.stopped=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Stopped</h4>\n        </div>\n        <div class="panel-body">\n          <p>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' is not running.</p>\n          <span data-hook="startOrRemove"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0}),module.exports.pages.process.stopping=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Starting</h4>\n        </div>\n        <div class="panel-body">\n          <p><i class="fa fa-circle-o-notch fa-spin"></i> '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" stopping...</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.process.starting=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Starting</h4>\n        </div>\n        <div class="panel-body">\n          <p><i class="fa fa-circle-o-notch fa-spin"></i> '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" starting...</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.process.uninitialised=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Starting</h4>\n        </div>\n        <div class="panel-body">\n          <p><i class="fa fa-circle-o-notch fa-spin"></i> '+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+" uninitialised...</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"},useData:!0}),module.exports.pages.process.unresponsive=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e){var a,n=this.lambda,s=this.escapeExpression;return'<section class="page processes">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+'</h1>\n      <div class="panel panel-primary">\n        <div class="panel-heading">\n          <h4 class="panel-title">Unresponsive</h4>\n        </div>\n        <div class="panel-body">\n          <p>'+s(n(null!=(a=null!=e?e.model:e)?a.name:a,e))+' is unresponsive. You may try to debug, restart or stop the process.</p>\n          <button type="button" class="btn btn-default btn-xs process-debug" data-hook="debugbutton"><i class="fa fa-bug"></i> Debug</button>\n          <button type="button" class="btn btn-default btn-xs process-restart" data-hook="restartbutton"><i class="fa fa-refresh"></i> Restart</button>\n          <button type="button" class="btn btn-default btn-xs process-stop" data-hook="stopbutton"><i class="fa fa-stop"></i> Stop</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n'},useData:!0});