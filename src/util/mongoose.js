//để xử lí truy cập các attribute của object của mongoDB
//có 2 hàm, 1 hàm xử lí khi input là array gồm nhiều objects
//hàm xử lí khi input là 1 object

module.exports = {
    multipleMongooseToObjects: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}