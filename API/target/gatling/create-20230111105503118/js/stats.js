var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1234",
        "ko": "266"
    },
    "minResponseTime": {
        "total": "2641",
        "ok": "2641",
        "ko": "9194"
    },
    "maxResponseTime": {
        "total": "21245",
        "ok": "21245",
        "ko": "16692"
    },
    "meanResponseTime": {
        "total": "13329",
        "ok": "13410",
        "ko": "12956"
    },
    "standardDeviation": {
        "total": "3529",
        "ok": "3823",
        "ko": "1498"
    },
    "percentiles1": {
        "total": "14151",
        "ok": "14790",
        "ko": "13284"
    },
    "percentiles2": {
        "total": "15714",
        "ok": "15931",
        "ko": "13615"
    },
    "percentiles3": {
        "total": "17905",
        "ok": "17954",
        "ko": "15172"
    },
    "percentiles4": {
        "total": "18807",
        "ok": "18896",
        "ko": "15239"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1234,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 266,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "49.36",
        "ko": "10.64"
    }
},
contents: {
"req_fetch-contribut-d95e0": {
        type: "REQUEST",
        name: "Fetch contribution",
path: "Fetch contribution",
pathFormatted: "req_fetch-contribut-d95e0",
stats: {
    "name": "Fetch contribution",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1234",
        "ko": "266"
    },
    "minResponseTime": {
        "total": "2641",
        "ok": "2641",
        "ko": "9194"
    },
    "maxResponseTime": {
        "total": "21245",
        "ok": "21245",
        "ko": "16692"
    },
    "meanResponseTime": {
        "total": "13329",
        "ok": "13410",
        "ko": "12956"
    },
    "standardDeviation": {
        "total": "3529",
        "ok": "3823",
        "ko": "1498"
    },
    "percentiles1": {
        "total": "14151",
        "ok": "14790",
        "ko": "13284"
    },
    "percentiles2": {
        "total": "15714",
        "ok": "15931",
        "ko": "13615"
    },
    "percentiles3": {
        "total": "17905",
        "ok": "17954",
        "ko": "15172"
    },
    "percentiles4": {
        "total": "18807",
        "ok": "18896",
        "ko": "15239"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1234,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 266,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "49.36",
        "ko": "10.64"
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
