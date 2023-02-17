var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1499",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1881",
        "ok": "1881",
        "ko": "10690"
    },
    "maxResponseTime": {
        "total": "10690",
        "ok": "8228",
        "ko": "10690"
    },
    "meanResponseTime": {
        "total": "5135",
        "ok": "5131",
        "ko": "10690"
    },
    "standardDeviation": {
        "total": "1790",
        "ok": "1784",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5199",
        "ok": "5196",
        "ko": "10690"
    },
    "percentiles2": {
        "total": "6349",
        "ok": "6345",
        "ko": "10690"
    },
    "percentiles3": {
        "total": "7871",
        "ok": "7870",
        "ko": "10690"
    },
    "percentiles4": {
        "total": "7966",
        "ok": "7963",
        "ko": "10690"
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
    "count": 1499,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "107.143",
        "ok": "107.071",
        "ko": "0.071"
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
        "total": "1500",
        "ok": "1499",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1881",
        "ok": "1881",
        "ko": "10690"
    },
    "maxResponseTime": {
        "total": "10690",
        "ok": "8228",
        "ko": "10690"
    },
    "meanResponseTime": {
        "total": "5135",
        "ok": "5131",
        "ko": "10690"
    },
    "standardDeviation": {
        "total": "1790",
        "ok": "1784",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5199",
        "ok": "5196",
        "ko": "10690"
    },
    "percentiles2": {
        "total": "6349",
        "ok": "6345",
        "ko": "10690"
    },
    "percentiles3": {
        "total": "7871",
        "ok": "7870",
        "ko": "10690"
    },
    "percentiles4": {
        "total": "7966",
        "ok": "7963",
        "ko": "10690"
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
    "count": 1499,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "107.143",
        "ok": "107.071",
        "ko": "0.071"
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
