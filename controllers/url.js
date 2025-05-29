    const URL = require("../models/url")
    const shortid = require('shortid'); //it will generate a word of asked length
    
    async function handleTogenrateNewShortURL(req,res) {
        const body = req.body;
        if(!body.URL) return res.status(400).json({Error : "URL needs to be entered"});
        const generated_id= shortid().toLowerCase();
    try{
        const result = await URL.create({         //Now  we will create the new shorten URL
            ShortId : generated_id,
            UserEnteredURL : body.URL,      //ye jo userenteredurl h ...yhi url pr hme nya shortid jo generate hua h usko redirect bhi krna h so we can also call irt redirected url 
            visitedHistory: [],  
            createdBy : req.user._id,     //(req.user came from /middlewares /user.js)
        })
        return res.render("home" , {
            id: generated_id,
        })
        //directly UI pr render kiye and id send kiye waha
    }
    catch(err){
        return res.status(500).json({ error: "DB Error", details: err.message });
        
    }
    }
    async function handleToRedirectURL(req,res) {
        const short_id = req.params.shortid;
        console.log("Received ShortId:", short_id);

        try {
            const entry = await URL.findOneAndUpdate(
                { ShortId: short_id },
                {
                    $push: {
                        visitedHistory: {
                            timestamp: Date.now(),
                        },
                    },
                },
                { new: true }
            );

            if (!entry) {
                console.log("No entry found for:", short_id);
                return res.status(404).json({ error: "Short URL not found" });
            }

            let url = entry.UserEnteredURL;
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "http://" + url;
            }

            console.log("Redirecting to:", url);

            return res.redirect(url);
            
        } catch (error) {
            console.error("Error during GET /:shortid:", error);
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }

    async function handleGetAnalytics(req,res) {
         const short_id = req.params.shortid;
         try{
         const result = await URL.findOne({ ShortId: short_id }); //if({short_id}) js assumes it as ({short_id : short_id}) but our chema has ShortId : short_id
         /*
         Always match the exact field names (case-sensitive) you defined in your Mongoose schema 
         when querying with .findOne, .findById, .updateOne, etc.
         */
         return res.json({
            totalClicks : result.visitedHistory.length,
            analytics : result.visitedHistory
         })
    }
        catch(error){
            console.error("Error :", error);
            return res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }
    

    module.exports = {  
        handleTogenrateNewShortURL,
        handleToRedirectURL,
        handleGetAnalytics,
    }