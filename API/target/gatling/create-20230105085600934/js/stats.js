var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "896",
        "ok": "896",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3489",
        "ok": "3489",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "355",
        "ok": "355",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1093",
        "ok": "1093",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1421",
        "ok": "1421",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1934",
        "ok": "1934",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2498",
        "ok": "2498",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 879,
    "percentage": 59
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 621,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.75",
        "ok": "93.75",
        "ko": "-"
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
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "896",
        "ok": "896",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3489",
        "ok": "3489",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1228",
        "ok": "1228",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "355",
        "ok": "355",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1093",
        "ok": "1093",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1421",
        "ok": "1421",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1934",
        "ok": "1934",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2498",
        "ok": "2498",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 879,
    "percentage": 59
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 621,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.75",
        "ok": "93.75",
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
