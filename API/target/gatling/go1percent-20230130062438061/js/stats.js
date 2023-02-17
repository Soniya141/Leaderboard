var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "861",
        "ok": "861",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2006",
        "ok": "2006",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "901",
        "ok": "901",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles1": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "percentiles2": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "percentiles3": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1207",
        "ok": "1207",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 988,
    "percentage": 99
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.615",
        "ok": "9.615",
        "ko": "-"
    }
},
contents: {
"req_fetch-reward-sc-f83e7": {
        type: "REQUEST",
        name: "Fetch reward score by studio score",
path: "Fetch reward score by studio score",
pathFormatted: "req_fetch-reward-sc-f83e7",
stats: {
    "name": "Fetch reward score by studio score",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "861",
        "ok": "861",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2006",
        "ok": "2006",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "901",
        "ok": "901",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles1": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "percentiles2": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "percentiles3": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1207",
        "ok": "1207",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 988,
    "percentage": 99
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.615",
        "ok": "9.615",
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
