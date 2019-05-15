pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 3030:3030' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}