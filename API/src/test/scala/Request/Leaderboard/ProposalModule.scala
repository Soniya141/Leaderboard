package Request.Leaderboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._


object ProposalModule {

//val sentHeaders = Map("Authorization" -> "bearer ${token}")

  val myProposal = scenario("Leaderboard APIs")
    .exec(http("my Proposal")
    .get(baseURL + "/myProposals")
    .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val proposals = scenario("Proposal API")

    .exec(http("Proposal")
      .get(baseURL + "/proposals/proposal?id=11870")
      .headers(commonHeader)
      .formParam("Proposal id.", 11870)

      .check(status is 200))
    .pause(3)
  val ProposalDetail = scenario("Proposal detail")
    .exec(http("Proposals")
            .get(baseURL + "/proposals")
            .headers(commonHeader)
            .check(status is 200))
            .pause(3)
val editProposals = scenario("Edit Proposal")
    .exec(http("Edit Proposal")
          .put(baseURL + "/proposal/editProposal")
            .headers(commonHeader)
      .body(StringBody(
        """{
                                 "id": 11870,
                                 "status": "APPROVED",
                                 "remark": "Good Proposal"
                             } """)).asJson

            .check(status is 200))
            .pause(3)
  val updateProposals = scenario("Update Proposal")
    .exec(http("Update Proposal")
      .put(baseURL + "/updateProposal")
      .headers(commonHeader)
      .body(StringBody(
        """{
            "proposalTitle": "1",
            "challenge":"new challenge",
            "possibleSolution":"Solution",
            "explanation":"Proposal Explanation",
            "contributionId":11870
        } """)).asJson

      .check(status is 200))
    .pause(3)

}