var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "7059",
        "ko": "12941"
    },
    "minResponseTime": {
        "total": "265",
        "ok": "281",
        "ko": "265"
    },
    "maxResponseTime": {
        "total": "59541",
        "ok": "30686",
        "ko": "59541"
    },
    "meanResponseTime": {
        "total": "3211",
        "ok": "6850",
        "ko": "1225"
    },
    "standardDeviation": {
        "total": "5612",
        "ok": "5024",
        "ko": "4872"
    },
    "percentiles1": {
        "total": "828",
        "ok": "6836",
        "ko": "332"
    },
    "percentiles2": {
        "total": "4317",
        "ok": "9752",
        "ko": "831"
    },
    "percentiles3": {
        "total": "13353",
        "ok": "16175",
        "ko": "995"
    },
    "percentiles4": {
        "total": "21171",
        "ok": "20532",
        "ko": "33787"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1067,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 165,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5827,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 12941,
    "percentage": 65
},
    "meanNumberOfRequestsPerSecond": {
        "total": "157.48",
        "ok": "55.583",
        "ko": "101.898"
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
        "total": "10000",
        "ok": "3928",
        "ko": "6072"
    },
    "minResponseTime": {
        "total": "809",
        "ok": "1136",
        "ko": "809"
    },
    "maxResponseTime": {
        "total": "59541",
        "ok": "30686",
        "ko": "59541"
    },
    "meanResponseTime": {
        "total": "4349",
        "ok": "8497",
        "ko": "1666"
    },
    "standardDeviation": {
        "total": "6048",
        "ok": "4810",
        "ko": "5190"
    },
    "percentiles1": {
        "total": "878",
        "ok": "8419",
        "ko": "831"
    },
    "percentiles2": {
        "total": "7551",
        "ok": "11261",
        "ko": "846"
    },
    "percentiles3": {
        "total": "15174",
        "ok": "17069",
        "ko": "1911"
    },
    "percentiles4": {
        "total": "22556",
        "ok": "21183",
        "ko": "35615"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 124,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3804,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 6072,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.74",
        "ok": "30.929",
        "ko": "47.811"
    }
}
    },"req_dynamic-scoring-2589c": {
        type: "REQUEST",
        name: "Dynamic Scoring",
path: "Dynamic Scoring",
pathFormatted: "req_dynamic-scoring-2589c",
stats: {
    "name": "Dynamic Scoring",
    "numberOfRequests": {
        "total": "10000",
        "ok": "3131",
        "ko": "6869"
    },
    "minResponseTime": {
        "total": "265",
        "ok": "281",
        "ko": "265"
    },
    "maxResponseTime": {
        "total": "56964",
        "ok": "29804",
        "ko": "56964"
    },
    "meanResponseTime": {
        "total": "2072",
        "ok": "4785",
        "ko": "836"
    },
    "standardDeviation": {
        "total": "4880",
        "ok": "4494",
        "ko": "4537"
    },
    "percentiles1": {
        "total": "278",
        "ok": "4607",
        "ko": "275"
    },
    "percentiles2": {
        "total": "453",
        "ok": "7221",
        "ko": "278"
    },
    "percentiles3": {
        "total": "9692",
        "ok": "12853",
        "ko": "340"
    },
    "percentiles4": {
        "total": "19709",
        "ok": "19755",
        "ko": "15343"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1067,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 41,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2023,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 6869,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.74",
        "ok": "24.654",
        "ko": "54.087"
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
