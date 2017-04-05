// sqlMap.js
var tab_name = {
queryDate: '(date(datetime) BETWEEN ? AND ?)',
queryTime: '(time(datetime) BETWEEN ? AND ?)',
querylocation: '(location = ?)',
GET:'select * from co2 where ',
Q:'select * from co2 where ',
dtl:"date(datetime) = ? and time(datetime) = ? and location=?",
id:"idCO2 = ?",
Del:'Delete from Res where rescode = ?',
Add:'INSERT INTO `hengsha`.`Res` (`idRes`, `rescode`, `retvar`) VALUES (NULL,?,?)',
Choose: 'select * from Res where rescode = ?'
};

module.exports = tab_name;
