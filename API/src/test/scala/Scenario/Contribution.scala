package API.Scenario

import API.Utils.Environment.baseURL
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import Request.Knolx.TokenModule
import _root_.Request.Dashboard.DashboardModule
import _root_.Request.Leaderboard.StudioModule
import _root_.Request.Leaderboard.ContributionsModule
import _root_.Request.Leaderboard.SummaryModule
import _root_.Request.Leaderboard.ProposalModule
import _root_.Request.Score.Score
import io.gatling.core.Predef.scenario
import io.gatling.http.protocol.HttpProtocolBuilder

object Contribution {
  val contributionScenario = scenario("Contribution API")
//
//    .exec(Contributions.addContributions)
    .exec(ContributionsModule.myContributions)
    .exec(ContributionsModule.allContribution)
    .exec(ContributionsModule.approvalContributions)
//    .exec(Contributions.editContribution)
//.exec(Contributions.updateContribution)
//    .exec(Contributions.rejectContribution)
    .exec(ContributionsModule.reviewedContribution)

}