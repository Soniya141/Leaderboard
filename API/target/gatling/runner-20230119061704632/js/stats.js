var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "5034",
        "ko": "14966"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "1140",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59954",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "7922",
        "ok": "20433",
        "ko": "3713"
    },
    "standardDeviation": {
        "total": "12382",
        "ok": "14123",
        "ko": "8211"
    },
    "percentiles1": {
        "total": "1106",
        "ok": "18359",
        "ko": "824"
    },
    "percentiles2": {
        "total": "11374",
        "ok": "28749",
        "ko": "2090"
    },
    "percentiles3": {
        "total": "35984",
        "ok": "49044",
        "ko": "15880"
    },
    "percentiles4": {
        "total": "56077",
        "ok": "57168",
        "ko": "44494"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 85,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4949,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 14966,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "120.482",
        "ok": "30.325",
        "ko": "90.157"
    }
},
contents: {
"req_reputation-8d9be": {
        type: "REQUEST",
        name: "Reputation",
path: "Reputation",
pathFormatted: "req_reputation-8d9be",
stats: {
    "name": "Reputation",
    "numberOfRequests": {
        "total": "10000",
        "ok": "3574",
        "ko": "6426"
    },
    "minResponseTime": {
        "total": "807",
        "ok": "1140",
        "ko": "807"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59954",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "10660",
        "ok": "18599",
        "ko": "6245"
    },
    "standardDeviation": {
        "total": "11926",
        "ok": "12002",
        "ko": "9310"
    },
    "percentiles1": {
        "total": "6536",
        "ok": "18137",
        "ko": "1542"
    },
    "percentiles2": {
        "total": "15898",
        "ok": "26168",
        "ko": "10000"
    },
    "percentiles3": {
        "total": "35426",
        "ok": "40292",
        "ko": "18822"
    },
    "percentiles4": {
        "total": "51640",
        "ok": "51649",
        "ko": "50996"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 85,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3489,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 6426,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60.241",
        "ok": "21.53",
        "ko": "38.711"
    }
}
    },"req_get-contributio-63027": {
        type: "REQUEST",
        name: "get contributions",
path: "get contributions",
pathFormatted: "req_get-contributio-63027",
stats: {
    "name": "get contributions",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1460",
        "ko": "8540"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "1420",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59939",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "5183",
        "ok": "24924",
        "ko": "1808"
    },
    "standardDeviation": {
        "total": "12222",
        "ok": "17512",
        "ko": "6669"
    },
    "percentiles1": {
        "total": "358",
        "ok": "19634",
        "ko": "356"
    },
    "percentiles2": {
        "total": "1286",
        "ok": "41170",
        "ko": "368"
    },
    "percentiles3": {
        "total": "37660",
        "ok": "55367",
        "ko": "8517"
    },
    "percentiles4": {
        "total": "57647",
        "ok": "59003",
        "ko": "37218"
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
    "count": 1460,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 8540,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60.241",
        "ok": "8.795",
        "ko": "51.446"
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
