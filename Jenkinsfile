import java.util.*
import groovy.json.JsonSlurper

node{
	stage 'checkout'
	echo "Checking out SCM"
	checkout scm
	
	stage 'deploy ansible'
	def buildUrl = env.BUILD_URL
	sh """printenv"""
	def buildJson = getBuildDetails()
	def buildUser = getLatestChangeSetUser(buildJson)
	if(buildUser.isEmpty()){
		println ("Failed to get lastest ChangeSetUser")
	}else{
		println("Current Build User = ${buildUser}")
	}
	
	//testJson = "{\"investigations\":[{\"header\":{\"stuff\":\"first array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}},{\"header\":{\"stuff\":\"second array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}} ]}"
}

def getBuildDetails(){
	def buildJson = '{}'
	withCredentials([usernamePassword(credentialsId: 'jenkinslogin', passwordVariable: 'JENKINSPASSWORD', usernameVariable: 'JENKINSUSERNAME')]) {
		buildJson = sh(returnStdout: true, script: "wget ${env.BUILD_URL}api/json --user=${env.JENKINSUSERNAME} --password=${env.JENKINSPASSWORD} --auth-no-challenge -O-")	
	}
	return buildJson
}

def getLatestChangeSetUser(buildJson){
	def buildUser = ''
	JsonSlurper jsl = new JsonSlurper()
	def jsonObj = jsl.parseText(buildJson)
	assert jsonObj instanceof Map
	def changeSets = jsonObj.get("changeSets")
	assert changeSets instanceof List

	for (int i = 0; i < changeSets.size(); i++) {
		def change = changeSets[i]
		assert change instanceof Map
		for (item in change.get('items') ) {
			buildUser = item.get("author").get("fullName")
		}
	}

	return buildUser
}