const mongoose = require('mongoose')

const mongoURI =
  'mongodb+srv://deepakshiva:312000@cluster0.pb3djz1.mongodb.net/DeliciousDispatch?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log(`Connected to MongoDB at ${mongoose.connection.host}`)

    const fetched_data = await mongoose.connection.db
      .collection('food_items')
      .find({})
      .toArray()

    // Initialize foodCategory inside the scope of fetched_data
    const foodCategory = await mongoose.connection.db
      .collection('foodCategory')
      .find({})
      .toArray()

    global.foodCategory = foodCategory // Assign foodCategory to global variable

    global.food_items = fetched_data
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

module.exports = { mongoDB }
