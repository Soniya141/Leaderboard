var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "9",
        "ko": "4991"
    },
    "minResponseTime": {
        "total": "1140",
        "ok": "6906",
        "ko": "1140"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59368",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "20957",
        "ok": "26211",
        "ko": "20948"
    },
    "standardDeviation": {
        "total": "18871",
        "ok": "17937",
        "ko": "18871"
    },
    "percentiles1": {
        "total": "12454",
        "ok": "20636",
        "ko": "12456"
    },
    "percentiles2": {
        "total": "19496",
        "ok": "26098",
        "ko": "19492"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "58317",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59158",
        "ko": "60001"
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
    "count": 9,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4991,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.17",
        "ok": "0.085",
        "ko": "47.085"
    }
},
contents: {
"req_proposal-d6511": {
        type: "REQUEST",
        name: "Proposal",
path: "Proposal",
pathFormatted: "req_proposal-d6511",
stats: {
    "name": "Proposal",
    "numberOfRequests": {
        "total": "5000",
        "ok": "9",
        "ko": "4991"
    },
    "minResponseTime": {
        "total": "1140",
        "ok": "6906",
        "ko": "1140"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59368",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "20957",
        "ok": "26211",
        "ko": "20948"
    },
    "standardDeviation": {
        "total": "18871",
        "ok": "17937",
        "ko": "18871"
    },
    "percentiles1": {
        "total": "12454",
        "ok": "20636",
        "ko": "12456"
    },
    "percentiles2": {
        "total": "19496",
        "ok": "26098",
        "ko": "19492"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "58317",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59158",
        "ko": "60001"
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
    "count": 9,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4991,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "47.17",
        "ok": "0.085",
        "ko": "47.085"
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
