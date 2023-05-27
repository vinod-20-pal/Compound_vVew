const compoundRouter = require('../controllers/compoundController');
const router = require('express').Router();

router.post('/compound', compoundRouter.appCompound);

router.get('/allCompound', compoundRouter.getAllCompound);

router.get('/published', compoundRouter.getPublishedCompound);

router.get('/:id', compoundRouter.getOneCompound);

router.put('/:id', compoundRouter.updateCompound);

router.delete('/:id', compoundRouter.deleteCompound);

module.exports = router;