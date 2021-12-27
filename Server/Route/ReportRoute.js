const app = require('express');
const auth = require('../utils/auth')
const router = app.Router();

const {create_report,reportValiations}  = require('../Controller/report_controller');
router.post('/create_report',auth,reportValiations,create_report);
module.exports = router;