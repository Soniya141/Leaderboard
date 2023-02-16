package API.Scenario

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import Request.Knolx.Token
import _root_.Request.Dashboard.Dashboard
import Request.Leaderboard.Studios
import Request.Leaderboard.Contributions
import Request.Leaderboard.Summarys
import _root_.Request.Leaderboard.Proposal
import Request.Score.Score

import io.gatling.core.Predef.scenario

object Studio{
  val studioScenario= scenario("Leaderboard API")

  //Dashboard
    .exec(Studios.studioScore)
    .exec(Studios.studioId)
    .exec(Studios.studioCharter)
    .exec(Studios.studioDetails)
    .exec(Studios.studioSummary)
    .exec(Studios.studioMonthlyContributions)
    .exec(Studios.studioSummaryalltime)
    .exec(Studios.studioSummarymonthly)



}