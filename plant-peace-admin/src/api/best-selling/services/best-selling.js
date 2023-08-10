'use strict';

/**
 * best-selling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::best-selling.best-selling');
