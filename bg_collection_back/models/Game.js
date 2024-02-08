const mongoose = require('mongoose');

const sleeveSchema = new mongoose.Schema({
    brand: String,
    size: String,
    name: String,
    quantity: Number,
  });

const gameSchema = new mongoose.Schema({
  name: {type: String,required: true,},
  pictures: {type: [String],},                                      // Assuming an array of picture URLs
  baseGameId: {type: mongoose.Schema.Types.ObjectId,ref: 'Game',},  // Reference to another Game for expansions
  state: {type: String, default: "Lacrado"},                        // You can define specific status options (e.g., "Owned", "Wishlist", "Played", etc.)
  tags: {type: [String],},                                          // List of tags for filtering and recommendations
  expansions: {type: [mongoose.Schema.Types.ObjectId],ref: 'Game',},// References to other Game documents for expansions
  purchaseLocation: {type: String,},
  originalPrice: {type: Number,},
  currentPrice: {type: Number,},
  minPlayers: {type: Number,},
  maxPlayers: {type: Number,},
  usesSleeve: {type: Boolean,},
  sleeves: {type: [sleeveSchema],},
  sleeveStatus: [{size: String, isSleeved: Boolean,},],
  silicaGelIndicator: {type: Boolean,},
  rafaelPlayedIndicator: {type: Boolean,},
  sabrinaPlayedIndicator: {type: Boolean,},
});

const Sleeve = mongoose.model('Sleeve', sleeveSchema);
const Game = mongoose.model('Game', gameSchema);

module.exports = { Sleeve, Game };