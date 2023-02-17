var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3890",
        "ok": "3890",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "37686",
        "ok": "37686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6305",
        "ok": "6305",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4830",
        "ok": "4830",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4351",
        "ok": "4351",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5766",
        "ok": "5766",
        "ko": "-"
    },
    "percentiles3": {
        "total": "16744",
        "ok": "16744",
        "ko": "-"
    },
    "percentiles4": {
        "total": "27450",
        "ok": "27450",
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
    "count": 500,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.986",
        "ok": "0.986",
        "ko": "-"
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3890",
        "ok": "3890",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "37686",
        "ok": "37686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6305",
        "ok": "6305",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4830",
        "ok": "4830",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4351",
        "ok": "4351",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5766",
        "ok": "5766",
        "ko": "-"
    },
    "percentiles3": {
        "total": "16744",
        "ok": "16744",
        "ko": "-"
    },
    "percentiles4": {
        "total": "27450",
        "ok": "27450",
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
    "count": 500,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.986",
        "ok": "0.986",
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
