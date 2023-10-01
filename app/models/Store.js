const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const slug = require('slugs');
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'please enter a store name',
    },
    slug: String,
    description: {
        type: String,
        trim: true,
    },
    tags: [String],
    created: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: {
            type: String,
            default: 'Point',
        },
        coordinates: [{
            type: Number,
            required: 'You must supply cooridantes.',
        }],
        address: {
            type: String,
            required: 'You must provide an address.'
        },
    },
});

storeSchema.pre('save', function (next) {
    if(!this.isModified('name')) {
        next();
        return;
    }
    this.slug = slug(this.name);
    next();
    
    // TODO enforce unique slugs
});

module.exports = mongoose.model('Store', storeSchema);