require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"fill":[function(require,module,exports){
exports.pattern = function(layer, src) {
  return layer.style = {
    backgroundImage: "url('" + src + "')",
    backgroundRepeat: "repeat",
    backgroundSize: "auto"
  };
};

exports.video = function(layer, src) {
  var video;
  video = new VideoLayer({
    video: src
  });
  video.superLayer = layer;
  video.backroundColor = "transparent";
  video.height = layer.height;
  return video.width = layer.width;
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2FybGVyaWtqb25hdGFuL1NpdGVzL2ZyYW1lci5tb2R1bGUuZmlsbC9maWxsLmZyYW1lci9tb2R1bGVzL2ZpbGwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsT0FBTyxDQUFDLE9BQVIsR0FBa0IsU0FBQyxLQUFELEVBQVEsR0FBUixHQUFBO1NBRWQsS0FBSyxDQUFDLEtBQU4sR0FBYztBQUFBLElBQ1YsZUFBQSxFQUFpQixPQUFBLEdBQVUsR0FBVixHQUFnQixJQUR2QjtBQUFBLElBRVYsZ0JBQUEsRUFBa0IsUUFGUjtBQUFBLElBR1YsY0FBQSxFQUFnQixNQUhOO0lBRkE7QUFBQSxDQUFsQixDQUFBOztBQUFBLE9BUU8sQ0FBQyxLQUFSLEdBQWdCLFNBQUMsS0FBRCxFQUFRLEdBQVIsR0FBQTtBQUVaLE1BQUEsS0FBQTtBQUFBLEVBQUEsS0FBQSxHQUFZLElBQUEsVUFBQSxDQUFXO0FBQUEsSUFBQyxLQUFBLEVBQU8sR0FBUjtHQUFYLENBQVosQ0FBQTtBQUFBLEVBQ0EsS0FBSyxDQUFDLFVBQU4sR0FBbUIsS0FEbkIsQ0FBQTtBQUFBLEVBRUEsS0FBSyxDQUFDLGNBQU4sR0FBdUIsYUFGdkIsQ0FBQTtBQUFBLEVBR0EsS0FBSyxDQUFDLE1BQU4sR0FBZSxLQUFLLENBQUMsTUFIckIsQ0FBQTtTQUlBLEtBQUssQ0FBQyxLQUFOLEdBQWMsS0FBSyxDQUFDLE1BTlI7QUFBQSxDQVJoQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMucGF0dGVybiA9IChsYXllciwgc3JjKSAtPlxuXG4gICAgbGF5ZXIuc3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ1wiICsgc3JjICsgXCInKVwiLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcInJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJhdXRvXCJcbiAgICB9XG5cbmV4cG9ydHMudmlkZW8gPSAobGF5ZXIsIHNyYykgLT5cblxuICAgIHZpZGVvID0gbmV3IFZpZGVvTGF5ZXIoe3ZpZGVvOiBzcmN9KVxuICAgIHZpZGVvLnN1cGVyTGF5ZXIgPSBsYXllclxuICAgIHZpZGVvLmJhY2tyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG4gICAgdmlkZW8uaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0XG4gICAgdmlkZW8ud2lkdGggPSBsYXllci53aWR0aCJdfQ==
