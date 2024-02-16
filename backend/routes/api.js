const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const clientController = require("../controllers/clientController");
//const leadController = require("../controllers/leadController");
//const productController = require("../controllers/productController");

//_______________________________ Admin management_______________________________

router.route("/admin/create").post(catchErrors(adminController.create));
router.route("/admin/read/:id").get(catchErrors(adminController.read));
router.route("/admin/update/:id").patch(catchErrors(adminController.update));
router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
router.route("/admin/search").get(catchErrors(adminController.search));
router.route("/admin/list").get(catchErrors(adminController.list));
router
  .route("/admin/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));

//_____________________________________ API for clients __________________________
router.route("/client/create").post(catchErrors(clientController.create));
router.route("/client/read/:id").get(catchErrors(clientController.read));
router.route("/client/update/:id").patch(catchErrors(clientController.update));
router.route("/client/delete/:id").delete(catchErrors(clientController.delete));
router.route("/client/search").get(catchErrors(clientController.search));
router.route("/client/list").get(catchErrors(clientController.list));

/*
//_____________________________________ API for leads ___________________________
router.route("/lead/create").post(catchErrors(leadController.create));
router.route("/lead/read/:id").get(catchErrors(leadController.read));
router.route("/lead/update/:id").patch(catchErrors(leadController.update));
router.route("/lead/delete/:id").delete(catchErrors(leadController.delete));
router.route("/lead/search").get(catchErrors(leadController.search));
router.route("/lead/list").get(catchErrors(leadController.list));

//_____________________________________ API for products ___________________________
router.route("/product/create").post(catchErrors(productController.create));
router.route("/product/read/:id").get(catchErrors(productController.read));
router
  .route("/product/update/:id")
  .patch(catchErrors(productController.update));
router
  .route("/product/delete/:id")
  .delete(catchErrors(productController.delete));
router.route("/product/search").get(catchErrors(productController.search));
router.route("/product/list").get(catchErrors(productController.list));
(*/
router.route("/routes").get(function () {
  let get = app._router.stack.filter(r => r.route && r.route.methods.get).map(r => r.route.path);
  let post = app._router.stack.filter(r => r.route && r.route.methods.post).map(r => r.route.path);
  res.send({ get: get, post: post });
});  

module.exports = router;
