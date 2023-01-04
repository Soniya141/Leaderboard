var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "42",
        "ko": "58"
    },
    "minResponseTime": {
        "total": "6612",
        "ok": "6612",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "57694",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "43125",
        "ok": "19821",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "22545",
        "ok": "16548",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "12526",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "19282",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57092",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57633",
        "ko": "60001"
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
    "count": 42,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 58,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.087",
        "ok": "0.457",
        "ko": "0.63"
    }
},
contents: {
"req_proposal-d6511": {
        type: "REQUEST",
        name: "Proposal",
path: "Proposal",
pathFormatted: "req_proposal-d6511",
stats: {
    "name": "Proposal",
    "numberOfRequests": {
        "total": "100",
        "ok": "42",
        "ko": "58"
    },
    "minResponseTime": {
        "total": "6612",
        "ok": "6612",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "57694",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "43125",
        "ok": "19821",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "22545",
        "ok": "16548",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "12526",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "19282",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57092",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57633",
        "ko": "60001"
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
    "count": 42,
    "percentage": 42
},
    "group4": {
    "name": "failed",
    "count": 58,
    "percentage": 58
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.087",
        "ok": "0.457",
        "ko": "0.63"
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
