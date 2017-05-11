import java.util.*
import groovy.json.JsonSlurper

node{
	stage 'checkout'
	echo "Checking out SCM"
	checkout scm
	
	stage 'deploy ansible'
	def pass = {}
	def buildUrl = env.BUILD_URL
	def buildNum = env.BUILD_ID
	sh """printenv"""

	withCredentials([usernamePassword(credentialsId: 'jenkinslogin', passwordVariable: 'JENKINSPASSWORD', usernameVariable: 'JENKINSUSERNAME')]) {
		def buildJson = sh(returnStdout: true, script: "wget ${buildUrl}api/json --user=${env.JENKINSUSERNAME} --password=${env.JENKINSPASSWORD} --auth-no-challenge -O-")	
	}
	testJson = "{\"investigations\":[{\"header\":{\"stuff\":\"first array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}},{\"header\":{\"stuff\":\"second array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}} ]}"
	println(testJson)
	println(buildJson)
	JsonSlurper jsl = new JsonSlurper()

	def jsonObj = jsl.parseText(testJson)
	def jsonRoot = jsonObj

	assert jsonRoot instanceof Map

	def jsonArray = jsonRoot.get("investigations")
	assert jsonArray instanceof List

	for (int i = 0; i < 2; i++) {
		def invData = jsonArray[i]
		assert invData instanceof Map
		def header = invData.get("header")
		def data = invData.get("data")

		def stuff = header.get("stuff")
		println stuff
		getJenkinsBuild("userid")
	}
}

def getJenkinsBuild(field){
    println("Getting build info for " + field)
}

def getCredentials(){

}