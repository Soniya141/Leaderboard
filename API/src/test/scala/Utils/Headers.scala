package API.Utils

import Request.Knolx.Token.getAccessToken
import _root_.Request.Knolx.Token
object Headers {
  val commonHeader = Map(

    "Proxy-Connection" -> "Keep-alive",
    "Origin" -> "https://www.leaderboard.go1percent.com",
  "Authorization" -> "Bearer ${access_token}",
  )




}
