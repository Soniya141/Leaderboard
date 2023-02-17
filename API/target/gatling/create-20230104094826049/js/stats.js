var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "60",
        "ko": "140"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "5940",
        "ko": "293"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59999",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "22166",
        "ok": "34377",
        "ko": "16932"
    },
    "standardDeviation": {
        "total": "25644",
        "ok": "19035",
        "ko": "26322"
    },
    "percentiles1": {
        "total": "4014",
        "ok": "30301",
        "ko": "1000"
    },
    "percentiles2": {
        "total": "54742",
        "ok": "54022",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "58467",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59604",
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
    "count": 60,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 140,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.222",
        "ok": "0.667",
        "ko": "1.556"
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
        "ok": "60",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "5940",
        "ok": "5940",
        "ko": "11537"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59999",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "43661",
        "ok": "34377",
        "ko": "57585"
    },
    "standardDeviation": {
        "total": "19773",
        "ok": "19035",
        "ko": "10526"
    },
    "percentiles1": {
        "total": "54786",
        "ok": "30301",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "54022",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "58467",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59604",
        "ko": "60002"
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
    "count": 60,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.111",
        "ok": "0.667",
        "ko": "0.444"
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
        "total": "293",
        "ok": "-",
        "ko": "293"
    },
    "maxResponseTime": {
        "total": "2087",
        "ok": "-",
        "ko": "2087"
    },
    "meanResponseTime": {
        "total": "671",
        "ok": "-",
        "ko": "671"
    },
    "standardDeviation": {
        "total": "393",
        "ok": "-",
        "ko": "393"
    },
    "percentiles1": {
        "total": "393",
        "ok": "-",
        "ko": "393"
    },
    "percentiles2": {
        "total": "1035",
        "ok": "-",
        "ko": "1035"
    },
    "percentiles3": {
        "total": "1135",
        "ok": "-",
        "ko": "1135"
    },
    "percentiles4": {
        "total": "1943",
        "ok": "-",
        "ko": "1943"
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
        "total": "1.111",
        "ok": "-",
        "ko": "1.111"
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
