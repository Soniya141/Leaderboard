//package Request.Feeds
//
//import io.gatling.core.Predef.scenario
//import API.Utils.Environment.{URL, baseURL}
//import API.Utils.Headers.commonHeader
//import io.gatling.core.Predef._
//import io.gatling.http.Predef._
//object FeedModule {
//  val likedislikeFeeds = scenario("Like Feeds")
//    .exec(http("Like Dislike Feeds - Fetch like and dislike feeds")
//     .post("https://feed-service.qa.go1percent.com/knoldus-backend/rest/feed-service/feeds/like/351126102")
//      .body(StringBody(
//        """{
//            "userName": "test admin",
//            "email": "testadmin@knoldus.com",
//            "dislike": true
//        }""")).asJson
//      .headers(commonHeader)
//      .check(status is 200))
//    .pause(3)
//  val commentFeeds = scenario("Comment Feeds")
//    .exec(http("Comment feeds - Fetch the comment with user information like user email id, user name and feed time for feeds ")
//    .post("https://feed-service.qa.go1percent.com/knoldus-backend/rest/feed-service/feeds/comment/351126152")
//      .body(StringBody(
//        """{
//            "userName": "test admin",
//            "email": "testadmin@knoldus.com",
//            "comment": "test",
//            "feedTime": "2023-02-24T11:03:14.563Z"
//        }""")).asJson
//      .headers(commonHeader)
//      .check(status is 200))
//    .pause(3)
//  val getallFeeds = scenario("Comment Feeds")
//    .exec(http("Get All Feeds- Fetch all feeds ")
//      .get("https://feed-service.qa.go1percent.com/knoldus-backend/rest/feed-service/feeds/latest/data/0/1")
//      .headers(commonHeader)
//      .check(status is 200))
//    .pause(3)
//  val getallmyactivityFeeds = scenario("Comment Feeds")
//    .exec(http("Get all activity of feeds - Fetch  all activity ")
//      .get("https://feed-service.qa.go1percent.com/knoldus-backend/rest/feed-service/feeds/userProfile/myActivity/0/testadmin@knoldus.com")
//      .headers(commonHeader)
//      .check(status is 200))
//    .pause(3)
//
//}
