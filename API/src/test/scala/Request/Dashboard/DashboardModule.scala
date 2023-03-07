package Request.Dashboard

import API.Utils.Environment.baseURL
import API.Utils.Headers.commonHeader
import io.gatling.core.Predef._
import io.gatling.http.Predef._


object DashboardModule {
  val fetchProfilePic= scenario("fetch Profile picture")
    .exec(http("Fetch Profile picture")
      .get(baseURL + "/profile/getProfilePic?email=testadmin@knoldus.com")
      .formParam("email", "soniya.raichandani@knoldus.com")
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

  val getAllRewards = scenario("Fetch All Rewards")
    .exec(http("Get All Rewards")
      .get(baseURL + "/rewards/getAllRewards")
      .headers(commonHeader)
      .check(status is 204))
    .pause(3)
  val addReward = scenario("fetch Profile picture")
    .exec(http("Add reward - Fetch added reward")
      .post(baseURL + "/rewards")

      .formParam("imageFile", "")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)
  val updateReward = scenario("Update Rewards")
    .exec(http("update reward - Fetch updated reward")
      .put(baseURL + "/rewards")

      .formParam("imageFile", "")
      .headers(commonHeader)
      .check(status is 200))
    .pause(3)

  }