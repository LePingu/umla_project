pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3030:3030' 
        }
    }
     environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'cd client'
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +x ./jenkins/scripts/test.sh'
                sh './jenkins/scripts/test.sh'
            }
        }
        /*stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }*/
    }
}