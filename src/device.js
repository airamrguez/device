'use strict';

const CHROME = 'chrome';
const IOS = 'ios';
const ANDROID = 'android';
const IPHONE = 'iphone';
const IPOD = 'ipod';
const IPAD = 'ipad';

let device;
export default class Device {
    static get navigator() {
        return window.navigator;
    }

    static get userAgent() {
        return Device.navigator.userAgent;
    }

    static get device() {
        return device;
    }

    static set device(p) {
        device = p;
    }

    static is(p) {
        if (typeof Device.device === 'undefined') {
            if (Device.userAgent.toLowerCase().indexOf(p) > -1) {
                Device.device = p;
                return true;
            }
        }
        return Device.device === p;
    }

    static isRetina() {
        if (window.devicePixelRatio > 1) {
            return true;
        }
        if (window.matchMedia && window.matchMedia('(-webkit-min-device-pixel-ratio: 1.5)').matches) {
            return true;
        }
        return false;
    }

    static isIOS() {
        return Device.is(IOS);
    }

    static isIPhone() {
        return Device.is(IPHONE);
    }

    static isIPod() {
        return Device.is(IPOD);
    }

    static isAndroid() {
        return Device.is(ANDROID);
    }

    static isChrome() {
        return Device.is(CHROME);
    }

    static isIPad() {
        return Device.is(IPAD);
    }
}
