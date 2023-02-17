var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "69",
        "ko": "31"
    },
    "minResponseTime": {
        "total": "6355",
        "ok": "6355",
        "ko": "10367"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59273",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "40185",
        "ok": "32002",
        "ko": "58399"
    },
    "standardDeviation": {
        "total": "21506",
        "ok": "20487",
        "ko": "8769"
    },
    "percentiles1": {
        "total": "53424",
        "ok": "22846",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "53804",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "57804",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "58905",
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
    "count": 69,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 31,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.136",
        "ok": "0.784",
        "ko": "0.352"
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
        "ok": "69",
        "ko": "31"
    },
    "minResponseTime": {
        "total": "6355",
        "ok": "6355",
        "ko": "10367"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59273",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "40185",
        "ok": "32002",
        "ko": "58399"
    },
    "standardDeviation": {
        "total": "21506",
        "ok": "20487",
        "ko": "8769"
    },
    "percentiles1": {
        "total": "53424",
        "ok": "22846",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "53804",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "57804",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "58905",
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
    "count": 69,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 31,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.136",
        "ok": "0.784",
        "ko": "0.352"
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
