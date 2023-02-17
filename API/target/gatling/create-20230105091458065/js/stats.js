var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2945",
        "ko": "55"
    },
    "minResponseTime": {
        "total": "909",
        "ok": "909",
        "ko": "10209"
    },
    "maxResponseTime": {
        "total": "17414",
        "ok": "17414",
        "ko": "15958"
    },
    "meanResponseTime": {
        "total": "6410",
        "ok": "6260",
        "ko": "14434"
    },
    "standardDeviation": {
        "total": "4322",
        "ok": "4213",
        "ko": "1755"
    },
    "percentiles1": {
        "total": "6718",
        "ok": "6600",
        "ko": "15884"
    },
    "percentiles2": {
        "total": "9076",
        "ok": "8586",
        "ko": "15914"
    },
    "percentiles3": {
        "total": "14802",
        "ok": "14223",
        "ko": "15932"
    },
    "percentiles4": {
        "total": "15958",
        "ok": "15959",
        "ko": "15952"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 458,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2487,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 55,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "111.111",
        "ok": "109.074",
        "ko": "2.037"
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
        "total": "3000",
        "ok": "2945",
        "ko": "55"
    },
    "minResponseTime": {
        "total": "909",
        "ok": "909",
        "ko": "10209"
    },
    "maxResponseTime": {
        "total": "17414",
        "ok": "17414",
        "ko": "15958"
    },
    "meanResponseTime": {
        "total": "6410",
        "ok": "6260",
        "ko": "14434"
    },
    "standardDeviation": {
        "total": "4322",
        "ok": "4213",
        "ko": "1755"
    },
    "percentiles1": {
        "total": "6718",
        "ok": "6600",
        "ko": "15884"
    },
    "percentiles2": {
        "total": "9076",
        "ok": "8586",
        "ko": "15914"
    },
    "percentiles3": {
        "total": "14802",
        "ok": "14223",
        "ko": "15932"
    },
    "percentiles4": {
        "total": "15958",
        "ok": "15959",
        "ko": "15952"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 458,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2487,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 55,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "111.111",
        "ok": "109.074",
        "ko": "2.037"
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
