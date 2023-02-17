var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "0",
        "ko": "2500"
    },
    "minResponseTime": {
        "total": "864",
        "ok": "-",
        "ko": "864"
    },
    "maxResponseTime": {
        "total": "2785",
        "ok": "-",
        "ko": "2785"
    },
    "meanResponseTime": {
        "total": "941",
        "ok": "-",
        "ko": "941"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "-",
        "ko": "124"
    },
    "percentiles1": {
        "total": "909",
        "ok": "-",
        "ko": "909"
    },
    "percentiles2": {
        "total": "939",
        "ok": "-",
        "ko": "939"
    },
    "percentiles3": {
        "total": "1104",
        "ok": "-",
        "ko": "1104"
    },
    "percentiles4": {
        "total": "1310",
        "ok": "-",
        "ko": "1310"
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
    "count": 2500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "156.25",
        "ok": "-",
        "ko": "156.25"
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
        "total": "2500",
        "ok": "0",
        "ko": "2500"
    },
    "minResponseTime": {
        "total": "864",
        "ok": "-",
        "ko": "864"
    },
    "maxResponseTime": {
        "total": "2785",
        "ok": "-",
        "ko": "2785"
    },
    "meanResponseTime": {
        "total": "941",
        "ok": "-",
        "ko": "941"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "-",
        "ko": "124"
    },
    "percentiles1": {
        "total": "909",
        "ok": "-",
        "ko": "909"
    },
    "percentiles2": {
        "total": "939",
        "ok": "-",
        "ko": "939"
    },
    "percentiles3": {
        "total": "1104",
        "ok": "-",
        "ko": "1104"
    },
    "percentiles4": {
        "total": "1310",
        "ok": "-",
        "ko": "1310"
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
    "count": 2500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "156.25",
        "ok": "-",
        "ko": "156.25"
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
