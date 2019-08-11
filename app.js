Ti.UI.setBackgroundColor('#000');

var window = Ti.UI.createWindow();

var qrcode = require('qrcode').QRCode({
	typeNumber: -1,
	errorCorrectLevel: 'M'
});

var txt = 'Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit.%20Sed%20sit%20amet%20vulputate%20magna.%20Phasellus%20malesuada%20efficitur%20tellus%20id%20mattis.%20Phasellus%20egestas%20venenatis%20justo%2C%20blandit%20consequat%20enim%20porttitor%20sed.%20Nullam%20nec%20semper%20nisi.%20Nullam%20pharetra%20ullamcorper%20eros%2C%20a%20faucibus%20tortor%20rhoncus%20sit%20amet.%20Aliquam%20imperdiet%20aliquet%20consequat.';
Ti.API.info('txt.length:' + txt.length);


var qrcodeView = qrcode.createQRCodeView({
	width: 300,
	height: 300,
	margin: 4,
	text: decodeURIComponent(txt)
});

var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'qrcode.jpg');
f.write(qrcodeView.toBlob());



window.add(qrcodeView);

window.open();