
package Request.Knolx

//
//import API.Utils.Environment.baseURL

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object TokenModule {
  //  private var token: String = ""
  val getAccessToken = scenario("token")
    .exec(http("get access token")
    .post("https://auth.knoldus.com/auth/realms/knoldus/protocol/openid-connect/token")
    .header(HttpHeaderNames.ContentType, HttpHeaderValues.ApplicationFormUrlEncoded)
    .formParam("client_id", "leaderboard-ui")
    .formParam("client_secret", "8090ed15-4cd1-483c-9fee-2a8b35941852")
    .formParam("username", "bhavya")
    .formParam("password", "india1978")
    .formParam("grant_type", "password")
    .check(jsonPath("$..access_token").saveAs("Access_Token"))
    .check(status.is(200))
    .check(bodyString.saveAs("BODY"))
  )
  .exec(session => {
    val response = session("BODY").as[String]
    println(s"Response body: \n$response")
    session
  })

}

