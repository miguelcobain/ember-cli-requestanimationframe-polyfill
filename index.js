'use strict';

const path = require('path');
const fastbootTransform = require('fastboot-transform');
const Funnel = require('broccoli-funnel');
const caniuse = require('caniuse-api');

function findHostShim() {
  let current = this;
  let app;
  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));
  return app;
}

module.exports = {
  name: require('./package').name,

  included() {
    if (this.shouldImportPolyfill()) {
      this._import('vendor/raf-polyfill/raf.js');
    }
  },

  // polyfill `this.import` if required
  _import(file) {
    if (typeof this.import === 'function') {
      this.import(file);
    } else {
      let app = findHostShim.call(this);
      app.import(file);
    }
  },

  treeForVendor() {
    let modulePath = path.dirname(require.resolve('raf-polyfill'));
    let vendorTree = new Funnel(modulePath, {
      destDir: 'raf-polyfill'
    });

    return fastbootTransform(vendorTree);
  },

  shouldImportPolyfill() {
    let browsers = this.project.targets && this.project.targets.browsers;
    return !browsers || !caniuse.isSupported('requestanimationframe', browsers);
  }
};
