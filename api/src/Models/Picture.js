import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  name: { type: String, required: true },
  src: { type: String, required: true }
});

const Picture = mongoose.model("Picture", PictureSchema);
export default Picture
