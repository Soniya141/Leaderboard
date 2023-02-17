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
        "total": "4282",
        "ok": "4282",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "43143",
        "ok": "43143",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14068",
        "ok": "14068",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9083",
        "ok": "9083",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9540",
        "ok": "9540",
        "ko": "-"
    },
    "percentiles2": {
        "total": "16631",
        "ok": "16631",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25549",
        "ok": "25549",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37881",
        "ok": "37881",
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
    "count": 200,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.709",
        "ok": "1.709",
        "ko": "-"
    }
},
contents: {
"req_-contribution-g-c3e02": {
        type: "REQUEST",
        name: "/contribution/getApprovedContributionsForAll?pageNumber=1&limit=10000-Fetch other contributions are there which are approved",
path: "/contribution/getApprovedContributionsForAll?pageNumber=1&limit=10000-Fetch other contributions are there which are approved",
pathFormatted: "req_-contribution-g-c3e02",
stats: {
    "name": "/contribution/getApprovedContributionsForAll?pageNumber=1&limit=10000-Fetch other contributions are there which are approved",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4282",
        "ok": "4282",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "43143",
        "ok": "43143",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14068",
        "ok": "14068",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9083",
        "ok": "9083",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9540",
        "ok": "9540",
        "ko": "-"
    },
    "percentiles2": {
        "total": "16631",
        "ok": "16631",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25549",
        "ok": "25549",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37881",
        "ok": "37881",
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
    "count": 200,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.709",
        "ok": "1.709",
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
