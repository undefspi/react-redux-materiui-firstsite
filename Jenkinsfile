import java.util.*
import groovy.json.JsonSlurper

node{
	stage 'checkout'
	echo "Checking out SCM"
	checkout scm
	
	stage 'deploy ansible'
	def buildUrl = env.BUILD_URL
	sh """printenv"""

	withCredentials([usernamePassword(credentialsId: 'jenkinslogin', passwordVariable: 'JENKINSPASSWORD', usernameVariable: 'JENKINSUSERNAME')]) {
		def buildJson = sh(returnStdout: true, script: "wget ${buildUrl}api/json --user=${env.JENKINSUSERNAME} --password=${env.JENKINSPASSWORD} --auth-no-challenge -O-")	
	}
	//testJson = "{\"investigations\":[{\"header\":{\"stuff\":\"first array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}},{\"header\":{\"stuff\":\"second array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}} ]}"
	
	
	JsonSlurper jsl = new JsonSlurper()
	def jsonObj = jsl.parseText(buildJson)

	assert jsonObj instanceof Map

	def jsonActionsArray = jsonRoot.get("actions")
	assert jsonActionsArray instanceof List

	for (int i = 0; i < 2; i++) {
		def action = jsonActionsArray[i]
		assert action instanceof Map
	}
}

def getJenkinsBuild(field){
    println("Getting build info for " + field)
}

def getCredentials(){

}