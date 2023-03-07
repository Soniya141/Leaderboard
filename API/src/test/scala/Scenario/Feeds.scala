//package API.Scenario
//
//import io.gatling.core.Predef.scenario
//import _root_.Request.Feeds.FeedModule
//object Feeds {
//  val feedsScenario = scenario("Feeds Scenario")
//    .exec(FeedModule.getallFeeds)
//    .exec(FeedModule.commentFeeds)
//    .exec(FeedModule.likedislikeFeeds)
//    .exec(FeedModule.getallmyactivityFeeds)
//}
