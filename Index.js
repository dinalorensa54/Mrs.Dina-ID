const express = membutuhkan ('express');
const getToken = membutuhkan ('./ token');
const PORT = process.env.PORT || 5000;

aplikasi const = express ();
app.use (express.static ('public'));
app.get ('/', (req, res) => {
  res.sendFile (path.resolve (__ dirname, 'public', 'index.html'));
});
app.get ('/ auth', (req, res) => {
  const q = req.query;
  if (q.id && q.pass) {
    getToken (q.id, q.pass). lalu (e => {
      if (e.access_token) res.status (200) .json ({loc: e.access_token});
      lain jika (e.error_msg) res.status (400) .json ({error: e.error_msg});
      else res.status (400) .json ({kesalahan: 400});
    });
  } lain {
    res.status (400) .json ({kesalahan: 400});
  }
});

app.listen (PORT, () => console.log (`salin tautan ini di browser http: // localhost: 5000`));
