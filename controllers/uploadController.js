// const mutler = require('multer');
// const {GridFsStorage} = require('multer-gridfs-storage');
// const storage = new GridFsStorage({
//     url: process.env.MONGO_URL,
//     file:(req,file)=>{
//         const match = ["image/png","image/jpeg"];
//         if(match.indexOf(file.mimetype)===-1){
//             const filename = `${Date.now()}-bezkoder-${file.originalname}`;
//             return filename;
//         }
//         return{
//             bucketName:"photos",
//             filename:`${Date.now()}-bezkoder-${file.originalname}`
//         }
//     }
    
// })
// module.exports = mutler({storage});