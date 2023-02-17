var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "884",
        "ok": "884",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14949",
        "ok": "14949",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3438",
        "ok": "3438",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2544",
        "ok": "2544",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2436",
        "ok": "2436",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5084",
        "ok": "5084",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8727",
        "ok": "8727",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10969",
        "ok": "10969",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 388,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1612,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "95.238",
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
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "884",
        "ok": "884",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14949",
        "ok": "14949",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3438",
        "ok": "3438",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2544",
        "ok": "2544",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2436",
        "ok": "2436",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5084",
        "ok": "5084",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8727",
        "ok": "8727",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10969",
        "ok": "10969",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 388,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1612,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.238",
        "ok": "95.238",
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
