# ember-cli-requestanimationframe-polyfill

[![Build Status](https://travis-ci.org/miguelcobain/ember-cli-requestanimationframe-polyfill.svg?branch=master)](https://travis-ci.org/miguelcobain/ember-cli-requestanimationframe-polyfill)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-requestanimationframe-polyfill.svg)](https://emberobserver.com/addons/ember-cli-requestanimationframe-polyfill)
[![npm version](https://badge.fury.io/js/ember-cli-requestanimationframe-polyfill.svg)](https://badge.fury.io/js/ember-cli-requestanimationframe-polyfill)

Ember-CLI addon to add a polyfill for the [`window.requestAnimationFrame()`](https://developer.mozilla.org/en/docs/Web/API/window/requestAnimationFrame)
property, based on [raf-polyfill](https://github.com/airwave-development/raf-polyfill).

Internet Explorer 9 and lower do not support `requestAnimationFrame()`. 
See full [browser support details](https://caniuse.com/#feat=requestanimationframe).

## Installation

```bash
ember install ember-cli-requestanimationframe-polyfill
```

## Usage

The addon will import the polyfill by default to your `vendor.js`. 

Beginning with version 2.13 Ember CLI supports a [Targets](http://rwjblue.com/2017/04/21/ember-cli-targets/) feature, 
allowing you to specify the list of browsers your app should support like `last 1 Chrome versions` or `ie 11`.
If the [caniuse database](https://caniuse.com/#feat=requestanimationframe) indicates that all browsers you want to support *fully* support the feature, then the 
polyfill will *not* be included into your build, to not increase your bundle size.

### Usage in an addon

This should also work as a nested addon of another addon, just include it as a `dependency`. So if you addon
makes use of `requestAnimationFrame()`, you can use this to make sure the API is available. Given the above mentioned targets feature,
it will have no negative impact on the consuming app should the polyfill not be needed.

## Credits

This addon was inspired by a similar polyfill addon: https://github.com/kaliber5/ember-cli-classlist-polyfill

## License

This project is licensed under the [MIT License](LICENSE.md).
