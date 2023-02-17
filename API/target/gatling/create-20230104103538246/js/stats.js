var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "4030",
        "ko": "303"
    },
    "maxResponseTime": {
        "total": "36059",
        "ok": "36059",
        "ko": "893"
    },
    "meanResponseTime": {
        "total": "4798",
        "ok": "9265",
        "ko": "332"
    },
    "standardDeviation": {
        "total": "6769",
        "ok": "7192",
        "ko": "66"
    },
    "percentiles1": {
        "total": "2462",
        "ok": "5337",
        "ko": "315"
    },
    "percentiles2": {
        "total": "5283",
        "ok": "10718",
        "ko": "326"
    },
    "percentiles3": {
        "total": "18402",
        "ok": "22519",
        "ko": "393"
    },
    "percentiles4": {
        "total": "34085",
        "ok": "35117",
        "ko": "560"
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
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.786",
        "ok": "0.893",
        "ko": "0.893"
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
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4030",
        "ok": "4030",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "36059",
        "ok": "36059",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9265",
        "ok": "9265",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7192",
        "ok": "7192",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5337",
        "ok": "5337",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10718",
        "ok": "10718",
        "ko": "-"
    },
    "percentiles3": {
        "total": "22519",
        "ok": "22519",
        "ko": "-"
    },
    "percentiles4": {
        "total": "35117",
        "ok": "35117",
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
        "total": "0.893",
        "ok": "0.893",
        "ko": "-"
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
        "total": "303",
        "ok": "-",
        "ko": "303"
    },
    "maxResponseTime": {
        "total": "893",
        "ok": "-",
        "ko": "893"
    },
    "meanResponseTime": {
        "total": "332",
        "ok": "-",
        "ko": "332"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "-",
        "ko": "66"
    },
    "percentiles1": {
        "total": "315",
        "ok": "-",
        "ko": "315"
    },
    "percentiles2": {
        "total": "326",
        "ok": "-",
        "ko": "326"
    },
    "percentiles3": {
        "total": "393",
        "ok": "-",
        "ko": "393"
    },
    "percentiles4": {
        "total": "560",
        "ok": "-",
        "ko": "560"
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
        "total": "0.893",
        "ok": "-",
        "ko": "0.893"
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
