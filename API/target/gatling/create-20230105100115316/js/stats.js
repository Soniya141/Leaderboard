var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2",
        "ko": "2998"
    },
    "minResponseTime": {
        "total": "10394",
        "ok": "18984",
        "ko": "10394"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "35418",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "27314",
        "ok": "27201",
        "ko": "27314"
    },
    "standardDeviation": {
        "total": "17900",
        "ok": "8217",
        "ko": "17904"
    },
    "percentiles1": {
        "total": "19530",
        "ok": "27201",
        "ko": "19530"
    },
    "percentiles2": {
        "total": "33989",
        "ok": "31310",
        "ko": "33952"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "34596",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "35254",
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
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2998,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.875",
        "ok": "0.031",
        "ko": "46.844"
    }
},
contents: {
"req_proposals-dd7a6": {
        type: "REQUEST",
        name: "Proposals",
path: "Proposals",
pathFormatted: "req_proposals-dd7a6",
stats: {
    "name": "Proposals",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2",
        "ko": "2998"
    },
    "minResponseTime": {
        "total": "10394",
        "ok": "18984",
        "ko": "10394"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "35418",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "27314",
        "ok": "27201",
        "ko": "27314"
    },
    "standardDeviation": {
        "total": "17900",
        "ok": "8217",
        "ko": "17904"
    },
    "percentiles1": {
        "total": "19530",
        "ok": "27201",
        "ko": "19530"
    },
    "percentiles2": {
        "total": "33989",
        "ok": "31310",
        "ko": "33952"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "34596",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "35254",
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
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2998,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.875",
        "ok": "0.031",
        "ko": "46.844"
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
