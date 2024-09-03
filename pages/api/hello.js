// pages/api/hello.js

export default function handler(req, res) {
  // Pastikan metode request adalah POST
  if (req.method === 'POST') {
    // Ambil data dari body request
    const { name, age } = req.body;

    // Validasi data
    if (name && age) {
      res.status(200).json({
        status: 'success',
        message: 'Data received',
        data: { name, age }
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

