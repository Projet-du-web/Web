const {body, validationResult} = require('express-validator');
const RessourceSchema = require('../Model/ressource_shema');
const User = require('../Model/user_shema');
const { v4: uuidv4 } = require('uuid');
const formidable = require('formidable');
const jwt = require('jsonwebtoken');


module.exports.ressourceValiations = [
   body('description').not().isEmpty().trim().withMessage('Description is required'),
   body('location').not().isEmpty().trim().withMessage('Location is required'),
   body('Annomalies').not().isEmpty().trim().withMessage('Annomalies is required'),
];

module.exports.create_ressource = async (req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
     }
     
     
     
     try{
     const { title,description,location, Annomalies} = req.body;
     console.log(Annomalies.toString());
     
    /* const ressource = RessourceSchema.create({
          title :title,
          description : description,
          location : location,
          Annomalies: Annomalies
    });*/


    /*const RessourceId = ressource._id
    const findRessource = RessourceSchema.find({_id :RessourceId });
    
    if (findRessource){
        findRessource.url = `https://univ.rouen/Ressources/${RessourceId}`;
    }
    */
     
     return res.status(200).json({
        msg:'Your report has been created successfully',
    });
    } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
    }
}  


/*    
    
      console.log(req.body);
      
      const { reporttitle,reportlocation,reportdescription,reportimage} = req.body;

      const usertoken = req.headers.authorization;
      const token = usertoken.split(' ');
      const decoded = jwt.verify(token[1],'mystrongjwt');
      console.log("--------------------------------------");   
        try {
                const response = await Report.create({
                    reporttitle,
                    reportlocation,
                    reportdescription
                });


                const user = User.findOne({_id : decoded.user._id});
                if(user){
                    User.updateOne({ ReportCreated: [] }, response._id , function(err, res) {
                        if (err) throw err;
                        console.log("1 document updated");
                      });
                }

                return res.status(200).json({
                    msg: 'Your report has been created successfully',
                    response,
                });
        } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
        }  
        */