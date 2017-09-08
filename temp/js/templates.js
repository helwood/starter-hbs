HBS.registerPartial("color", HBS.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));
this["Genesis"] = this["Genesis"] || {};
this["Genesis"]["templates"] = this["Genesis"]["templates"] || {};
this["Genesis"]["templates"]["hello"] = HBS.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.head,depth0,{"name":"head","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<h2>Hello</h2>\n"
    + ((stack1 = container.invokePartial(partials.foot,depth0,{"name":"foot","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
HBS.registerPartial("foot", HBS.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<script src=\"https://www.lowescdn.com/scaffold/dev/js/scaffold.min.js\"></script>\n<script src=\"js/"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.site : depth0)) != null ? stack1.name : stack1), depth0))
    + ".js\"></script>\n</body></html>";
},"useData":true}));
this["Genesis"]["templates"]["index"] = HBS.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.head,depth0,{"name":"head","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	<div class=\"grid-container\">\n		<div class=\"theme-container\">\n\n		</div>\n	</div>\n"
    + ((stack1 = container.invokePartial(partials.partial,depth0,{"name":"partial","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.foot,depth0,{"name":"foot","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
HBS.registerPartial("head", HBS.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"utf-8\" />\n     <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />\n     <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1\" />\n     <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.site : depth0)) != null ? stack1.title : stack1), depth0))
    + "</title>\n\n     <link rel=\"stylesheet\" href=\"css/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.site : depth0)) != null ? stack1.name : stack1), depth0))
    + ".css\" />\n</head>\n<body ontouchstart>";
},"useData":true}));
HBS.registerPartial("partial", HBS.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<div class=\"grid-25 tablet-grid-25 mobile-grid-50 align-center\">\n			<div class=\"color-container\">\n				<div class=\"color-swatch\" style=\"background-color: #"
    + alias2(alias1((depth0 != null ? depth0.hex : depth0), depth0))
    + "\"></div>\n				<div class=\"color-text\">\n					<h5>"
    + alias2(alias1((depth0 != null ? depth0.type : depth0), depth0))
    + "</h5>\n					<p>"
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + "</p>\n				</div>\n			</div>\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid-100 tablet-grid-100 mobile-grid-100 grid-parent\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));