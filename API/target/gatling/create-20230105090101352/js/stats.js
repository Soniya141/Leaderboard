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
        "total": "898",
        "ok": "898",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15324",
        "ok": "15324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2946",
        "ok": "2946",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2080",
        "ok": "2080",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2393",
        "ok": "2393",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3443",
        "ok": "3443",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6876",
        "ok": "6876",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9810",
        "ok": "9810",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 436,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1564,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "90.909",
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
        "total": "898",
        "ok": "898",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15324",
        "ok": "15324",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2946",
        "ok": "2946",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2080",
        "ok": "2080",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2393",
        "ok": "2393",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3443",
        "ok": "3443",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6876",
        "ok": "6876",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9810",
        "ok": "9810",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 436,
    "percentage": 22
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1564,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "90.909",
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
