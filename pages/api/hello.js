// pages/api/hello.js

function xorEncryptDecrypt(input, key) {
  const inputBytes = new TextEncoder().encode(input);
  const keyBytes = new TextEncoder().encode(key);
  const outputBytes = new Uint8Array(inputBytes.length);
  for (let i = 0; i < inputBytes.length; i++) {
    outputBytes[i] = inputBytes[i] ^ keyBytes[i % keyBytes.length];
  }
  return new TextDecoder().decode(outputBytes);
}

export default function handler(req, res) {
  // Pastikan metode request adalah POST
  if (req.method === 'POST') {
    // Ambil data dari body request
    const { code, key } = req.body;

    // Validasi data
    if (code && key) {
      const encrypted = xorEncryptDecrypt(code, key);
      res.status(200).json({
        status: 'success',
        message: 'Data encrypted',
        data: encrypted
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: 'Invalid data'
      });
    }
  } else {
    res.status(405).json({
      status: 'error',
      message: 'Method not allowed'
    });
  }
}

