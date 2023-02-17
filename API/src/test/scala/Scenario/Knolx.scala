package API.Scenario

import io.gatling.core.Predef.scenario
import _root_.Request.Leaderboard.Knolxx
object Knolx {

  val knolxScenario = scenario("Contribution API")
    .exec(Knolxx.manageSlot)
    .exec(Knolxx.pastSession)
    .exec(Knolxx.feedbackForm)
    .exec(Knolxx.manageSession)
    .exec(Knolxx.mypastSession)
    .exec(Knolxx.bookASessionallUsers)
    .exec(Knolxx.bookASessionaStudio)
    .exec(Knolxx.managecompletedSession)
    .exec(Knolxx.manageupcomingSession)
    .exec(Knolxx.myupcomingSession)





}
