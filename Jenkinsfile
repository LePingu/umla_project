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
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}