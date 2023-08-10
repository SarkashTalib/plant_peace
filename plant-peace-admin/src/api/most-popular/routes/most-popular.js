'use strict';

/**
 * most-popular router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::most-popular.most-popular');
