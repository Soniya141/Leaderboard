var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "17476",
        "ok": "17476",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4778",
        "ok": "4778",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3396",
        "ok": "3396",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4044",
        "ok": "4044",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6786",
        "ok": "6786",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11530",
        "ok": "11530",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14097",
        "ok": "14097",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 521,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1979,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.167",
        "ok": "104.167",
        "ko": "-"
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
        "ok": "2500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "17476",
        "ok": "17476",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4778",
        "ok": "4778",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3396",
        "ok": "3396",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4044",
        "ok": "4044",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6786",
        "ok": "6786",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11530",
        "ok": "11530",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14097",
        "ok": "14097",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 521,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1979,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.167",
        "ok": "104.167",
        "ko": "-"
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
