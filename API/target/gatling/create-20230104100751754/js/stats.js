var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "97",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "5210",
        "ok": "5210",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "58402",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "25675",
        "ok": "24613",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "17452",
        "ok": "16626",
        "ko": "0"
    },
    "percentiles1": {
        "total": "23394",
        "ok": "21815",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "40477",
        "ok": "39466",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "57008",
        "ok": "53943",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "57699",
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
    "count": 97,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.962",
        "ok": "0.933",
        "ko": "0.029"
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
        "ok": "97",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "5210",
        "ok": "5210",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "58402",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "25675",
        "ok": "24613",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "17452",
        "ok": "16626",
        "ko": "0"
    },
    "percentiles1": {
        "total": "23394",
        "ok": "21815",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "40477",
        "ok": "39466",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "57008",
        "ok": "53943",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "57699",
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
    "count": 97,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.962",
        "ok": "0.933",
        "ko": "0.029"
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
