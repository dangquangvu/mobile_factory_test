module.exports = {
    check_start_time_validate_true: (start_time, about_time) => {
        let number_hour_end_time = about_time % 24;
        if (about_time > 24 && number_hour_end_time != 0) {
            let number_day = parseInt(about_time / 24);
            let end_time = number_hour_end_time + start_time;
            if (end_time >= 24) {
                number_day++;
                let end_time_real = end_time - 24;
                console.log(
                    "the time start is " +
                    start_time +
                    "h time end is " +
                    end_time_real +
                    "h of " +
                    number_day +
                    " day after!"
                );
            } else {
                console.log(
                    "the time start is " +
                    start_time +
                    "h time end is " +
                    end_time +
                    "h of " +
                    number_day +
                    " day after!"
                );
            }
        } else if (about_time == 24 || number_hour_end_time == 0) {
            let number_day = about_time / 24;
            if (number_day == 1) {
                console.log(
                    "the time start is " +
                    start_time +
                    "h time end is " +
                    start_time +
                    "h tomorrow! the time start is same the time end!"
                );
            } else if (about_time == 0) {
                console.log(" the time start is the time end of the day!");
            } else {
                console.log(
                    "the time start is " +
                    start_time +
                    "h time end is " +
                    start_time +
                    "h of " +
                    number_day +
                    " day after! the time start is same the time end!"
                );
            }
        } else {
            let end_time_total = about_time + start_time;
            if (end_time_total > 24) {
                let end_time = end_time_total - 24;
                console.log(
                    "the time start is " +
                    start_time +
                    "h and the time end is " +
                    end_time +
                    "h of tomorrow!"
                );
            } else {
                let end_time = start_time + about_time;
                (end_time - 24) == 0 ? console.log(
                    "the time start is " + start_time + " time end is 0h in day!"
                ) : console.log(
                    "the time start is " + start_time + "h and the time end is " + end_time + "h in day!"
                );
            }
        }
    },
    check_paramester_error: () => {
        console.log("paramester not enought or validate error please check again!");
    },
};