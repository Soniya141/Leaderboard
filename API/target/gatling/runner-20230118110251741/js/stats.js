var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2391",
        "ok": "2391",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "727",
        "ok": "727",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "434",
        "ok": "434",
        "ko": "-"
    },
    "percentiles1": {
        "total": "949",
        "ok": "949",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1145",
        "ok": "1145",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1197",
        "ok": "1197",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1263",
        "ok": "1263",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 999,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 917,
    "percentage": 46
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 84,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.519",
        "ok": "18.519",
        "ko": "-"
    }
},
contents: {
"req_reputation-8d9be": {
        type: "REQUEST",
        name: "Reputation",
path: "Reputation",
pathFormatted: "req_reputation-8d9be",
stats: {
    "name": "Reputation",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1100",
        "ok": "1100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2391",
        "ok": "2391",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1158",
        "ok": "1158",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1145",
        "ok": "1145",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1171",
        "ok": "1171",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1217",
        "ok": "1217",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1331",
        "ok": "1331",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 916,
    "percentage": 92
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 84,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.259",
        "ok": "9.259",
        "ko": "-"
    }
}
    },"req_dynamic-scoring-2589c": {
        type: "REQUEST",
        name: "Dynamic Scoring",
path: "Dynamic Scoring",
pathFormatted: "req_dynamic-scoring-2589c",
stats: {
    "name": "Dynamic Scoring",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles1": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles2": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "percentiles3": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles4": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.259",
        "ok": "9.259",
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
