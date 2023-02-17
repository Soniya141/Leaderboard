var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2483",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "2736",
        "ok": "2736",
        "ko": "7895"
    },
    "maxResponseTime": {
        "total": "17584",
        "ok": "17584",
        "ko": "10981"
    },
    "meanResponseTime": {
        "total": "8314",
        "ok": "8300",
        "ko": "10384"
    },
    "standardDeviation": {
        "total": "2877",
        "ok": "2881",
        "ko": "887"
    },
    "percentiles1": {
        "total": "8830",
        "ok": "8808",
        "ko": "10677"
    },
    "percentiles2": {
        "total": "10313",
        "ok": "10289",
        "ko": "10862"
    },
    "percentiles3": {
        "total": "13175",
        "ok": "13239",
        "ko": "10977"
    },
    "percentiles4": {
        "total": "13483",
        "ok": "13483",
        "ko": "10980"
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
    "count": 2483,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "119.048",
        "ok": "118.238",
        "ko": "0.81"
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
        "total": "2500",
        "ok": "2483",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "2736",
        "ok": "2736",
        "ko": "7895"
    },
    "maxResponseTime": {
        "total": "17584",
        "ok": "17584",
        "ko": "10981"
    },
    "meanResponseTime": {
        "total": "8314",
        "ok": "8300",
        "ko": "10384"
    },
    "standardDeviation": {
        "total": "2877",
        "ok": "2881",
        "ko": "887"
    },
    "percentiles1": {
        "total": "8830",
        "ok": "8809",
        "ko": "10677"
    },
    "percentiles2": {
        "total": "10314",
        "ok": "10294",
        "ko": "10862"
    },
    "percentiles3": {
        "total": "13175",
        "ok": "13239",
        "ko": "10977"
    },
    "percentiles4": {
        "total": "13483",
        "ok": "13483",
        "ko": "10980"
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
    "count": 2483,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "119.048",
        "ok": "118.238",
        "ko": "0.81"
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
