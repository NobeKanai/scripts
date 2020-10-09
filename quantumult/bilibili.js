/**
 * ^https?://app\.bilibili\.com/x/v2/feed/index
 */

let obj = JSON.parse($response.body);

obj.data.items = obj.data.items.filter(item => !item.hasOwnProperty('ad_info'));

$done(JSON.stringify(obj));