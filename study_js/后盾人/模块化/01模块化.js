let modules = (function() {
  let moduleMap = {};
  function define(name, modules, callback) {
    modules.map((name, index) => {
      modules[index] = moduleMap[name];
    });

    moduleMap[name] = callback.apply(null, modules); // ["math", "radom"]
  }
  return { define };
})();

modules.define("math", [], function() {
  const add = function () { console.log("math action!") };
  return { add }
});

modules.define("handleArray", ["math", "radom"], function(math, radom) {
  math.add();
});

/**
 * listMap: {
 *    commonA: {},
 *    commonB: {}
 * }
 * 
 * ["math", "radom"]
 * [{ add }, "radom"]
 * [{}, {}]
 */