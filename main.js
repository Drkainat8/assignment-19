// assignment 19 from ex 14 through 18 tell number of people you are inviting
var guestlist = ['hina', 'tooba', 'fatima', 'kainat', 'ali', 'hadi'];
//print a message that you can invite only two people
console.log("unfortunately dinner table won't arrive so we can invite only two people for dinner");
//remove guest from pop method until 2 remain in list letting them know one by one that ou are not invited 
while (guestlist.length > 2) {
    var removedguestlist = (guestlist.pop());
    if (removedguestlist !== undefined) {
        console.log("sorry ".concat(removedguestlist, " we can't invite you for a dinner"));
    }
}
//tell the remaining 2 guest that you are still invted for dinner 
guestlist.forEach(function (invitation) {
    console.log("dear ".concat(invitation, " you are still invited for dinner"));
});
//removing rest of 2 guest from list
guestlist.splice(0, guestlist.length);
console.log(guestlist);
//print empty array 
console.log("updated guest list", guestlist);
