package Request.Leaderboard
import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef.{feed, _}
import io.gatling.http.Predef._
object Knolx {
  val mySession = scenario("Replay all contributions")
    .exec(http("My session- Fetch the user knolx details")
      .get(baseURL + "/v02/sessions/manage?pageNumber=1&pageSize=10&filter=requested&search=")
      .formParam("pageNumber", 1)
      .formParam("pageNumber", 10)
      .formParam("filter", "requested")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
//  val mySession = scenario("Replay all contributions")
//    .exec(http("My session- Fetch the user knolx details")
//      .get(baseURL + "/v02/sessions/manage?pageNumber=1&pageSize=10&filter=requested&search=")
//      .formParam("pageNumber", 1)
//      .formParam("pageNumber", 10)
//      .formParam("filter", "requested")
//      .headers(commonHeader)
//      .check(status is 200))
//    .pause(3)
}
