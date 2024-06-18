import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  clerkId: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  image: {type: String},
  role: {type: String, enum: ["user", "admin"], default: "user"},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});
  
const User = models.User || model('User', UserSchema);

export default User;