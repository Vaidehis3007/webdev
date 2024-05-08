// MongoDB password - c17brCdYBEdcW6Gy
import mongoose from "mongoose"



export const Connection = async () => {
    const password = "c17brCdYBEdcW6Gy";
    const URL = `mongodb+srv://sahuvs:${password}@blog-app.h0zmlfw.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
    try {
        
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the databse ', error);
    }
}            

export default Connection;