const router = require("express").Router();
const { karyawan } = require("../controller");
// import karyawan from "../controller/controllerKaryawan";

router.get("/karyawan", karyawan.getDataKaryawan);

router.get("/karyawan/:id", karyawan.getDataKaryawanById);

router.post("/karyawan/add", karyawan.addDataKaryawan);

router.post("/karyawan/edit", karyawan.editDataKaryawan);

router.post("/karyawan/delete", karyawan.deleteDataKaryawan);

module.exports = router;
