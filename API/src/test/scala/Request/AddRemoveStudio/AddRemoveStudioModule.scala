package Request.AddRemoveStudio

import API.Utils.Headers.commonHeader
import API.Utils.Environment.baseURL
import io.gatling.http.Predef.{http, status}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
object AddRemoveStudioModule {

  val addRemove = scenario("Fetch open helpdesk tickets")
    .exec(http("Add and Remove Studio- Fetch added and removed details")
      .get(baseURL + "/update/studio")
      .body(StringBody(
        """{
            "knolderId": 506,
            "newStudioId": 1
        }""")).asJson

      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val FetchallDetails = scenario("Fetch open helpdesk tickets")
    .exec(http("All details- Fetch studio members details")
      .get(baseURL + "/studiosMember?id=8&pageNumber=0&limit=100")
      .body(StringBody(
        """{
          "knolderId": 506,
          "newStudioId": 1
      }""")).asJson

      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
}