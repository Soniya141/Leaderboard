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
        "total": "1955",
        "ok": "-",
        "ko": "1955"
    },
    "maxResponseTime": {
        "total": "6790",
        "ok": "-",
        "ko": "6790"
    },
    "meanResponseTime": {
        "total": "4150",
        "ok": "-",
        "ko": "4150"
    },
    "standardDeviation": {
        "total": "1098",
        "ok": "-",
        "ko": "1098"
    },
    "percentiles1": {
        "total": "3993",
        "ok": "-",
        "ko": "3993"
    },
    "percentiles2": {
        "total": "5111",
        "ok": "-",
        "ko": "5111"
    },
    "percentiles3": {
        "total": "5773",
        "ok": "-",
        "ko": "5773"
    },
    "percentiles4": {
        "total": "6268",
        "ok": "-",
        "ko": "6268"
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
        "total": "136.364",
        "ok": "-",
        "ko": "136.364"
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
        "total": "1955",
        "ok": "-",
        "ko": "1955"
    },
    "maxResponseTime": {
        "total": "6790",
        "ok": "-",
        "ko": "6790"
    },
    "meanResponseTime": {
        "total": "4150",
        "ok": "-",
        "ko": "4150"
    },
    "standardDeviation": {
        "total": "1098",
        "ok": "-",
        "ko": "1098"
    },
    "percentiles1": {
        "total": "3993",
        "ok": "-",
        "ko": "3993"
    },
    "percentiles2": {
        "total": "5111",
        "ok": "-",
        "ko": "5111"
    },
    "percentiles3": {
        "total": "5773",
        "ok": "-",
        "ko": "5773"
    },
    "percentiles4": {
        "total": "6268",
        "ok": "-",
        "ko": "6268"
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
        "total": "136.364",
        "ok": "-",
        "ko": "136.364"
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
