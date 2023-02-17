var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "4999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "875",
        "ok": "875",
        "ko": "10338"
    },
    "maxResponseTime": {
        "total": "10338",
        "ok": "10116",
        "ko": "10338"
    },
    "meanResponseTime": {
        "total": "1884",
        "ok": "1883",
        "ko": "10338"
    },
    "standardDeviation": {
        "total": "1231",
        "ok": "1225",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1313",
        "ok": "1312",
        "ko": "10338"
    },
    "percentiles2": {
        "total": "2462",
        "ok": "2461",
        "ko": "10338"
    },
    "percentiles3": {
        "total": "4428",
        "ok": "4425",
        "ko": "10338"
    },
    "percentiles4": {
        "total": "5882",
        "ok": "5867",
        "ko": "10338"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2221,
    "percentage": 44
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2778,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.619",
        "ok": "47.61",
        "ko": "0.01"
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
        "total": "5000",
        "ok": "4999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "875",
        "ok": "875",
        "ko": "10338"
    },
    "maxResponseTime": {
        "total": "10338",
        "ok": "10116",
        "ko": "10338"
    },
    "meanResponseTime": {
        "total": "1884",
        "ok": "1883",
        "ko": "10338"
    },
    "standardDeviation": {
        "total": "1231",
        "ok": "1225",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1313",
        "ok": "1312",
        "ko": "10338"
    },
    "percentiles2": {
        "total": "2462",
        "ok": "2461",
        "ko": "10338"
    },
    "percentiles3": {
        "total": "4428",
        "ok": "4425",
        "ko": "10338"
    },
    "percentiles4": {
        "total": "5882",
        "ok": "5867",
        "ko": "10338"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2221,
    "percentage": 44
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2778,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.619",
        "ok": "47.61",
        "ko": "0.01"
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
