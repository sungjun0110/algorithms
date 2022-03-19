/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set(); 
    emails.forEach(email => {
        let [local, domain] = email.split('@');
        local = local.replaceAll('.', '');
        local = local.split('+')[0];
        uniqueEmails.add(local + '@' + domain);
    })
    return uniqueEmails.size;
};