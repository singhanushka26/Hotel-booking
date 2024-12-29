const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: String,
    description: String,
    image: {
        filename: { type: String, default: "default-filename" },
        url: { type: String, default: "https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" }
    },
    // image: {
        // type: String,
        // default: "https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        // set: (v) => v === "" ? "https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" : v,
        // },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;