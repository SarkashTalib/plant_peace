'use strict';

/**
 * care-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::care-plan.care-plan');
