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

object Studio{
  val studioScenario= scenario("Leaderboard API")

  //Dashboard
    .exec(StudioModule.studioScore)
    .exec(StudioModule.studioId)
    .exec(StudioModule.studioCharter)
    .exec(StudioModule.studioDetails)
    .exec(StudioModule.studioSummary)
    .exec(StudioModule.studioMonthlyContributions)
    .exec(StudioModule.studioSummaryalltime)
    .exec(StudioModule.studioSummarymonthly)



}