const { Sequelize } = require("sequelize");
const { development } = require("../config/config.json");

//อันนี้เป็นส่วนที่ใช้ในการบอก Sequelize ว่าเราจะ connect ไปที่ไหน
const sequelize = new Sequelize(development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//ส่วนนี้เป็นการ import model ของ table ใน database เข้ามาเพื่อตั้งต่า relation นะครับ
db.user = require("../models/user")(sequelize, Sequelize);

module.exports = db;
