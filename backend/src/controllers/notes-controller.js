const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNote = (req, res) => res.json({message: 'Note saved'});

notesCtrl.getNote = (req, res) => res.json({title: 'Title1'});

notesCtrl.updateNote = (req, res) => res.json({message: 'Note updated'});

notesCtrl.deleteNote = (req, res) => res.json({message: 'Note deleted'});

module.exports = notesCtrl;