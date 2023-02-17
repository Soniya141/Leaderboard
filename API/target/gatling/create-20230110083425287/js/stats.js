var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "4261",
        "ko": "739"
    },
    "minResponseTime": {
        "total": "983",
        "ok": "983",
        "ko": "10447"
    },
    "maxResponseTime": {
        "total": "36484",
        "ok": "36484",
        "ko": "24742"
    },
    "meanResponseTime": {
        "total": "12988",
        "ok": "12454",
        "ko": "16066"
    },
    "standardDeviation": {
        "total": "5546",
        "ok": "5763",
        "ko": "2343"
    },
    "percentiles1": {
        "total": "13746",
        "ok": "13055",
        "ko": "16337"
    },
    "percentiles2": {
        "total": "16673",
        "ok": "16160",
        "ko": "17024"
    },
    "percentiles3": {
        "total": "20269",
        "ok": "20600",
        "ko": "19562"
    },
    "percentiles4": {
        "total": "28577",
        "ok": "29339",
        "ko": "20640"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4209,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 739,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "119.048",
        "ok": "101.452",
        "ko": "17.595"
    }
},
contents: {
"req_edit-proposal-45b16": {
        type: "REQUEST",
        name: "Edit Proposal",
path: "Edit Proposal",
pathFormatted: "req_edit-proposal-45b16",
stats: {
    "name": "Edit Proposal",
    "numberOfRequests": {
        "total": "5000",
        "ok": "4261",
        "ko": "739"
    },
    "minResponseTime": {
        "total": "983",
        "ok": "983",
        "ko": "10447"
    },
    "maxResponseTime": {
        "total": "36484",
        "ok": "36484",
        "ko": "24742"
    },
    "meanResponseTime": {
        "total": "12988",
        "ok": "12454",
        "ko": "16066"
    },
    "standardDeviation": {
        "total": "5546",
        "ok": "5763",
        "ko": "2343"
    },
    "percentiles1": {
        "total": "13746",
        "ok": "13054",
        "ko": "16337"
    },
    "percentiles2": {
        "total": "16673",
        "ok": "16160",
        "ko": "17024"
    },
    "percentiles3": {
        "total": "20269",
        "ok": "20600",
        "ko": "19562"
    },
    "percentiles4": {
        "total": "28577",
        "ok": "29339",
        "ko": "20640"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4209,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 739,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "119.048",
        "ok": "101.452",
        "ko": "17.595"
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
