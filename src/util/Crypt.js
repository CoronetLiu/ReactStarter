let CryptoJS = require('crypto-js');
let key = 'coronet';
let iv = 'liuxz';
let crypConvert = {
    //加密
    encrypt: function (mesage) {
        let keyHex = CryptoJS.enc.Utf8.parse(key);
        let ivHex = CryptoJS.enc.Utf8.parse(iv);
        let encrypted = CryptoJS.DES.encrypt(mesage, keyHex, {
                iv: ivHex,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }
        );
        return encrypted.ciphertext.toString();
    },
    //解密
    decrypt: function (message) {
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var ivHex = CryptoJS.enc.Utf8.parse(iv);
        var decrypted = CryptoJS.DES.decrypt({
            ciphertext: CryptoJS.enc.Hex.parse(message)
        }, keyHex, {
            iv: ivHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
};
export default crypConvert;