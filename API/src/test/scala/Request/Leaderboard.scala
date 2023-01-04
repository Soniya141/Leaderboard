package API.Request
import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._



object Leaderboard {

//val sentHeaders = Map("Authorization" -> "bearer ${token}")

  val leaderboard = scenario("Leaderboard APIs")
    .exec(http("Proposal")
    .get(baseURL + "/myProposals")
    .headers(commonHeader)
    //    .formParam("name", "John")
    //    .formParam("password", "John5P4ss")
    .check(status is 200))
    .pause(3)
//    .exec(http(requestName = "All Contributions details")
//    .get(baseURL + "/replayAllContributions")
//    .headers(commonHeader)
//    .check(status is 200))
//    .pause(2)
//.check(regex("Created")).exists
//  val get_users = exec(http(requestName = "get user")
//    .get(baseURL + "/Allcontributions")
//    .headers(commonHeader)
//    .check(status is 200))
}