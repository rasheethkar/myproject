// server.js
const express = require('express');
const multer  = require('multer');
const fs      = require('fs');
const path    = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// ─── 1. Serve static assets ─────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── 2. Handle complaint submissions ────────────────────────────
app.post('/api/complaints', upload.single('file'), (req, res) => {
  const dbFile = path.join(__dirname, 'complaints.json');
  let all = [];

  // 2.1 Read existing complaints (if any)
  if (fs.existsSync(dbFile)) {
    try {
      all = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    } catch (err) {
      console.error('Error parsing JSON:', err);
      all = [];
    }
  }

  // 2.2 Build new complaint object
  const newComplaint = {
    id: Date.now(),                  // simple unique ID
    name: req.body.name,             // from <input name="name">
    contact: req.body.contact,       // from <input name="contact">
    category: req.body.category,     // from <select name="category">
    description: req.body.description, // from <textarea name="description">
    file: req.file ? req.file.filename : null,
    timestamp: new Date().toISOString()
  };

  // 2.3 Append and save back to disk
  all.push(newComplaint);
  fs.writeFileSync(dbFile, JSON.stringify(all, null, 2));

  // 2.4 Respond with the new reference ID
  res.json({ complaintId: newComplaint.id });
});

// ─── 3. Expose all complaints ────────────────────────────────────
app.get('/api/complaints', (req, res) => {
  const dbFile = path.join(__dirname, 'complaints.json');
  let all = [];

  if (fs.existsSync(dbFile)) {
    try {
      all = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    } catch (err) {
      console.error('Error parsing JSON:', err);
      all = [];
    }
  }

  res.json(all);
});

// ─── 4. Start the server ────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
