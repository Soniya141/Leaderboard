var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "813",
        "ok": "813",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "837",
        "ok": "837",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "percentiles2": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "percentiles3": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "percentiles4": {
        "total": "886",
        "ok": "886",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5000,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.077",
        "ok": "48.077",
        "ko": "-"
    }
},
contents: {
"req_-contribution-g-8310e": {
        type: "REQUEST",
        name: "/Contribution/getknolderContribution-Fetch all the other contributions by the user",
path: "/Contribution/getknolderContribution-Fetch all the other contributions by the user",
pathFormatted: "req_-contribution-g-8310e",
stats: {
    "name": "/Contribution/getknolderContribution-Fetch all the other contributions by the user",
    "numberOfRequests": {
        "total": "5000",
        "ok": "5000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "813",
        "ok": "813",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "837",
        "ok": "837",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles1": {
        "total": "835",
        "ok": "835",
        "ko": "-"
    },
    "percentiles2": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "percentiles3": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "percentiles4": {
        "total": "886",
        "ok": "886",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5000,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.077",
        "ok": "48.077",
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
