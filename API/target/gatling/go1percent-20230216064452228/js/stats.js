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
        "total": "636",
        "ok": "636",
        "ko": "999"
    },
    "maxResponseTime": {
        "total": "999",
        "ok": "636",
        "ko": "999"
    },
    "meanResponseTime": {
        "total": "818",
        "ok": "636",
        "ko": "999"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "818",
        "ok": "636",
        "ko": "999"
    },
    "percentiles2": {
        "total": "872",
        "ok": "636",
        "ko": "999"
    },
    "percentiles3": {
        "total": "945",
        "ok": "636",
        "ko": "999"
    },
    "percentiles4": {
        "total": "995",
        "ok": "636",
        "ko": "999"
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
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "percentiles2": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "percentiles3": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "percentiles4": {
        "total": "636",
        "ok": "636",
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
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "maxResponseTime": {
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "meanResponseTime": {
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "percentiles2": {
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "percentiles3": {
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "percentiles4": {
        "total": "999",
        "ok": "-",
        "ko": "999"
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
