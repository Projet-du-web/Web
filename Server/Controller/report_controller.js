const {body, validationResult} = require('express-validator');
const Report = require('../Model/report_shema');
const User = require('../Model/user_shema');
const { v4: uuidv4 } = require('uuid');
const formidable = require('formidable');
const jwt = require('jsonwebtoken');


module.exports.reportValiations = [
   body('reporttitle').not().isEmpty().trim().withMessage('Title is required'),
   body('reportlocation').not().isEmpty().trim().withMessage('Location is required'),
   body('reportdescription').not().isEmpty().trim().withMessage('Description is required'),
];


module.exports.create_report = async (req,res) => {


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
     }
    
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
        
    }
   /*
   

        

        return res.status(200).json({ msg: " Problème create report" });

    }

            /*
            if (Object.keys(files).length !== 0) {
                const { type } = files.image;
                const split = type.split('/');
                const extension = split[1].toLowerCase();
                            if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
                                errors.push({ msg: `${extension} is not a valid extension` });
                            } else {
                                files.image.name = uuidv4() + '.' + extension;
                            }
            const newPath =__dirname + `/../../public/images/${files.image.name}`;

			fs.copyFile(files.image.path, newPath, async (error) => {
				if (!error) {
					try {
						const response = await Report.create({
							reporttitle,
							reportlocation,
                            reportdescription,
                            reportimage:files.image.name,
							userName: name,
							userId: id,
						});
						return res.status(200).json({
							msg: 'Your post has been created successfully',
							response,
						});
					} catch (error) {
						return res.status(500).json({ errors: error, msg: error.message });
					}
				}
			});
		}else{

            try {
                const response = await Report.create({
                    reporttitle,
                    reportlocation,
                    reportdescription,
                    userName: name,
                    userId: id,
                });
                return res.status(200).json({
                    msg: 'Your post has been created successfully',
                    response,
                });
            } catch (error) {
                return res.status(500).json({ errors: error, msg: error.message });
            }
        }

        */
