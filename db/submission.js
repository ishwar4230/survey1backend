const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
   
    origin:String,
    destination:String,
    distance:Number,
    alternatives: [{type: String}],
    attributes: [{type : [{ type: String}]}],
    attributes_values: [{type : [{type : [{type : Number}]}]}],
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
