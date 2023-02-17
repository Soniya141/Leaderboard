var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "-",
        "ko": "279"
    },
    "maxResponseTime": {
        "total": "844",
        "ok": "-",
        "ko": "844"
    },
    "meanResponseTime": {
        "total": "554",
        "ok": "-",
        "ko": "554"
    },
    "standardDeviation": {
        "total": "269",
        "ok": "-",
        "ko": "269"
    },
    "percentiles1": {
        "total": "555",
        "ok": "-",
        "ko": "555"
    },
    "percentiles2": {
        "total": "820",
        "ok": "-",
        "ko": "820"
    },
    "percentiles3": {
        "total": "826",
        "ok": "-",
        "ko": "826"
    },
    "percentiles4": {
        "total": "838",
        "ok": "-",
        "ko": "838"
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
    "count": 200,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.765",
        "ok": "-",
        "ko": "11.765"
    }
},
contents: {
"req_-contribution-r-e15af": {
        type: "REQUEST",
        name: "/contribution/reject?title=fghgf&contributionType=book&sessionId=1-Helps us to edit the proposal contribution.",
path: "/contribution/reject?title=fghgf&contributionType=book&sessionId=1-Helps us to edit the proposal contribution.",
pathFormatted: "req_-contribution-r-e15af",
stats: {
    "name": "/contribution/reject?title=fghgf&contributionType=book&sessionId=1-Helps us to edit the proposal contribution.",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "809",
        "ok": "-",
        "ko": "809"
    },
    "maxResponseTime": {
        "total": "844",
        "ok": "-",
        "ko": "844"
    },
    "meanResponseTime": {
        "total": "823",
        "ok": "-",
        "ko": "823"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "824",
        "ok": "-",
        "ko": "824"
    },
    "percentiles2": {
        "total": "826",
        "ok": "-",
        "ko": "826"
    },
    "percentiles3": {
        "total": "831",
        "ok": "-",
        "ko": "831"
    },
    "percentiles4": {
        "total": "841",
        "ok": "-",
        "ko": "841"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "-",
        "ko": "5.882"
    }
}
    },"req_-updateproposal-120ed": {
        type: "REQUEST",
        name: "/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.",
path: "/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.",
pathFormatted: "req_-updateproposal-120ed",
stats: {
    "name": "/updateProposal?contributionId=12755-Helps us to edit the proposal contribution.",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "-",
        "ko": "279"
    },
    "maxResponseTime": {
        "total": "301",
        "ok": "-",
        "ko": "301"
    },
    "meanResponseTime": {
        "total": "285",
        "ok": "-",
        "ko": "285"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles1": {
        "total": "285",
        "ok": "-",
        "ko": "285"
    },
    "percentiles2": {
        "total": "287",
        "ok": "-",
        "ko": "287"
    },
    "percentiles3": {
        "total": "288",
        "ok": "-",
        "ko": "288"
    },
    "percentiles4": {
        "total": "295",
        "ok": "-",
        "ko": "295"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "-",
        "ko": "5.882"
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
