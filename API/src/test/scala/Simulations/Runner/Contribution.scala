//package Simulations.Runner
//
//import API.Scenario.Contribution.contributionScenario
//
//import API.Scenario.GenerateToken.generateTokenn
//
//import API.Utils.Environment
//import API.Utils.Environment.{baseURL, users}
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//import scala.concurrent.duration.DurationInt
//import scala.language.postfixOps
//import scala.util.Using.resource
//
//class Contribution extends Simulation {
//  val httpProtocol: HttpProtocolBuilder = http.baseUrl(baseURL)
////  val feeder = csv("data/addcontribution.csv").queue
////val getAccessToken = scenario("Get token")
////  .exec(Token.getAccessToken)
//  val scenarioA = contributionScenario
//  setUp(scenarioA.inject(rampUsers(10).during(1)).protocols(httpProtocol))









  //    setUp(scenarioD.inject(rampUsers(200).during(100)).protocols(httpProtocol))
//  val scenarioE = generateTokenn
//  setUp(scenarioE.inject(rampUsers(1).during(1)).protocols(httpProtocol))



//}
