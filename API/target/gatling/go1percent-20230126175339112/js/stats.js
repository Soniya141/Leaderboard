var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "174",
        "ko": "826"
    },
    "minResponseTime": {
        "total": "807",
        "ok": "7007",
        "ko": "807"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59338",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "31506",
        "ok": "27047",
        "ko": "32445"
    },
    "standardDeviation": {
        "total": "25242",
        "ok": "10592",
        "ko": "27253"
    },
    "percentiles1": {
        "total": "26841",
        "ok": "27371",
        "ko": "18640"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "29946",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "37598",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "55224",
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
    "count": 174,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 826,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.173",
        "ok": "1.074",
        "ko": "5.099"
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
        "total": "1000",
        "ok": "174",
        "ko": "826"
    },
    "minResponseTime": {
        "total": "807",
        "ok": "7007",
        "ko": "807"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59338",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "31506",
        "ok": "27047",
        "ko": "32445"
    },
    "standardDeviation": {
        "total": "25242",
        "ok": "10592",
        "ko": "27253"
    },
    "percentiles1": {
        "total": "26841",
        "ok": "27371",
        "ko": "18640"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "29946",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "37598",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "55224",
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
    "count": 174,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 826,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.173",
        "ok": "1.074",
        "ko": "5.099"
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
