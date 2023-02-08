const { Router } = require('express')
const routes = Router()

const UserController = require('../Controllers/UserController')

const upload = require("../config/multer");
const PictureController = require("../controllers/pictureController");

routes.get('/', UserController.index)
routes.post('/', UserController.create)
routes.put('/:id', UserController.updateUser)
routes.delete('/:id', UserController.delete)

routes.post("/img", upload.single("image"), PictureController.create);
routes.get("/img", PictureController.findAll);
routes.delete("/img/:id", PictureController.remove);

module.exports = routes
