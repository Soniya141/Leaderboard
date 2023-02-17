package Simulations.Runner

import API.Scenario
import Scenario.{Contribution, Knolx}
import API.Scenario.Contribution.contributionScenario
import API.Scenario.Studio.studioScenario
import API.Scenario.Techup.techupScenario
import API.Scenario.GenerateToken.generateTokenn
import API.Scenario.Summary.summaryScenario
import API.Scenario.Knolx.knolxScenario
import API.Utils.Environment
import API.Utils.Environment.{baseURL, users}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import _root_.Request.Knolx.Token
import _root_.Request.Leaderboard.Summarys
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps
import scala.util.Using.resource

class Go1percent extends Simulation {
  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  val feeder = csv("data/addcontribution.csv").queue
//  val scenarioA = contributionScenario
////  feed(feeder)
//  setUp(scenarioA.inject(rampUsers(10).during(1)).protocols(httpProtocol))
//
//val getAccessToken = scenario("Get token")
//  .exec(Token.getAccessToken)
//  val scenarioB = studioScenario
//  setUp(scenarioB.inject(rampUsers(300).during(100)).protocols(httpProtocol))

//  val scenarioC = summaryScenario
//  setUp(scenarioC.inject(rampUsers(100).during(100)).protocols(httpProtocol))
//    val scenarioD = techupScenario
//    setUp(scenarioD.inject(rampUsers(200).during(100)).protocols(httpProtocol))
val scenarioF = knolxScenario

  setUp(scenarioF.inject(rampUsers(480).during(100)).protocols(httpProtocol))
  //    setUp(scenarioD.inject(rampUsers(200).during(100)).protocols(httpProtocol))
//  val scenarioE = generateTokenn
//  setUp(scenarioE.inject(rampUsers(1).during(1)).protocols(httpProtocol))



}
