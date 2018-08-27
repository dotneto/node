'use strict';

let config = require('../config');
let sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async(to, subject, body) => {
  sendgrid.send({
      to: to,
      from: 'teste@st.neto',
      subject: subject,
      html: body
  })
};