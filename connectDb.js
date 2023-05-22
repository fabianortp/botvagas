import mongoose from 'mongoose'

function connectDB () {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

export default connectDB
