var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2863",
        "ok": "2863",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4087",
        "ok": "4087",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3126",
        "ok": "3126",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3125",
        "ok": "3125",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3150",
        "ok": "3150",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3180",
        "ok": "3180",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4022",
        "ok": "4022",
        "ko": "-"
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
    "count": 1000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.434",
        "ok": "9.434",
        "ko": "-"
    }
},
contents: {
"req_retrieve-the-in-691f5": {
        type: "REQUEST",
        name: "Retrieve the individual data of knolder",
path: "Retrieve the individual data of knolder",
pathFormatted: "req_retrieve-the-in-691f5",
stats: {
    "name": "Retrieve the individual data of knolder",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2863",
        "ok": "2863",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4087",
        "ok": "4087",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3126",
        "ok": "3126",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3125",
        "ok": "3125",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3150",
        "ok": "3150",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3180",
        "ok": "3180",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4022",
        "ok": "4022",
        "ko": "-"
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
    "count": 1000,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.434",
        "ok": "9.434",
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
