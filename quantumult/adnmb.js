let body = $response.body;
let obj = JSON.parse(body);

let replys = obj.replys.filter(reply => reply.id != 9999999);

obj.replys = replys;
$done(body);