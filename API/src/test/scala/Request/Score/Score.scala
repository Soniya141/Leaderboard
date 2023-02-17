package Request.Score
import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._


object Score {

  //val sentHeaders = Map("Authorization" -> "bearer ${token}")

  val dynamicScore = scenario("Dynamic scoring")
    .exec(http("Dynamic Scoring")
      .get(baseURL + "/reputation/dynamicscoring")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
}