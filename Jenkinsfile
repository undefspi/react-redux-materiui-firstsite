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

	stage 'Json Parsing'
	tJson = "{\"investigations\":[{\"header\":{\"stuff\":\"first array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}},{\"header\":{\"stuff\":\"second array item\"},\"data\":{\"investigation\":\"gerald\",\"code\":1}} ]}"
	println(tJson)
	JsonSlurper jsl = new JsonSlurper()

	def jsonObj = jsl.parseText(tJson)
	def jsonRoot = (Map) jsonObj

	assert jsonRoot instanceof Map

}