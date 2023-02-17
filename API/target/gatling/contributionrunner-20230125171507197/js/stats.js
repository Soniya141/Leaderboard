var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "784",
        "ok": "-",
        "ko": "784"
    },
    "maxResponseTime": {
        "total": "2332",
        "ok": "-",
        "ko": "2332"
    },
    "meanResponseTime": {
        "total": "806",
        "ok": "-",
        "ko": "806"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "-",
        "ko": "49"
    },
    "percentiles1": {
        "total": "804",
        "ok": "-",
        "ko": "804"
    },
    "percentiles2": {
        "total": "807",
        "ok": "-",
        "ko": "807"
    },
    "percentiles3": {
        "total": "812",
        "ok": "-",
        "ko": "812"
    },
    "percentiles4": {
        "total": "821",
        "ok": "-",
        "ko": "821"
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
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.615",
        "ok": "-",
        "ko": "9.615"
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
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "784",
        "ok": "-",
        "ko": "784"
    },
    "maxResponseTime": {
        "total": "2332",
        "ok": "-",
        "ko": "2332"
    },
    "meanResponseTime": {
        "total": "806",
        "ok": "-",
        "ko": "806"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "-",
        "ko": "49"
    },
    "percentiles1": {
        "total": "804",
        "ok": "-",
        "ko": "804"
    },
    "percentiles2": {
        "total": "807",
        "ok": "-",
        "ko": "807"
    },
    "percentiles3": {
        "total": "812",
        "ok": "-",
        "ko": "812"
    },
    "percentiles4": {
        "total": "821",
        "ok": "-",
        "ko": "821"
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
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.615",
        "ok": "-",
        "ko": "9.615"
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
