const jwt = require('jsonwebtoken');
let genrateToken = function (data) {
    let finalData = JSON.stringify(data);
    let token = jwt.sign(finalData, "Moyan");
    return token;
}
module.exports=genrateToken;