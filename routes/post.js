const router = require('express').Router()
const ctrl = require('../controllers')

// PATH = /api/v1/post
router.get('/', ctrl.post.index)
router.get('/category/:category', ctrl.post.show)
router.get('/location/:locationName', ctrl.post.showLocation)
router.get('/dish/:dishName', ctrl.post.showDish)
router.get('/:id', ctrl.post.showPost)

router.post('/', ctrl.post.create)
router.put('/:id', ctrl.post.update)
router.delete('/:id', ctrl.post.destroy)

module.exports = router
