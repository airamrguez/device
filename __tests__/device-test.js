'use strict';

jest.dontMock('../src/device');

describe('device detection', function() {
    it('parses chrome user agent', function() {
        let userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.76 Safari/537.36';
        window.navigator.__defineGetter__('userAgent', function(){
            return userAgent;
        });
        let Device = require('../lib/device');
        let isChrome = Device.isChrome();
        expect(isChrome).toBe(true);
    });

    it('parses iphone user agent', function() {
        let userAgent = 'Mozilla/5.0(iPhone;U;CPUiPhoneOS4_0likeMacOSX;en-us)AppleWebKit/532.9(KHTML,likeGecko)Version/4.0.5Mobile/8A293Safari/6531.22.7';
        window.navigator.__defineGetter__('userAgent', function(){
            return userAgent;
        });
        let Device = require('../lib/device');
        let isIPhone = Device.isIPhone();
        expect(isIPhone).toBe(true);
    });

    it('parses ipad user agent', function() {
        let userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25';
        window.navigator.__defineGetter__('userAgent', function(){
            return userAgent;
        });
        let Device = require('../lib/device');
        let isIPad = Device.isIPad();
        expect(isIPad).toBe(true);
    });

    it('parses android user agent', function() {
        let userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2; fr-fr; Desire_A8181 Build/FRF91) App3leWebKit/53.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
        window.navigator.__defineGetter__('userAgent', function(){
            return userAgent;
        });
        let Device = require('../lib/device');
        let isAndroid = Device.isAndroid();
        expect(isAndroid).toBe(true);
    });
});
