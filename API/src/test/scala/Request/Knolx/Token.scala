
package Request.Knolx

//
//import API.Utils.Environment.baseURL
import API.Utils.GetToken
import API.Utils.Headers.commonHeader
import com.typesafe.scalalogging.LazyLogging
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import java.io.{BufferedWriter, FileWriter}
import java.lang.System.console

object Token {
  //  private var token: String = ""
  val getAccessToken = scenario("token")
    .exec(http("Get access token")

      .post(GetToken.tokenPath)

      .body(StringBody(
        s"""{
               "client_id": "${GetToken.client_id}",
               "client_secret": "${GetToken.client_secret}",
               "username": "${GetToken.username}",
               "password": "${GetToken.password}",
               "grant_type": "${GetToken.grant_type}",

             }"""
      ))


      .asJson
      .headers(Map("Content-Type" -> "application/json"))
      .check(status.is(200))
      .check(jsonPath("$.access_token").saveAs("access_token"))

    )
  //  .exec {
  //    session =>
  //      val fw = new BufferedWriter(new FileWriter("access_token.txt", true))
  //      try {
  //        fw.write(session("access_token").as[String] + "\r\n")
  //      }
  //      finally fw.close()
  //      session
  //  }
  //}
}