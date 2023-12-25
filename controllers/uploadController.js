const mutler = require('multer');
//const GridFsStorage = require('multer-gridfs-storage');
const {GridFsStorage} = require('multer-gridfs-storage');
const storage = new GridFsStorage({
    url:'mongodb+srv://desmond:dell2430@tom.u7ovfmj.mongodb.net/TOM',
    file:(req,file)=>{
        const match = ["image/png","image/jpeg"];
        if(match.indexOf(file.mimetype)===-1){
            const filename = `${Date.now()}-bezkoder-${file.originalname}`;
            return filename;
        }
        return{
            bucketName:"photos",
            filename:`${Date.now()}-bezkoder-${file.originalname}`
        }
    }
    
})
module.exports = mutler({storage});