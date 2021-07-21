const sequelize = require('../config/connection');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);