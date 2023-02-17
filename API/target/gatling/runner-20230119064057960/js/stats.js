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
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5873",
        "ok": "5873",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1799",
        "ok": "1799",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "674",
        "ok": "674",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2181",
        "ok": "2181",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2477",
        "ok": "2477",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2518",
        "ok": "2518",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2855",
        "ok": "2855",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 963,
    "percentage": 48
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1037,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "18.182",
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
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2669",
        "ok": "2669",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1139",
        "ok": "1139",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1127",
        "ok": "1127",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1136",
        "ok": "1136",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1165",
        "ok": "1165",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1480",
        "ok": "1480",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 963,
    "percentage": 96
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 37,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
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
        "total": "2173",
        "ok": "2173",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5873",
        "ok": "5873",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2459",
        "ok": "2459",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "176",
        "ok": "176",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2477",
        "ok": "2477",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2496",
        "ok": "2496",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2561",
        "ok": "2561",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2968",
        "ok": "2968",
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
        "total": "9.091",
        "ok": "9.091",
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
