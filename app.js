var request = require('request');

var urls = [];
urls[0] = "http://puppygifs.tumblr.com/api/read/json";
urls[1] = "https://stackoverflow.com/questions/8292050/is-there-any-publically-accessible-json-data-source-to-test-with-real-world-data";
urls[2] = "https://www.google.com";
urls[3] = "http://www.devsanil.com";
function getSum(n1, n2, callback) {

    
    if(typeof callback === 'undefined') {
        callback = function() {

        };
    };

    var isAnyNegative = function () {
        return n1 < 0 || n2 < 0;
    }

    var promise = new Promise(function (resolve, reject) {
        if (isAnyNegative()) {
            reject(Error("Negatives not supported"));
        }


        var rn = Math.floor(Math.random() * 3) + 0 ;


        var url = urls[rn];

        request(url,function(error, response, body){
            resolve(n1 + n2);
            callback(n1 + n2);
        });


    });
    return promise;




   
}





function randomize(fx){
    var rn = Math.floor(Math.random() * 6) + 1 ;
    r("Delay : "+rn);
    setTimeout(fx,rn*1000);
}





function r(v){
    console.log(v);
}




function getSquare(n){
    
    var promise = new Promise(function (resolve, reject) {
        if (n<50) {
            reject(Error("N is less than 50"));
        }
        resolve(n*n);
    });

    return promise;
}


var callback = function(d){
    r("External call " + d);
}

getSum(1,0, callback);
getSum(1,1, callback);
getSum(1,2, callback);
getSum(1,3, callback);

getSum(1, 0).then(
        function (result) {
            r("then 1 :")
            console.log(result);
            return getSum(1, 1);
        },
        function (error) {
            r("then error 1 :")
            console.log(error);
        }
    ).then(
        function (result) {
            r("then 2 :")
            console.log(result);
            return getSum(1, 2);
        },
        function (error) {
            r("then error 2 :")
            console.log(error);
        }
    ).then(
        function (result) {
            r("then 3 :")
            console.log(result);
            return getSum(1, 3);
        },
        function (error) {
            r("then error 3 :")
            console.log(error);
        }
    )
    .then(
        function (result) {

            r("then 4 :")
            console.log(result);

            var s = getSquare(result).then(
                function (result){
                    r("then 4.1 :")
                    r("Square : "+result);
                },
                function (error){
                    r("then error 4.1 :")
                    r("Square Error : "+ error);
                }
            );
            
        },
        function (error) {
            r("then error 4 :")
            console.log(error);
        }
    );


console.log("End of script "); 