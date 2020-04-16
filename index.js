let controller = require("./controller");

let main = function(start_time, about_time) {
    let start_time_hour = parseInt(start_time);
    let about_time_hour = parseInt(about_time);
    if (start_time_hour >= 0 && start_time_hour <= 23 && about_time_hour >= 0) {
        controller.check_start_time_validate_true(start_time_hour, about_time_hour);
    } else {
        controller.check_paramester_error();
    }
};

// run code 
main(00000);

/**
 * name : ダン・クアン・ブー
 */