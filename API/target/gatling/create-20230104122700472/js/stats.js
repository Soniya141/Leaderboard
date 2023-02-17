var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "200",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "290",
        "ok": "294",
        "ko": "290"
    },
    "maxResponseTime": {
        "total": "35624",
        "ok": "35624",
        "ko": "908"
    },
    "meanResponseTime": {
        "total": "3254",
        "ok": "4716",
        "ko": "331"
    },
    "standardDeviation": {
        "total": "5830",
        "ok": "6676",
        "ko": "114"
    },
    "percentiles1": {
        "total": "312",
        "ok": "2522",
        "ko": "301"
    },
    "percentiles2": {
        "total": "4569",
        "ok": "5922",
        "ko": "310"
    },
    "percentiles3": {
        "total": "13154",
        "ok": "21253",
        "ko": "376"
    },
    "percentiles4": {
        "total": "28468",
        "ok": "31818",
        "ko": "904"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.655",
        "ok": "1.77",
        "ko": "0.885"
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
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4123",
        "ok": "4123",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "35624",
        "ok": "35624",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9116",
        "ok": "9116",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7099",
        "ok": "7099",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5923",
        "ok": "5923",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10395",
        "ok": "10395",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25014",
        "ok": "25014",
        "ko": "-"
    },
    "percentiles4": {
        "total": "34925",
        "ok": "34925",
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
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.885",
        "ok": "0.885",
        "ko": "-"
    }
}
    },"req_proposal-d6511": {
        type: "REQUEST",
        name: "Proposal",
path: "Proposal",
pathFormatted: "req_proposal-d6511",
stats: {
    "name": "Proposal",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "290",
        "ok": "294",
        "ko": "290"
    },
    "maxResponseTime": {
        "total": "920",
        "ok": "920",
        "ko": "908"
    },
    "meanResponseTime": {
        "total": "323",
        "ok": "316",
        "ko": "331"
    },
    "standardDeviation": {
        "total": "93",
        "ok": "64",
        "ko": "114"
    },
    "percentiles1": {
        "total": "302",
        "ok": "303",
        "ko": "301"
    },
    "percentiles2": {
        "total": "311",
        "ok": "312",
        "ko": "310"
    },
    "percentiles3": {
        "total": "373",
        "ok": "356",
        "ko": "376"
    },
    "percentiles4": {
        "total": "904",
        "ok": "393",
        "ko": "904"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.77",
        "ok": "0.885",
        "ko": "0.885"
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
