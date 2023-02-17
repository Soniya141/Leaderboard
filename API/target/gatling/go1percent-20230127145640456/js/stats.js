var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9907",
        "ok": "9907",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2133",
        "ok": "2133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1906",
        "ok": "1906",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1525",
        "ok": "1525",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3754",
        "ok": "3754",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8594",
        "ok": "8594",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 61,
    "percentage": 61
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
},
contents: {
"req_-updateproposal-120ed": {
        type: "REQUEST",
        name: "/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.",
path: "/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.",
pathFormatted: "req_-updateproposal-120ed",
stats: {
    "name": "/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9907",
        "ok": "9907",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2133",
        "ok": "2133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1906",
        "ok": "1906",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1525",
        "ok": "1525",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3754",
        "ok": "3754",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8594",
        "ok": "8594",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 61,
    "percentage": 61
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
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
