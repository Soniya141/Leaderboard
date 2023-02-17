var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29545",
        "ok": "29545",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3997",
        "ok": "3997",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5394",
        "ok": "5394",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2289",
        "ok": "2289",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5040",
        "ok": "5040",
        "ko": "-"
    },
    "percentiles3": {
        "total": "15583",
        "ok": "15583",
        "ko": "-"
    },
    "percentiles4": {
        "total": "25386",
        "ok": "25386",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 100,
    "percentage": 50
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3944",
        "ok": "3944",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29545",
        "ok": "29545",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7660",
        "ok": "7660",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5599",
        "ok": "5599",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5041",
        "ok": "5041",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8014",
        "ok": "8014",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20109",
        "ok": "20109",
        "ko": "-"
    },
    "percentiles4": {
        "total": "27885",
        "ok": "27885",
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
        "total": "0.833",
        "ok": "0.833",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "633",
        "ok": "633",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "333",
        "ok": "333",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "percentiles1": {
        "total": "308",
        "ok": "308",
        "ko": "-"
    },
    "percentiles2": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles3": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "percentiles4": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 100,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
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
