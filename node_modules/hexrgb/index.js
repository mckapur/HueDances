'use strict';

/**
 * @param {string} hex
 * @param {boolean} str
 */
module.exports.hex2rgb = function(hex, array) {
  var hex = String(hex).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
  if (hex) {
    hex = hex.slice(1);
    if (hex.length != 3) return null;
    var rgb = [];
    for (var i = 0; i < 3; ++i) {
      var value = hex[i];
      if (value.length == 1) value += value;
      rgb.push(parseInt(value, 16));
    }
    return array ? rgb : 'rgb(' + rgb + ')';
  }

  return null;
};

module.exports.rgb2hex = function(rgb, array) {
  var rgb = String(rgb).match(/\d{1,3}/g);
  if (rgb && rgb.length >= 3) {
    if (rgb.length == 4 && rgb[3] == 0 && !array) return 'transparent';

    var hex = [];
    for (var i = 0; i < 3; i++) {
      var bit = (rgb[i] - 0).toString(16);
      hex.push((bit.length == 1) ? '0' + bit : bit);
    }
    return (array) ? hex : '#' + hex.join('');
  }

  return null;
};
