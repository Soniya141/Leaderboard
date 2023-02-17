var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1468",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "2260",
        "ok": "2260",
        "ko": "9147"
    },
    "maxResponseTime": {
        "total": "19762",
        "ok": "19762",
        "ko": "13023"
    },
    "meanResponseTime": {
        "total": "10156",
        "ok": "10149",
        "ko": "10470"
    },
    "standardDeviation": {
        "total": "3611",
        "ok": "3643",
        "ko": "1544"
    },
    "percentiles1": {
        "total": "11292",
        "ok": "11296",
        "ko": "9682"
    },
    "percentiles2": {
        "total": "13244",
        "ok": "13260",
        "ko": "12846"
    },
    "percentiles3": {
        "total": "14446",
        "ok": "14447",
        "ko": "12952"
    },
    "percentiles4": {
        "total": "16710",
        "ok": "16720",
        "ko": "13003"
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
    "count": 1468,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 32,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "63.826",
        "ko": "1.391"
    }
},
contents: {
"req_fetch-contribut-d95e0": {
        type: "REQUEST",
        name: "Fetch contribution",
path: "Fetch contribution",
pathFormatted: "req_fetch-contribut-d95e0",
stats: {
    "name": "Fetch contribution",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1468",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "2260",
        "ok": "2260",
        "ko": "9147"
    },
    "maxResponseTime": {
        "total": "19762",
        "ok": "19762",
        "ko": "13023"
    },
    "meanResponseTime": {
        "total": "10156",
        "ok": "10149",
        "ko": "10470"
    },
    "standardDeviation": {
        "total": "3611",
        "ok": "3643",
        "ko": "1544"
    },
    "percentiles1": {
        "total": "11293",
        "ok": "11296",
        "ko": "9682"
    },
    "percentiles2": {
        "total": "13244",
        "ok": "13260",
        "ko": "12846"
    },
    "percentiles3": {
        "total": "14446",
        "ok": "14447",
        "ko": "12952"
    },
    "percentiles4": {
        "total": "16710",
        "ok": "16720",
        "ko": "13003"
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
    "count": 1468,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 32,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "63.826",
        "ko": "1.391"
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
