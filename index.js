const nodemailer = require('nodemailer');
const smtpTransport = nodemailer.createTransport({
    service: 'GMail',
    auth: {
        user: 'email',
        pass: 'passsword'
    }
});
smtpTransport.sendMail({
    from: 'Name <email>',
    to: 'Name <email>',
    subject: 'Subject',
    html: '<h2>Message</h2>'
}, (err, res) => {
    if(err) {
        throw err;
    }
    else {
        console.log('Message sent');
    }
    smtpTransport.close(0); // close connections
});