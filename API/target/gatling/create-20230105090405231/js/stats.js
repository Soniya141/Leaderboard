var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2494",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "7926"
    },
    "maxResponseTime": {
        "total": "17561",
        "ok": "17561",
        "ko": "11936"
    },
    "meanResponseTime": {
        "total": "4855",
        "ok": "4839",
        "ko": "11254"
    },
    "standardDeviation": {
        "total": "3548",
        "ok": "3538",
        "ko": "1488"
    },
    "percentiles1": {
        "total": "3577",
        "ok": "3555",
        "ko": "11915"
    },
    "percentiles2": {
        "total": "6964",
        "ok": "6952",
        "ko": "11924"
    },
    "percentiles3": {
        "total": "11680",
        "ok": "11643",
        "ko": "11934"
    },
    "percentiles4": {
        "total": "15259",
        "ok": "15259",
        "ko": "11936"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 471,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2023,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "108.696",
        "ok": "108.435",
        "ko": "0.261"
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
        "ok": "2494",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "7926"
    },
    "maxResponseTime": {
        "total": "17561",
        "ok": "17561",
        "ko": "11936"
    },
    "meanResponseTime": {
        "total": "4855",
        "ok": "4839",
        "ko": "11254"
    },
    "standardDeviation": {
        "total": "3548",
        "ok": "3538",
        "ko": "1488"
    },
    "percentiles1": {
        "total": "3577",
        "ok": "3555",
        "ko": "11915"
    },
    "percentiles2": {
        "total": "6964",
        "ok": "6952",
        "ko": "11924"
    },
    "percentiles3": {
        "total": "11680",
        "ok": "11643",
        "ko": "11934"
    },
    "percentiles4": {
        "total": "15259",
        "ok": "15259",
        "ko": "11936"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 471,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2023,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "108.696",
        "ok": "108.435",
        "ko": "0.261"
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
