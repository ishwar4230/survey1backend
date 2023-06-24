const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    tags: [{

        type: String
    
    }]
});

module.exports = mongoose.model("submission", submissionSchema);
