//package Simulations.Runner
//import API.Scenario.Admin.adminScenario
//import API.Utils.Environment
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//import io.gatling.http.protocol.HttpProtocolBuilder
//class Admin extends Simulation{
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
//  val scenarioP = adminScenario
//  setUp(scenarioP.inject(rampUsers(2000).during(1)).protocols(httpProtocol))
//}
