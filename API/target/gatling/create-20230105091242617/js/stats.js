var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2913",
        "ko": "87"
    },
    "minResponseTime": {
        "total": "893",
        "ok": "893",
        "ko": "11897"
    },
    "maxResponseTime": {
        "total": "20052",
        "ok": "20052",
        "ko": "17292"
    },
    "meanResponseTime": {
        "total": "6665",
        "ok": "6430",
        "ko": "14517"
    },
    "standardDeviation": {
        "total": "4333",
        "ok": "4166",
        "ko": "1719"
    },
    "percentiles1": {
        "total": "6594",
        "ok": "6460",
        "ko": "15883"
    },
    "percentiles2": {
        "total": "9438",
        "ok": "9059",
        "ko": "15909"
    },
    "percentiles3": {
        "total": "14910",
        "ok": "14189",
        "ko": "15974"
    },
    "percentiles4": {
        "total": "17220",
        "ok": "17219",
        "ko": "16169"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 385,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2528,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 87,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "115.385",
        "ok": "112.038",
        "ko": "3.346"
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
        "ok": "2913",
        "ko": "87"
    },
    "minResponseTime": {
        "total": "893",
        "ok": "893",
        "ko": "11897"
    },
    "maxResponseTime": {
        "total": "20052",
        "ok": "20052",
        "ko": "17292"
    },
    "meanResponseTime": {
        "total": "6665",
        "ok": "6430",
        "ko": "14517"
    },
    "standardDeviation": {
        "total": "4333",
        "ok": "4166",
        "ko": "1719"
    },
    "percentiles1": {
        "total": "6594",
        "ok": "6460",
        "ko": "15883"
    },
    "percentiles2": {
        "total": "9438",
        "ok": "9059",
        "ko": "15909"
    },
    "percentiles3": {
        "total": "14910",
        "ok": "14189",
        "ko": "15974"
    },
    "percentiles4": {
        "total": "17220",
        "ok": "17219",
        "ko": "16169"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 385,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2528,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 87,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "115.385",
        "ok": "112.038",
        "ko": "3.346"
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
