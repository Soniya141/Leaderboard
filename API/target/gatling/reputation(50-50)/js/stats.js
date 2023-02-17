var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1296",
        "ok": "1296",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1170",
        "ok": "1170",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1197",
        "ok": "1197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1261",
        "ok": "1261",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39,
    "percentage": 78
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.926",
        "ok": "0.926",
        "ko": "-"
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1296",
        "ok": "1296",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1170",
        "ok": "1170",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1197",
        "ok": "1197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1261",
        "ok": "1261",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39,
    "percentage": 78
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.926",
        "ok": "0.926",
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
