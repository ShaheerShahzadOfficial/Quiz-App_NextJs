import mongoose from "mongoose";

const connection={};

async function connect(){
  if(connection.isConnected){
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ShaheerShahzad:ShaheerDev@ecommerce.w8dyp.mongodb.net/QuizApp?retryWrites=true&w=majority")

  connection.isConnected= db.connections[0].readyState;
}

export default connect;