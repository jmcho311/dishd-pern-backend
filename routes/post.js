const router = require('express').Router()
const ctrl = require('../controllers')

// PATH = /api/v1/post
router.get('/', ctrl.post.index)
router.get('/post/:category', ctrl.post.show)
router.get('/post/:name', ctrl.post.showLocation)
router.get('/post/:id', ctrl.post.showPost)
router.put('/post/:id', ctrl.post.update)
router.delete('/post/id', ctrl.post.destroy)
router.post('/post', ctrl.post.create)

module.exports = router
