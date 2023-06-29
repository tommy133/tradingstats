const router = require('express').Router();

const projectionRoutes = require('./../domains/projection');

router.use('/projection', projectionRoutes);

module.exports = router;