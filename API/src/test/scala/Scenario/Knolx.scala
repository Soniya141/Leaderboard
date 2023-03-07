package API.Scenario

import Request.Knolx.KnolxModule
import io.gatling.core.Predef.scenario
object Knolx {

  val knolxScenario = scenario("Contribution API")
    .exec(KnolxModule.manageSlot)
    .exec(KnolxModule.pastSession)
    .exec(KnolxModule.feedbackForm)
    .exec(KnolxModule.manageSession)
    .exec(KnolxModule.mypastSession)
    .exec(KnolxModule.bookASessionallUsers)
    .exec(KnolxModule.bookASessionStudio)
    .exec(KnolxModule.managecompletedSession)
    .exec(KnolxModule.manageupcomingSession)
    .exec(KnolxModule.myupcomingSession)





}
