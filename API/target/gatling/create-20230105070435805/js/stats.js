var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "3515",
        "ko": "1485"
    },
    "minResponseTime": {
        "total": "932",
        "ok": "932",
        "ko": "7967"
    },
    "maxResponseTime": {
        "total": "30798",
        "ok": "30798",
        "ko": "23146"
    },
    "meanResponseTime": {
        "total": "11511",
        "ok": "9941",
        "ko": "15228"
    },
    "standardDeviation": {
        "total": "5148",
        "ok": "5294",
        "ko": "1805"
    },
    "percentiles1": {
        "total": "12692",
        "ok": "11020",
        "ko": "15906"
    },
    "percentiles2": {
        "total": "15894",
        "ok": "13566",
        "ko": "15946"
    },
    "percentiles3": {
        "total": "16730",
        "ok": "17439",
        "ko": "16607"
    },
    "percentiles4": {
        "total": "22345",
        "ok": "22598",
        "ko": "16964"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 165,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3350,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 1485,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "138.889",
        "ok": "97.639",
        "ko": "41.25"
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
        "ok": "3515",
        "ko": "1485"
    },
    "minResponseTime": {
        "total": "932",
        "ok": "932",
        "ko": "7967"
    },
    "maxResponseTime": {
        "total": "30798",
        "ok": "30798",
        "ko": "23146"
    },
    "meanResponseTime": {
        "total": "11511",
        "ok": "9941",
        "ko": "15228"
    },
    "standardDeviation": {
        "total": "5148",
        "ok": "5294",
        "ko": "1805"
    },
    "percentiles1": {
        "total": "12692",
        "ok": "11020",
        "ko": "15906"
    },
    "percentiles2": {
        "total": "15894",
        "ok": "13566",
        "ko": "15946"
    },
    "percentiles3": {
        "total": "16730",
        "ok": "17439",
        "ko": "16607"
    },
    "percentiles4": {
        "total": "22345",
        "ok": "22598",
        "ko": "16964"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 165,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3350,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 1485,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "138.889",
        "ok": "97.639",
        "ko": "41.25"
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
