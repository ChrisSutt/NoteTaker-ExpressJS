const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    const dbPath = path.join(__dirname, '../db/db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    res.json(db);
  });


  app.post('/api/notes', (req, res) => {
    const dbPath = path.join(__dirname, '../db/db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  
    const userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
  
    db.push(userNote);
    fs.writeFileSync(dbPath, JSON.stringify(db));
  
    res.json(userNote);
  });
  


  app.delete('/api/notes/:id', (req, res) => {
    const dbPath = path.join(__dirname, '../db/db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    const deleteNotes = db.filter(item => item.id !== req.params.id);

    fs.writeFileSync(dbPath, JSON.stringify(deleteNotes));
    res.json(deleteNotes);
  });
};
