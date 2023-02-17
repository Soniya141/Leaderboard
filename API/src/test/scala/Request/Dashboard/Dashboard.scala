package Request.Dashboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._


object Dashboard {
  val fetchProfilePic= scenario("fetch Profile picture")
    .exec(http("Fetch Profile picture")
      .get(baseURL + "/profile/getProfilePic?email=testadmin@knoldus.com")
      .formParam("email", "soniya.raichandani@knoldus.com")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val reputation = scenario("Reputation")
    .exec(http("Reputation")
      .get(baseURL + "/reputation/")
//      .formParam("email", "testadmin@knoldus.com")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val twelvemonths = scenario("fetch contribution")
    .exec(http("Reputation Twelve months")
      .get(baseURL + "/reputation/twelvemonths/")

      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val knolderID = scenario("Fetch Knolder ID")
    .exec(http("Knolder ID")
      .get(baseURL + "/get/knolderId?knolderEmail=testadmin@knoldus.com")
      .formParam("knolderEmail","testadmin@knoldus.com")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val lastContribution= scenario("Fetch last Contribution")
    .exec(http("Last Contribution")
      .get(baseURL + "/contribution/last")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val getAllRewards = scenario("Fetch All Rewards")
    .exec(http("Get All Rewards")
      .get(baseURL + "/rewards/getAllRewards")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)

  }