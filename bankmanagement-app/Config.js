exports.config = {   
    seleniumAddress: 'http://localhost:4444/wd/hub',   
    specs: ['local_protractor_app_test.js'],   
    multiCapabilities: 
    [{     'browserName': 'chrome', 

    "chromeOptions": {
        binary: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: [], 
        extensions: [], 
      } 
}  ,
    
] 
    }