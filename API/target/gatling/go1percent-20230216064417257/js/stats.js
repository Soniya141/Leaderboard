var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "753",
        "ok": "753",
        "ko": "998"
    },
    "maxResponseTime": {
        "total": "998",
        "ok": "753",
        "ko": "998"
    },
    "meanResponseTime": {
        "total": "876",
        "ok": "753",
        "ko": "998"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "876",
        "ok": "753",
        "ko": "998"
    },
    "percentiles2": {
        "total": "912",
        "ok": "753",
        "ko": "998"
    },
    "percentiles3": {
        "total": "961",
        "ok": "753",
        "ko": "998"
    },
    "percentiles4": {
        "total": "996",
        "ok": "753",
        "ko": "998"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.5",
        "ko": "0.5"
    }
},
contents: {
"req_get-access-toke-5a97e": {
        type: "REQUEST",
        name: "Get access token",
path: "Get access token",
pathFormatted: "req_get-access-toke-5a97e",
stats: {
    "name": "Get access token",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles2": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles3": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles4": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_get-access-toke-07c37": {
        type: "REQUEST",
        name: "Get access token Redirect 1",
path: "Get access token Redirect 1",
pathFormatted: "req_get-access-toke-07c37",
stats: {
    "name": "Get access token Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "998",
        "ok": "-",
        "ko": "998"
    },
    "maxResponseTime": {
        "total": "998",
        "ok": "-",
        "ko": "998"
    },
    "meanResponseTime": {
        "total": "998",
        "ok": "-",
        "ko": "998"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "998",
        "ok": "-",
        "ko": "998"
    },
    "percentiles2": {
        "total": "998",
        "ok": "-",
        "ko": "998"
    },
    "percentiles3": {
        "total": "998",
        "ok": "-",
        "ko": "998"
    },
    "percentiles4": {
        "total": "998",
        "ok": "-",
        "ko": "998"
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
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
