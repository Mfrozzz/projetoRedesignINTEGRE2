/* TABS */

var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (item) {
      item.style.display = "none";
    });
    if (li_value == "apresentacao") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema1") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema2") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema3") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema4") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema5") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema6") {
      document.querySelector("." + li_value).style.display = "block";
    }
     else if (li_value == "rotacao") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}


/* PDF */

function criarPDFAnotacao() {
  var anotacao = document.getElementById('anotacao').value;

  var win = window.open('', '', 'height=1000,width=1000');
  win.document.write('<html><head>');
  win.document.write('<title>Anotações</title>');
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write('<p><b>Anotações</b><p>');
  win.document.write('<br>');
  win.document.write(anotacao);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}


function criarPDFAnotacao(type) {
  debugger;
  var anotacao = document.getElementById('anotacao'+type).value;
  var titulo   = document.getElementById('title'+type).value;

  var win = window.open('','', 'height=1000,width=1000');
  win.document.write('<html><head>');
  win.document.write('<title>Anotações</title>');
  win.document.write('</head>');
  win.document.write('<body style="font-family: Arial, sans-serif">');
  win.document.write('<p><b>Anotações: '+titulo+'</b><p>');
  win.document.write('<br>');
  win.document.write(anotacao);
  win.document.write('</body><html>');
  win.document.close();
  win.print();
}
// salvar check-list em cookies
//---------- JQuery-----------//
//===== Cookies Plugin=====   //

(function ($) {
  $.cookie = function (key, value, options) {

      // key and at least value given, set cookie...
      if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
          options = $.extend({}, options);

          if (value === null || value === undefined) {
              options.expires = -1;
          }

          if (typeof options.expires === 'number') {
              var days = options.expires, t = options.expires = new Date();
              t.setDate(t.getDate() + days);
          }

          value = String(value);

          return (document.cookie = [
      encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // criando a data de expiração
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
  ].join(''));
      }

      options = value || {};
      var decode = options.raw ? function (s) { return s; } : decodeURIComponent;

      var pairs = document.cookie.split('; ');
      for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
          if (decode(pair[0]) === key) return decode(pair[1] || ''); 
      }
      return null;
  };
})(jQuery);
//--------------------------------------//
//======================================//
// Aqui ele verifica o documento quando estiver pronto
//Analiso se esta tudo pronto e faço a validação
$(document).ready(function () {
  var checkbox = $(':checkbox'), checkboxCookieName = 'checkbox-state';
//no caso para cada check-box
  checkbox.each(function () {
      $(this).attr('checked', $.cookie(checkboxCookieName + '|' + $(this).attr('name')));
  });

  checkbox.click(function () {                
      $.cookie(checkboxCookieName + '|' + $(this).attr('name'), $(this).prop('checked'));
  }); console.log("saved")
});
//Made by Sak


