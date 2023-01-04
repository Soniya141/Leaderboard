var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "50",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "7056",
        "ok": "7056",
        "ko": "13284"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59937",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "48013",
        "ok": "36961",
        "ko": "59066"
    },
    "standardDeviation": {
        "total": "18510",
        "ok": "19953",
        "ko": "6540"
    },
    "percentiles1": {
        "total": "59680",
        "ok": "39043",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "57094",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "59251",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59685",
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
    "count": 50,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.22",
        "ok": "0.61",
        "ko": "0.61"
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
        "ok": "50",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "7056",
        "ok": "7056",
        "ko": "13284"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59937",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "48013",
        "ok": "36961",
        "ko": "59066"
    },
    "standardDeviation": {
        "total": "18510",
        "ok": "19953",
        "ko": "6540"
    },
    "percentiles1": {
        "total": "59680",
        "ok": "39043",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "57094",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "59251",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59685",
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
    "count": 50,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.22",
        "ok": "0.61",
        "ko": "0.61"
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
