package API.Scenario

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import Request.Knolx.TokenModule
import _root_.Request.Dashboard.DashboardModule
import Request.Leaderboard.StudioModule
import Request.Leaderboard.ContributionsModule
import Request.Leaderboard.SummaryModule
import _root_.Request.Leaderboard.ProposalModule
import Request.Score.Score

import io.gatling.core.Predef.scenario

import io.gatling.core.Predef.scenario

object Summary {
  val summaryScenario = scenario("Summary API")
    .exec(SummaryModule.monthly)
    .exec(SummaryModule.reputation)
    .exec(SummaryModule.WallOfFrame)
    .exec(SummaryModule.dynamicScore)
    .exec(SummaryModule.redeemIndividual)


}