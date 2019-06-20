// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

// Exporting our resource model
module.exports = mongoose.model('Resource', ResourceSchema);