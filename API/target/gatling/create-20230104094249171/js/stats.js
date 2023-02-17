var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "289",
        "ok": "-",
        "ko": "289"
    },
    "maxResponseTime": {
        "total": "1065",
        "ok": "-",
        "ko": "1065"
    },
    "meanResponseTime": {
        "total": "590",
        "ok": "-",
        "ko": "590"
    },
    "standardDeviation": {
        "total": "290",
        "ok": "-",
        "ko": "290"
    },
    "percentiles1": {
        "total": "605",
        "ok": "-",
        "ko": "605"
    },
    "percentiles2": {
        "total": "874",
        "ok": "-",
        "ko": "874"
    },
    "percentiles3": {
        "total": "905",
        "ok": "-",
        "ko": "905"
    },
    "percentiles4": {
        "total": "924",
        "ok": "-",
        "ko": "924"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 200,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.405",
        "ok": "-",
        "ko": "5.405"
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
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "859",
        "ok": "-",
        "ko": "859"
    },
    "maxResponseTime": {
        "total": "1065",
        "ok": "-",
        "ko": "1065"
    },
    "meanResponseTime": {
        "total": "880",
        "ok": "-",
        "ko": "880"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles1": {
        "total": "874",
        "ok": "-",
        "ko": "874"
    },
    "percentiles2": {
        "total": "882",
        "ok": "-",
        "ko": "882"
    },
    "percentiles3": {
        "total": "920",
        "ok": "-",
        "ko": "920"
    },
    "percentiles4": {
        "total": "930",
        "ok": "-",
        "ko": "930"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.703",
        "ok": "-",
        "ko": "2.703"
    }
}
    },"req_contribution-3023d": {
        type: "REQUEST",
        name: "Contribution",
path: "Contribution",
pathFormatted: "req_contribution-3023d",
stats: {
    "name": "Contribution",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "289",
        "ok": "-",
        "ko": "289"
    },
    "maxResponseTime": {
        "total": "351",
        "ok": "-",
        "ko": "351"
    },
    "meanResponseTime": {
        "total": "301",
        "ok": "-",
        "ko": "301"
    },
    "standardDeviation": {
        "total": "13",
        "ok": "-",
        "ko": "13"
    },
    "percentiles1": {
        "total": "295",
        "ok": "-",
        "ko": "295"
    },
    "percentiles2": {
        "total": "303",
        "ok": "-",
        "ko": "303"
    },
    "percentiles3": {
        "total": "326",
        "ok": "-",
        "ko": "326"
    },
    "percentiles4": {
        "total": "344",
        "ok": "-",
        "ko": "344"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.703",
        "ok": "-",
        "ko": "2.703"
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
