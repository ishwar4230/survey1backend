const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
   
    origin:String,
    destination:String,
    distance:Number,
    bus_cost:Number,
    bus_time:Number,
    car_cost:Number,
    car_time:Number,
    choice_matrix: [{

        type: [{

            type: Number
        
        }],
    
    }],
    tags: [{

        type: String
    
    }],

});

module.exports = mongoose.model("submission", submissionSchema);
