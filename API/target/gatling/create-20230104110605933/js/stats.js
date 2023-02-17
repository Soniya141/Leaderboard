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
        "total": "298",
        "ok": "3890",
        "ko": "298"
    },
    "maxResponseTime": {
        "total": "13332",
        "ok": "13332",
        "ko": "431"
    },
    "meanResponseTime": {
        "total": "2653",
        "ok": "4990",
        "ko": "316"
    },
    "standardDeviation": {
        "total": "2640",
        "ok": "1739",
        "ko": "24"
    },
    "percentiles1": {
        "total": "2161",
        "ok": "4126",
        "ko": "309"
    },
    "percentiles2": {
        "total": "4126",
        "ok": "5068",
        "ko": "316"
    },
    "percentiles3": {
        "total": "6711",
        "ok": "8144",
        "ko": "370"
    },
    "percentiles4": {
        "total": "10542",
        "ok": "13083",
        "ko": "424"
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
        "total": "1.818",
        "ok": "0.909",
        "ko": "0.909"
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
        "total": "3890",
        "ok": "3890",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13332",
        "ok": "13332",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4990",
        "ok": "4990",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1739",
        "ok": "1739",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4126",
        "ok": "4126",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5068",
        "ok": "5068",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8144",
        "ok": "8144",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13083",
        "ok": "13083",
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
        "total": "0.909",
        "ok": "0.909",
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
        "total": "298",
        "ok": "-",
        "ko": "298"
    },
    "maxResponseTime": {
        "total": "431",
        "ok": "-",
        "ko": "431"
    },
    "meanResponseTime": {
        "total": "316",
        "ok": "-",
        "ko": "316"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles1": {
        "total": "309",
        "ok": "-",
        "ko": "309"
    },
    "percentiles2": {
        "total": "316",
        "ok": "-",
        "ko": "316"
    },
    "percentiles3": {
        "total": "370",
        "ok": "-",
        "ko": "370"
    },
    "percentiles4": {
        "total": "424",
        "ok": "-",
        "ko": "424"
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
        "total": "0.909",
        "ok": "-",
        "ko": "0.909"
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
