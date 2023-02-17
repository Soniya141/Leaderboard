var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4000",
        "ok": "4000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2896",
        "ok": "2896",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "427",
        "ok": "427",
        "ko": "-"
    },
    "percentiles1": {
        "total": "855",
        "ok": "855",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1181",
        "ok": "1181",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1999,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1873,
    "percentage": 47
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 128,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.037",
        "ok": "37.037",
        "ko": "-"
    }
},
contents: {
"req_reputation-8d9be": {
        type: "REQUEST",
        name: "Reputation",
path: "Reputation",
pathFormatted: "req_reputation-8d9be",
stats: {
    "name": "Reputation",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1055",
        "ok": "1055",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2896",
        "ok": "2896",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1130",
        "ok": "1130",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1144",
        "ok": "1144",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1426",
        "ok": "1426",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1873,
    "percentage": 94
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 127,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.519",
        "ok": "18.519",
        "ko": "-"
    }
}
    },"req_get-monthly-det-56978": {
        type: "REQUEST",
        name: "Get monthly details for knolder by id",
path: "Get monthly details for knolder by id",
pathFormatted: "req_get-monthly-det-56978",
stats: {
    "name": "Get monthly details for knolder by id",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles1": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "percentiles2": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles3": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles4": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.519",
        "ok": "18.519",
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
