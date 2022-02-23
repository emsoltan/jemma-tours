const mongoose = require("mongoose")
const slugify = require("slugify")

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour most have a name"],
        unique: true,
        trim: true,
        maxlength: [40, "A tour name most have less or equal 40 characters"],
        minlength: [10, "A tour name most have more or equal 10 characters"]
        //validate: [validator.isAlpha, "Tour name most only contain characters"]// does not work with space in text
    },
    slug: String,
    duration: {
        type: Number,
        required: [true, "A tour most have a duration"],
    },
    maxGroupSize: {
        type: Number,
        required: [true, "A tour most have a group size"],
    },
    difficulty: {
        type: String,
        required: [true, "A tour most have a difficulty"],
        enum: {                  // just for strings
            values: ["easy", "medium", "difficult"],
            message: "Difficulty is either: easy, medium, difficult"
        }
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, "Rating must be above 1.0"], //also works for dates
        max: [5, "Rating must be below or equal 5.0"],
        set: val => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, "A tour most have a price"]
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function (val) {
                //this only points to current doc on NEW document creation
                return val < this.price
            },
            message: "Discount price ({VALUE}) should be below regular price"
        }
    },
    summary: {
        type: String,
        required: [true, "A tour most have a summary"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, "A tour most have a cover image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false // hide this data from user
    },
    startDates: [Date],
    secretTour: {
        type: Boolean,
        default: false
    },
    startLocation: {
        // GeoJSON
        type: {
            type: String,
            default: "Point",
            enum: ["Point"]
        },
        coordinates: [Number],
        address: String,
        description: String
    },
    locations: [
        {
            type: {
                type: String,
                default: "Point",
                enum: ["Point"]
            },
            coordinates: [Number],
            address: String,
            description: String,
            day: Number
        }
    ],
    guides: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

// Improving search speed of MongoDB on most common fields
// tourSchema.index({ price: 1 })
tourSchema.index({ price: 1, ratingsAverage: -1 })
tourSchema.index({ slug: 1 })
tourSchema.index({ startLocation: "2dsphere" })

// VIRTUAL PROPERTIES
tourSchema.virtual("durationWeeks").get(function () {
    return this.duration / 7
})

// VIRTUAL POPULATE
tourSchema.virtual("reviews", {
    ref: "Review",
    foreignField: "tour",
    localField: "_id"
})

//DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true })
    next()
})

// QUERY MIDDLEWARE
//tourSchema.pre("find", function (next) { // if we just have find it will not work for findOne 
tourSchema.pre(/^find/, function (next) {
    this.find({ secretTour: { $ne: true } })
    this.start = Date.now()
    next()
})

tourSchema.post(/^find/, function (docs, next) {
    //console.log(docs)
    console.log(`Query took ${Date.now() - this.start} ms!`)
    next()
})

tourSchema.pre(/^find/, function (next) {
    this.populate({
        path: "guides",
        select: "-__v -passwordChangedAt" // do not show these fields in output
    })
    next()
})

const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour