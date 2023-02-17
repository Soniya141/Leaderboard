var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2410",
        "ko": "90"
    },
    "minResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "6215"
    },
    "maxResponseTime": {
        "total": "28718",
        "ok": "28718",
        "ko": "24993"
    },
    "meanResponseTime": {
        "total": "7115",
        "ok": "6851",
        "ko": "14164"
    },
    "standardDeviation": {
        "total": "5214",
        "ok": "5099",
        "ko": "2721"
    },
    "percentiles1": {
        "total": "7161",
        "ok": "6260",
        "ko": "14168"
    },
    "percentiles2": {
        "total": "11315",
        "ok": "10982",
        "ko": "15882"
    },
    "percentiles3": {
        "total": "16244",
        "ok": "16012",
        "ko": "17166"
    },
    "percentiles4": {
        "total": "19228",
        "ok": "19222",
        "ko": "24957"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 351,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2059,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 90,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "69.444",
        "ok": "66.944",
        "ko": "2.5"
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
        "total": "2500",
        "ok": "2410",
        "ko": "90"
    },
    "minResponseTime": {
        "total": "892",
        "ok": "892",
        "ko": "6215"
    },
    "maxResponseTime": {
        "total": "28718",
        "ok": "28718",
        "ko": "24993"
    },
    "meanResponseTime": {
        "total": "7115",
        "ok": "6851",
        "ko": "14164"
    },
    "standardDeviation": {
        "total": "5214",
        "ok": "5099",
        "ko": "2721"
    },
    "percentiles1": {
        "total": "7158",
        "ok": "6260",
        "ko": "14168"
    },
    "percentiles2": {
        "total": "11315",
        "ok": "10982",
        "ko": "15882"
    },
    "percentiles3": {
        "total": "16244",
        "ok": "16012",
        "ko": "17166"
    },
    "percentiles4": {
        "total": "19228",
        "ok": "19222",
        "ko": "24957"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 351,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2059,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 90,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "69.444",
        "ok": "66.944",
        "ko": "2.5"
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
