var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2641",
        "ko": "359"
    },
    "minResponseTime": {
        "total": "3600",
        "ok": "3600",
        "ko": "10519"
    },
    "maxResponseTime": {
        "total": "42167",
        "ok": "42167",
        "ko": "16568"
    },
    "meanResponseTime": {
        "total": "13723",
        "ok": "13863",
        "ko": "12699"
    },
    "standardDeviation": {
        "total": "6138",
        "ok": "6505",
        "ko": "1528"
    },
    "percentiles1": {
        "total": "13154",
        "ok": "13409",
        "ko": "12425"
    },
    "percentiles2": {
        "total": "15694",
        "ok": "15952",
        "ko": "12868"
    },
    "percentiles3": {
        "total": "20729",
        "ok": "21933",
        "ko": "15982"
    },
    "percentiles4": {
        "total": "38518",
        "ok": "38540",
        "ko": "16384"
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
    "count": 2641,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 359,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "57.413",
        "ko": "7.804"
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
        "ok": "2641",
        "ko": "359"
    },
    "minResponseTime": {
        "total": "3600",
        "ok": "3600",
        "ko": "10519"
    },
    "maxResponseTime": {
        "total": "42167",
        "ok": "42167",
        "ko": "16568"
    },
    "meanResponseTime": {
        "total": "13723",
        "ok": "13863",
        "ko": "12699"
    },
    "standardDeviation": {
        "total": "6138",
        "ok": "6505",
        "ko": "1528"
    },
    "percentiles1": {
        "total": "13153",
        "ok": "13407",
        "ko": "12425"
    },
    "percentiles2": {
        "total": "15694",
        "ok": "15951",
        "ko": "12868"
    },
    "percentiles3": {
        "total": "20729",
        "ok": "21933",
        "ko": "15982"
    },
    "percentiles4": {
        "total": "38518",
        "ok": "38540",
        "ko": "16384"
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
    "count": 2641,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 359,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "57.413",
        "ko": "7.804"
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
