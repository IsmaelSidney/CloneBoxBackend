const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    path: {
        type : String,
        required : true
    }
},{
    timestamps: true,
    toObject : {virtuals: true},
    toJSON: {virtuals: true}
});
File.virtual('url').get(function () {
   // return `${config.URL}/files/${encodeURIComponent(this.path)}`;
    return `http://localhost:3000/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model('File', File);