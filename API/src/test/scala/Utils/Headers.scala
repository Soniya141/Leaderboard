package API.Utils

import Request.Knolx.TokenModule.getAccessToken
import _root_.Request.Knolx.TokenModule.getAccessToken
object Headers {
  val commonHeader = Map(

    "Proxy-Connection" -> "Keep-alive",
    "Origin" -> "https://www.leaderboard.go1percent.com",
  "Authorization" -> "Bearer ${Access_Token}"
  )

}
