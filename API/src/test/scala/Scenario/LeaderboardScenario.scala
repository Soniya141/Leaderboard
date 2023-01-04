package API.Scenario


import API.Request.Leaderboard
import io.gatling.core.Predef._
import io.gatling.http.Predef._





import io.gatling.core.Predef.scenario

object LeaderboardScenario{
  val createScenario = scenario("Create  Scenario")

.exec(Leaderboard.leaderboard)



}