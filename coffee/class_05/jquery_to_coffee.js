// Generated by CoffeeScript 1.6.3
(function() {
  var coffeeList;

  $(function() {
    return $('drink a').click(function() {
      var newStyle;
      newStyle = {
        color: '#F00',
        'font-weight': 'bold'
      };
      return $(this).css(newStyle);
    });
  });

  coffeeList = {
    init: function() {
      return $('.drink a').click(function(e) {
        e.preventDefault();
        return alert($(this).text());
      });
    }
  };

  coffeeList.init();

  $.ajax({
    url: '/coffeeList',
    method: 'GET',
    success: function(results) {
      var coffee, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = results.length; _i < _len; _i++) {
        coffee = results[_i];
        if (coffee.level > 3) {
          _results.push($('ul.drink').append("<li>" + coffee.name + "</li>"));
        }
      }
      return _results;
    },
    error: function(results) {
      return alert("failure " + results);
    }
  });

}).call(this);
