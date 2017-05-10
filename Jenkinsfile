import java.util.*
import groovy.json.JsonSlurper

node{
	stage 'checkout'
	echo "Checking out SCM"
	checkout scm
	
	println "Hello World"
	def firstName = "chris"
	def lastName = "beech"
	println "Hello, ${firstName}"
	println "${env.PATH}"
	println "${env.BUILD_URL}"
	sh """printenv"""
	sh "wget www.google.co.uk -O-"	

	testJson = "{\"investigations\":[{\"header\":{\"stuff\":\"first array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}},{\"header\":{\"stuff\":\"second array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}} ]}"
	println(testJson)
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
	}
}