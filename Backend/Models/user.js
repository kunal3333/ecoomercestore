import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true, 
        trim: true 
      },
    lastname: {
    type: String,
    required: true,
    unique: true, 
    trim: true 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', userSchema);
