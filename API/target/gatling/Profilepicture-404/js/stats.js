var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "0",
        "ko": "1500"
    },
    "minResponseTime": {
        "total": "818",
        "ok": "-",
        "ko": "818"
    },
    "maxResponseTime": {
        "total": "2922",
        "ok": "-",
        "ko": "2922"
    },
    "meanResponseTime": {
        "total": "840",
        "ok": "-",
        "ko": "840"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "-",
        "ko": "85"
    },
    "percentiles1": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "percentiles2": {
        "total": "839",
        "ok": "-",
        "ko": "839"
    },
    "percentiles3": {
        "total": "853",
        "ok": "-",
        "ko": "853"
    },
    "percentiles4": {
        "total": "911",
        "ok": "-",
        "ko": "911"
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
    "count": 1500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.423",
        "ok": "-",
        "ko": "14.423"
    }
},
contents: {
"req_fetch-profile-p-1f3d4": {
        type: "REQUEST",
        name: "Fetch Profile picture",
path: "Fetch Profile picture",
pathFormatted: "req_fetch-profile-p-1f3d4",
stats: {
    "name": "Fetch Profile picture",
    "numberOfRequests": {
        "total": "1500",
        "ok": "0",
        "ko": "1500"
    },
    "minResponseTime": {
        "total": "818",
        "ok": "-",
        "ko": "818"
    },
    "maxResponseTime": {
        "total": "2922",
        "ok": "-",
        "ko": "2922"
    },
    "meanResponseTime": {
        "total": "840",
        "ok": "-",
        "ko": "840"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "-",
        "ko": "85"
    },
    "percentiles1": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "percentiles2": {
        "total": "839",
        "ok": "-",
        "ko": "839"
    },
    "percentiles3": {
        "total": "853",
        "ok": "-",
        "ko": "853"
    },
    "percentiles4": {
        "total": "911",
        "ok": "-",
        "ko": "911"
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
    "count": 1500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.423",
        "ok": "-",
        "ko": "14.423"
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
