import mongoose from "mongoose";

// Creating a Schema
const Schema = mongoose.Schema
const beerSchema = new Schema(
    {
        name: {
            type : String,
            required: [true, "Please complete the field"]
        },
        description: {
            type : String,
            required: [true, "Please complete the field"]
        },
        img:
    {
        data: Buffer,
        contentType: String
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const BeerModel = mongoose.models.Beer || mongoose.model("Beer", beerSchema)
