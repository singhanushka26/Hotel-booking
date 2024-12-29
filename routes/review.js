const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


//REVIEWS
//POST Route for Reviews
router.post("/", isLoggedIn, validateReview, wrapAsync( async (req, res) => {
  try {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).send("Listing not found");
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    // Initialize reviews array if undefined
    if (!listing.reviews) {
      listing.reviews = [];
    }
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "New review created");

    res.redirect(`/listings/${listing._id}`);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).send("Internal server error");
  }
}));

//DELETE review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(async (req, res) => {
  let {id, reviewId} = req.params;

  await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review deleted");

  res.redirect(`/listings/${id}`);
}))

module.exports = router;