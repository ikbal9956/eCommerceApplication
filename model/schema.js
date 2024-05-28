import mongoose from "mongoose";

// const { Schema } = mongoose;

const userSchema=new mongoose.Schema({
  firstName: {
    type : String,
    required:true,
    minLength:[3,"Frist name must contain at least three character!"],
    maxLength:[30,"First name connot exceed to 30 character!"]
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least three characters!"],
    maxLength: [30, "Last name cannot exceed 30 characters!"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
    minLength: [6, "Pin code must contain at least six digits!"],
    maxLength: [6, "Pin code cannot exceed six digits!"],
  },
  
})


const User = mongoose.model('User', userSchema);

export default User;