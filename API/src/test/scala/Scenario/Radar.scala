package API.Scenario

import io.gatling.core.Predef.scenario
import _root_.Request.Radar.RadarModule
object Radar {
  val radarScenario = scenario("Radar API")
    .exec(RadarModule.radarStudio)
    .exec(RadarModule.radarTechnology)
    .exec(RadarModule.radarCreate)
    .exec(RadarModule.radarQuarter)
}
//