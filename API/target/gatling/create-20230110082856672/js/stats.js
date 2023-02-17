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
        "total": "896",
        "ok": "896",
        "ko": "11880"
    },
    "maxResponseTime": {
        "total": "20149",
        "ok": "20149",
        "ko": "15933"
    },
    "meanResponseTime": {
        "total": "5617",
        "ok": "5563",
        "ko": "13500"
    },
    "standardDeviation": {
        "total": "3747",
        "ok": "3700",
        "ko": "1861"
    },
    "percentiles1": {
        "total": "5629",
        "ok": "5568",
        "ko": "11967"
    },
    "percentiles2": {
        "total": "7847",
        "ok": "7810",
        "ko": "15920"
    },
    "percentiles3": {
        "total": "12700",
        "ok": "12622",
        "ko": "15928"
    },
    "percentiles4": {
        "total": "15292",
        "ok": "15251",
        "ko": "15932"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 367,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2116,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "99.32",
        "ko": "0.68"
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
        "ok": "2483",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "896",
        "ok": "896",
        "ko": "11880"
    },
    "maxResponseTime": {
        "total": "20149",
        "ok": "20149",
        "ko": "15933"
    },
    "meanResponseTime": {
        "total": "5617",
        "ok": "5563",
        "ko": "13500"
    },
    "standardDeviation": {
        "total": "3747",
        "ok": "3700",
        "ko": "1861"
    },
    "percentiles1": {
        "total": "5629",
        "ok": "5568",
        "ko": "11967"
    },
    "percentiles2": {
        "total": "7847",
        "ok": "7810",
        "ko": "15920"
    },
    "percentiles3": {
        "total": "12700",
        "ok": "12622",
        "ko": "15928"
    },
    "percentiles4": {
        "total": "15292",
        "ok": "15251",
        "ko": "15932"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 367,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2116,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "99.32",
        "ko": "0.68"
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
