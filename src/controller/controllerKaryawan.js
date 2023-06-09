const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (err) => {
  console.log(err);
});

module.exports = {
  getDataKaryawan(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(`SELECT * FROM karyawan;`, function (error, results) {
        if (error) throw error;
        res.send({
          success: true,
          message: "Success get data",
          data: results,
        });
      });
      connection.release();
    });
  },

  getDataKaryawanById(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `SELECT * FROM karyawan WHERE id = ?;`,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success get data by id",
            data: results,
          });
        }
      );
      connection.release();
    });
  },

  addDataKaryawan(req, res) {
    let data = {
      nama: req.body.nama,
      umur: req.body.umur,
      alamat: req.body.alamat,
      jabatan: req.body.jabatan,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        ` INSERT INTO karyawan SET ?`,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success add data",
          });
        }
      );
      connection.release();
    });
  },

  editDataKaryawan(req, res) {
    let dataEdit = {
      nama: req.body.nama,
      umur: req.body.umur,
      alamat: req.body.alamat,
      jabatan: req.body.jabatan,
    };
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        ` UPDATE karyawan SET ? WHERE id = ?;`,
        [dataEdit, id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success edit data",
          });
        }
      );
      connection.release();
    });
  },

  deleteDataKaryawan(req, res) {
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `DELETE FROM karyawan WHERE id=?;`,
        [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: "Success delete data",
          });
        }
      );
      connection.release();
    });
  },
};
