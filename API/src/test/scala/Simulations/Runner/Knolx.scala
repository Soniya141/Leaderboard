//package Simulations.Runner
//
//import API.Scenario.Knolx.knolxScenario
//import io.gatling.core.Predef.rampUsers
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.http.protocol.HttpProtocolBuilder
//import scala.language.postfixOps
//class Knolx  extends Simulation{
//  val scenarioF = knolxScenario
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  setUp(scenarioF.inject(rampUsers(10).during(1)).protocols(httpProtocol))
//}
