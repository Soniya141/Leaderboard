var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "925",
        "ko": "75"
    },
    "minResponseTime": {
        "total": "2730",
        "ok": "2730",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "20640",
        "ok": "20640",
        "ko": "10005"
    },
    "meanResponseTime": {
        "total": "6491",
        "ok": "6206",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3234",
        "ok": "3198",
        "ko": "1"
    },
    "percentiles1": {
        "total": "5469",
        "ok": "5291",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "6745",
        "ok": "5972",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "9797",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "16358",
        "ok": "16406",
        "ko": "10003"
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
    "count": 925,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 75,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.929",
        "ok": "8.259",
        "ko": "0.67"
    }
},
contents: {
"req_-contribution-a-362d5": {
        type: "REQUEST",
        name: "/contribution/allContribution?pageNumber=1&limit=10000-Fetch all the other contributions which are available there for approval",
path: "/contribution/allContribution?pageNumber=1&limit=10000-Fetch all the other contributions which are available there for approval",
pathFormatted: "req_-contribution-a-362d5",
stats: {
    "name": "/contribution/allContribution?pageNumber=1&limit=10000-Fetch all the other contributions which are available there for approval",
    "numberOfRequests": {
        "total": "1000",
        "ok": "925",
        "ko": "75"
    },
    "minResponseTime": {
        "total": "2730",
        "ok": "2730",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "20640",
        "ok": "20640",
        "ko": "10005"
    },
    "meanResponseTime": {
        "total": "6491",
        "ok": "6206",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3234",
        "ok": "3198",
        "ko": "1"
    },
    "percentiles1": {
        "total": "5469",
        "ok": "5291",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "6745",
        "ok": "5972",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "9797",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "16358",
        "ok": "16406",
        "ko": "10003"
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
    "count": 925,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 75,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.929",
        "ok": "8.259",
        "ko": "0.67"
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
