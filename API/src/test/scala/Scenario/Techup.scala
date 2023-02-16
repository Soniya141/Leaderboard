package API.Scenario

import Request.Leaderboard.Techupp
import io.gatling.core.Predef.scenario

object Techup {
  val techupScenario = scenario("Summary API")
    .exec(Techupp.myTechup)
    .exec(Techupp.approvalTechup)
    .exec(Techupp.allTechup)
    .exec(Techupp.draftTechup)
    .exec(Techupp.reviewTechup)

}
