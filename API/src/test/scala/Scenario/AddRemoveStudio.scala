package API.Scenario

import io.gatling.core.Predef.scenario
import _root_.Request.AddRemoveStudio.AddRemoveStudioModule



object AddRemoveStudio {
  val addremoveScenaio = scenario("Add and Remove Studio API")
    .exec(AddRemoveStudioModule.addRemove)
    .exec(AddRemoveStudioModule.FetchallDetails)
}
