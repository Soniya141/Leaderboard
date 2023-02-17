//package Simulations.Runner
//
//import API.Scenario
//import API.Scenario.Studio.studioScenario
//
//import API.Utils.Environment
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import _root_.Request.Leaderboard.Summarys
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//import scala.language.postfixOps
//
//
//
//
//class Studio extends Simulation {
//  val scenarioB = studioScenario
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  setUp(scenarioB.inject(rampUsers(1000).during(100)).protocols(httpProtocol))
//
//
//
//
//
//
//
//
//
//
//}
//
//
//
//
