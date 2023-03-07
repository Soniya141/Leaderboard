//
//package Simulations.Runner
//
//
//import API.Scenario
//
//  import API.Scenario.Radar.radarScenario
//
//  import API.Utils.Environment
//  import API.Utils.Environment.{baseURL, users}
//  import io.gatling.core.Predef._
//  import io.gatling.http.Predef._
//
//  import io.gatling.http.protocol.HttpProtocolBuilder
//
//  import scala.language.postfixOps
//
//
//
//
//  class Radar extends Simulation {
//    val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//    val scenarioM = radarScenario
//    setUp(scenarioM.inject(rampUsers(10).during(100)).protocols(httpProtocol))
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
//
//
//
//
//
//
//
//}
