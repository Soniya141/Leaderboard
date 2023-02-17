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
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "36363",
        "ok": "36363",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7647",
        "ok": "7647",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8119",
        "ok": "8119",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3234",
        "ok": "3234",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13267",
        "ok": "13267",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24413",
        "ok": "24413",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29339",
        "ok": "29339",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 108,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1892,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.667",
        "ok": "26.667",
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
        "total": "1104",
        "ok": "1104",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29338",
        "ok": "29338",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2380",
        "ok": "2380",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1857",
        "ok": "1857",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1766",
        "ok": "1766",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2745",
        "ok": "2745",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5528",
        "ok": "5528",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9758",
        "ok": "9758",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 108,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 892,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.333",
        "ok": "13.333",
        "ko": "-"
    }
}
    },"req_get-contributio-63027": {
        type: "REQUEST",
        name: "get contributions",
path: "get contributions",
pathFormatted: "req_get-contributio-63027",
stats: {
    "name": "get contributions",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2233",
        "ok": "2233",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "36363",
        "ok": "36363",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12914",
        "ok": "12914",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8538",
        "ok": "8538",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13214",
        "ok": "13214",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20039",
        "ok": "20039",
        "ko": "-"
    },
    "percentiles3": {
        "total": "26684",
        "ok": "26684",
        "ko": "-"
    },
    "percentiles4": {
        "total": "31356",
        "ok": "31356",
        "ko": "-"
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
    "count": 1000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.333",
        "ok": "13.333",
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
