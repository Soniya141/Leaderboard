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
        "total": "288",
        "ok": "-",
        "ko": "288"
    },
    "maxResponseTime": {
        "total": "841",
        "ok": "-",
        "ko": "841"
    },
    "meanResponseTime": {
        "total": "559",
        "ok": "-",
        "ko": "559"
    },
    "standardDeviation": {
        "total": "264",
        "ok": "-",
        "ko": "264"
    },
    "percentiles1": {
        "total": "559",
        "ok": "-",
        "ko": "559"
    },
    "percentiles2": {
        "total": "819",
        "ok": "-",
        "ko": "819"
    },
    "percentiles3": {
        "total": "825",
        "ok": "-",
        "ko": "825"
    },
    "percentiles4": {
        "total": "839",
        "ok": "-",
        "ko": "839"
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
        "total": "841",
        "ok": "-",
        "ko": "841"
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
        "total": "822",
        "ok": "-",
        "ko": "822"
    },
    "percentiles2": {
        "total": "825",
        "ok": "-",
        "ko": "825"
    },
    "percentiles3": {
        "total": "829",
        "ok": "-",
        "ko": "829"
    },
    "percentiles4": {
        "total": "840",
        "ok": "-",
        "ko": "840"
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
        "total": "288",
        "ok": "-",
        "ko": "288"
    },
    "maxResponseTime": {
        "total": "308",
        "ok": "-",
        "ko": "308"
    },
    "meanResponseTime": {
        "total": "295",
        "ok": "-",
        "ko": "295"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "percentiles1": {
        "total": "294",
        "ok": "-",
        "ko": "294"
    },
    "percentiles2": {
        "total": "296",
        "ok": "-",
        "ko": "296"
    },
    "percentiles3": {
        "total": "300",
        "ok": "-",
        "ko": "300"
    },
    "percentiles4": {
        "total": "307",
        "ok": "-",
        "ko": "307"
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
