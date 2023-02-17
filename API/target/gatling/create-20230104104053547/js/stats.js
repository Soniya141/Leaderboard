var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "301",
        "ok": "3907",
        "ko": "301"
    },
    "maxResponseTime": {
        "total": "43787",
        "ok": "43787",
        "ko": "408"
    },
    "meanResponseTime": {
        "total": "4381",
        "ok": "8433",
        "ko": "329"
    },
    "standardDeviation": {
        "total": "6125",
        "ok": "6495",
        "ko": "30"
    },
    "percentiles1": {
        "total": "2158",
        "ok": "5701",
        "ko": "313"
    },
    "percentiles2": {
        "total": "5633",
        "ok": "9927",
        "ko": "348"
    },
    "percentiles3": {
        "total": "15832",
        "ok": "18860",
        "ko": "389"
    },
    "percentiles4": {
        "total": "31804",
        "ok": "32757",
        "ko": "403"
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
    "count": 100,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.77",
        "ok": "0.885",
        "ko": "0.885"
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
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3907",
        "ok": "3907",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "43787",
        "ok": "43787",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8433",
        "ok": "8433",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6495",
        "ok": "6495",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5701",
        "ok": "5701",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9927",
        "ok": "9927",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18860",
        "ok": "18860",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32757",
        "ok": "32757",
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
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.885",
        "ok": "0.885",
        "ko": "-"
    }
}
    },"req_contribution-3023d": {
        type: "REQUEST",
        name: "Contribution",
path: "Contribution",
pathFormatted: "req_contribution-3023d",
stats: {
    "name": "Contribution",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "301",
        "ok": "-",
        "ko": "301"
    },
    "maxResponseTime": {
        "total": "408",
        "ok": "-",
        "ko": "408"
    },
    "meanResponseTime": {
        "total": "329",
        "ok": "-",
        "ko": "329"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "percentiles1": {
        "total": "313",
        "ok": "-",
        "ko": "313"
    },
    "percentiles2": {
        "total": "348",
        "ok": "-",
        "ko": "348"
    },
    "percentiles3": {
        "total": "389",
        "ok": "-",
        "ko": "389"
    },
    "percentiles4": {
        "total": "403",
        "ok": "-",
        "ko": "403"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.885",
        "ok": "-",
        "ko": "0.885"
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
