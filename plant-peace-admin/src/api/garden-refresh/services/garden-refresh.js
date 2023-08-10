'use strict';

/**
 * garden-refresh service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::garden-refresh.garden-refresh');
