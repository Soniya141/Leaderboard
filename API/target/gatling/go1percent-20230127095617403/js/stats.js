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
        "total": "832",
        "ok": "832",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "percentiles2": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "percentiles3": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles4": {
        "total": "865",
        "ok": "865",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 100,
    "percentage": 100
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
        "total": "7.143",
        "ok": "7.143",
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
        "total": "832",
        "ok": "832",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "percentiles2": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "percentiles3": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles4": {
        "total": "865",
        "ok": "865",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 100,
    "percentage": 100
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
        "total": "7.143",
        "ok": "7.143",
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
