import mongoose from 'mongoose';

const connectToDatebase=async()=>{
  try{
    mongoose.set('strictQuery', false)
    const connect= await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);    
}
    
    catch(err){
        console.log(err);
    }
}
export default connectToDatebase;
