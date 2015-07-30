var assert = require('assert');
var hexRgb = require('../index');

it('hex2rgb', function() {
    assert.deepEqual(hexRgb.hex2rgb('#ff0000', true), [255, 0, 0]);;
    assert.equal(hexRgb.hex2rgb('#ff0000'), 'rgb(255,0,0)');
    assert.deepEqual(hexRgb.hex2rgb('#ff0', true), [255, 255, 0]);
    assert.deepEqual(hexRgb.hex2rgb('#ff0'), 'rgb(255,255,0)');
    assert.equal(hexRgb.hex2rgb('ff0000'), 'rgb(255,0,0)');
    assert.equal(hexRgb.hex2rgb('ff0'), 'rgb(255,255,0)');
});

it('rgb2hex', function() {
    assert.deepEqual(hexRgb.rgb2hex('rgb(255,255,0)', true), ['ff', 'ff', '00']);
    assert.equal(hexRgb.rgb2hex('rgb(255,255,0)'), '#ffff00');
    assert.equal(hexRgb.rgb2hex('rgba(255,255,0, 0)'), 'transparent');
});