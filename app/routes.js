
const unirest = require('unirest');
module.exports = function(app) {
    

    var localHeader={};
    var fileHeader={};
    localHeader['Content-Type']='application/json';
    fileHeader['Content-Type']='multipart/form-data';
    var CommonURl = "http://localhost:8080/"

       app.post('/api/uploadRepairRequest',function(req,res){
         
         unirest
            .post(CommonURl+'cartisan/main/vehicle/repair')
            .headers(localHeader)
            .type('json')
            .send(req.body)
            .end(function (response) {
                console.log(response.body);

                if(response.body!==null && response.body!==undefined && response.body.errorCode===undefined)
                res.send(response.body);
                else
                res.status(500).send(response.body.errorMessage);
            })

    });

   app.post('/api/multipleImageupload', function(req, res) {
        
        var imageUploadUrl = CommonURl + 'cartisan/main/image';
        console.log(req.files);
        var error = {};

        // error.message = "No files were uploaded";

        // var imageFile = req.files.image;

        // if (!req.files || !imageFile) {
        //     res.send(JSON.stringify(error));
        //     return;
        // }
        // var uploadPath = imageFile.name;
        // imageFile.mv(uploadPath, function(err) {
        //     if (err)
        //         return res.status(500).send(err);

        //     unirest.post(imageUploadUrl)
        //         .headers(fileHeader)
        //         .attach('image', uploadPath)
        //         .end(function(response) {
        //             fs.unlinkSync(uploadPath);

        //            if(response.body!==null && response.body!==undefined && response.body.errorCode===undefined)
        //               res.send(response.body);
        //         else
        //              res.status(500).send(response.body.errorMessage);
        //         });

        // });
    });



    app.get('*', function(req, res) {
        res.sendfile('public/index.html');
    });

};