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
        "total": "2610",
        "ok": "2610",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3895",
        "ok": "3895",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2789",
        "ok": "2789",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2736",
        "ok": "2736",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2879",
        "ok": "2879",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2931",
        "ok": "2931",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2986",
        "ok": "2986",
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
"req_-contribution-g-8310e": {
        type: "REQUEST",
        name: "/Contribution/getknolderContribution-Fetch all the other contributions by the user",
path: "/Contribution/getknolderContribution-Fetch all the other contributions by the user",
pathFormatted: "req_-contribution-g-8310e",
stats: {
    "name": "/Contribution/getknolderContribution-Fetch all the other contributions by the user",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2610",
        "ok": "2610",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3895",
        "ok": "3895",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2789",
        "ok": "2789",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2736",
        "ok": "2736",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2879",
        "ok": "2879",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2931",
        "ok": "2931",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2986",
        "ok": "2986",
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
