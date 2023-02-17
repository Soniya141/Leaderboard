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

import io.gatling.core.Predef.scenario

object Summary {
  val summaryScenario = scenario("Summary API")
    .exec(Summarys.monthly)
    .exec(Summarys.reputation)
    .exec(Summarys.WallOfFrame)
    .exec(Summarys.dynamicScore)
    .exec(Summarys.redeemIndividual)


}