var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "0",
        "ko": "1500"
    },
    "minResponseTime": {
        "total": "2037",
        "ok": "-",
        "ko": "2037"
    },
    "maxResponseTime": {
        "total": "10206",
        "ok": "-",
        "ko": "10206"
    },
    "meanResponseTime": {
        "total": "6864",
        "ok": "-",
        "ko": "6864"
    },
    "standardDeviation": {
        "total": "2207",
        "ok": "-",
        "ko": "2207"
    },
    "percentiles1": {
        "total": "7163",
        "ok": "-",
        "ko": "7163"
    },
    "percentiles2": {
        "total": "8812",
        "ok": "-",
        "ko": "8812"
    },
    "percentiles3": {
        "total": "9666",
        "ok": "-",
        "ko": "9666"
    },
    "percentiles4": {
        "total": "9818",
        "ok": "-",
        "ko": "9818"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "107.143",
        "ok": "-",
        "ko": "107.143"
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
        "ok": "0",
        "ko": "1500"
    },
    "minResponseTime": {
        "total": "2037",
        "ok": "-",
        "ko": "2037"
    },
    "maxResponseTime": {
        "total": "10206",
        "ok": "-",
        "ko": "10206"
    },
    "meanResponseTime": {
        "total": "6864",
        "ok": "-",
        "ko": "6864"
    },
    "standardDeviation": {
        "total": "2207",
        "ok": "-",
        "ko": "2207"
    },
    "percentiles1": {
        "total": "7163",
        "ok": "-",
        "ko": "7163"
    },
    "percentiles2": {
        "total": "8812",
        "ok": "-",
        "ko": "8812"
    },
    "percentiles3": {
        "total": "9666",
        "ok": "-",
        "ko": "9666"
    },
    "percentiles4": {
        "total": "9818",
        "ok": "-",
        "ko": "9818"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "107.143",
        "ok": "-",
        "ko": "107.143"
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
