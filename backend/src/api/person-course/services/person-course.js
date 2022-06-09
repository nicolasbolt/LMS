'use strict';

/**
 * person-course service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::person-course.person-course');
