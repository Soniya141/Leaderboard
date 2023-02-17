var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "13",
        "ko": "1487"
    },
    "minResponseTime": {
        "total": "10025",
        "ok": "21667",
        "ko": "10025"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "36440",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "33670",
        "ok": "29123",
        "ko": "33710"
    },
    "standardDeviation": {
        "total": "19822",
        "ok": "4947",
        "ko": "19899"
    },
    "percentiles1": {
        "total": "22610",
        "ok": "28105",
        "ko": "22389"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "34302",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "36113",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "36375",
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
    "count": 13,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 1487,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.438",
        "ok": "0.203",
        "ko": "23.234"
    }
},
contents: {
"req_proposals-dd7a6": {
        type: "REQUEST",
        name: "Proposals",
path: "Proposals",
pathFormatted: "req_proposals-dd7a6",
stats: {
    "name": "Proposals",
    "numberOfRequests": {
        "total": "1500",
        "ok": "13",
        "ko": "1487"
    },
    "minResponseTime": {
        "total": "10025",
        "ok": "21667",
        "ko": "10025"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "36440",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "33670",
        "ok": "29123",
        "ko": "33710"
    },
    "standardDeviation": {
        "total": "19822",
        "ok": "4947",
        "ko": "19899"
    },
    "percentiles1": {
        "total": "22610",
        "ok": "28105",
        "ko": "22389"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "34302",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "36113",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "36375",
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
    "count": 13,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 1487,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.438",
        "ok": "0.203",
        "ko": "23.234"
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
