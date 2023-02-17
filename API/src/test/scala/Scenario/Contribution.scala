package API.Scenario

import API.Utils.Environment.baseURL
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import Request.Knolx.Token
import _root_.Request.Dashboard.Dashboard
import _root_.Request.Leaderboard.Studios
import _root_.Request.Leaderboard.Contributions
import _root_.Request.Leaderboard.Summarys
import _root_.Request.Leaderboard.Proposal
import _root_.Request.Score.Score
import io.gatling.core.Predef.scenario
import io.gatling.http.protocol.HttpProtocolBuilder

object Contribution {
  val contributionScenario = scenario("Contribution API")
    
//    .exec(Contributions.addContributions)
//    .exec(Contributions.myContributions)
////    .exec(Contributions.allContribution)
//    .exec(Contributions.approvalContributions)
//    .exec(Contributions.editContribution)
////.exec(Contributions.updateContribution)
//    .exec(Contributions.rejectContribution)
//    .exec(Contributions.reviewedContribution)

}