'use strict';

/**
 * most-popular service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::most-popular.most-popular');
