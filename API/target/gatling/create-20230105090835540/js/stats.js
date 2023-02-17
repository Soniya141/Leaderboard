var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "899",
        "ok": "899",
        "ko": "11881"
    },
    "maxResponseTime": {
        "total": "18521",
        "ok": "18521",
        "ko": "15908"
    },
    "meanResponseTime": {
        "total": "6029",
        "ok": "5910",
        "ko": "14463"
    },
    "standardDeviation": {
        "total": "4216",
        "ok": "4119",
        "ko": "1766"
    },
    "percentiles1": {
        "total": "5987",
        "ok": "5949",
        "ko": "15872"
    },
    "percentiles2": {
        "total": "8507",
        "ok": "8345",
        "ko": "15884"
    },
    "percentiles3": {
        "total": "14154",
        "ok": "13223",
        "ko": "15899"
    },
    "percentiles4": {
        "total": "17224",
        "ok": "17254",
        "ko": "15907"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 364,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2594,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 42,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "120",
        "ok": "118.32",
        "ko": "1.68"
    }
},
contents: {
"req_edit-proposal-45b16": {
        type: "REQUEST",
        name: "Edit Proposal",
path: "Edit Proposal",
pathFormatted: "req_edit-proposal-45b16",
stats: {
    "name": "Edit Proposal",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "899",
        "ok": "899",
        "ko": "11881"
    },
    "maxResponseTime": {
        "total": "18521",
        "ok": "18521",
        "ko": "15908"
    },
    "meanResponseTime": {
        "total": "6029",
        "ok": "5910",
        "ko": "14463"
    },
    "standardDeviation": {
        "total": "4216",
        "ok": "4119",
        "ko": "1766"
    },
    "percentiles1": {
        "total": "5987",
        "ok": "5949",
        "ko": "15872"
    },
    "percentiles2": {
        "total": "8507",
        "ok": "8345",
        "ko": "15884"
    },
    "percentiles3": {
        "total": "14154",
        "ok": "13223",
        "ko": "15899"
    },
    "percentiles4": {
        "total": "17224",
        "ok": "17254",
        "ko": "15907"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 364,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2594,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 42,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "120",
        "ok": "118.32",
        "ko": "1.68"
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
