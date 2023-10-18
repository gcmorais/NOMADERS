const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const ProductController = require('./app/controllers/ProductController');
const PlatformController = require('./app/controllers/PlatformController');

const router = Router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.delete('/user/:id', UserController.delete);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);

router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.delete('/product/:id', ProductController.delete);
router.post('/product', ProductController.store);
router.put('/product/:id', ProductController.update);

router.get('/platform', PlatformController.index);
router.get('/platform/:id', PlatformController.show);
router.delete('/platform/:id', PlatformController.delete);
router.post('/platform', PlatformController.store);
router.put('/platform/:id', PlatformController.update);

module.exports = router;
