var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2495",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "14133"
    },
    "maxResponseTime": {
        "total": "17378",
        "ok": "17378",
        "ko": "14185"
    },
    "meanResponseTime": {
        "total": "5128",
        "ok": "5110",
        "ko": "14157"
    },
    "standardDeviation": {
        "total": "3730",
        "ok": "3711",
        "ko": "20"
    },
    "percentiles1": {
        "total": "4061",
        "ok": "4013",
        "ko": "14157"
    },
    "percentiles2": {
        "total": "7499",
        "ok": "7480",
        "ko": "14174"
    },
    "percentiles3": {
        "total": "12148",
        "ok": "12130",
        "ko": "14183"
    },
    "percentiles4": {
        "total": "15112",
        "ok": "15113",
        "ko": "14185"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 552,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1943,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.167",
        "ok": "103.958",
        "ko": "0.208"
    }
},
contents: {
"req_edit-proposal-45b16": {
        type: "REQUEST",
        name: "Edit Proposal",
path: "Edit Proposal",
pathFormatted: "req_edit-proposal-45b16",
stats: {
    "name": "Edit Proposal",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2495",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "14133"
    },
    "maxResponseTime": {
        "total": "17378",
        "ok": "17378",
        "ko": "14185"
    },
    "meanResponseTime": {
        "total": "5128",
        "ok": "5110",
        "ko": "14157"
    },
    "standardDeviation": {
        "total": "3730",
        "ok": "3711",
        "ko": "20"
    },
    "percentiles1": {
        "total": "4061",
        "ok": "4013",
        "ko": "14157"
    },
    "percentiles2": {
        "total": "7499",
        "ok": "7480",
        "ko": "14174"
    },
    "percentiles3": {
        "total": "12148",
        "ok": "12130",
        "ko": "14183"
    },
    "percentiles4": {
        "total": "15112",
        "ok": "15113",
        "ko": "14185"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 552,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1943,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.167",
        "ok": "103.958",
        "ko": "0.208"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
