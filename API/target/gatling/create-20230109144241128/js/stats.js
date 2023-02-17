var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "35",
        "ko": "65"
    },
    "minResponseTime": {
        "total": "9374",
        "ok": "9374",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "57413",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "44897",
        "ok": "26788",
        "ko": "54648"
    },
    "standardDeviation": {
        "total": "19237",
        "ok": "10585",
        "ko": "15405"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "24276",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "28599",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "51294",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "55689",
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
    "count": 35,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 65,
    "percentage": 65
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.471",
        "ok": "0.515",
        "ko": "0.956"
    }
},
contents: {
"req_my-proposal-88028": {
        type: "REQUEST",
        name: "my Proposal",
path: "my Proposal",
pathFormatted: "req_my-proposal-88028",
stats: {
    "name": "my Proposal",
    "numberOfRequests": {
        "total": "100",
        "ok": "35",
        "ko": "65"
    },
    "minResponseTime": {
        "total": "9374",
        "ok": "9374",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "57413",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "44897",
        "ok": "26788",
        "ko": "54648"
    },
    "standardDeviation": {
        "total": "19237",
        "ok": "10585",
        "ko": "15405"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "24276",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "28599",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "51294",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "55689",
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
    "count": 35,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 65,
    "percentage": 65
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.471",
        "ok": "0.515",
        "ko": "0.956"
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
