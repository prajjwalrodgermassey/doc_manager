pipeline {
    agent any

    tools {
        nodejs "node 22"
    }

    stages {
        stage('build'){
            steps{
                sh "npm install"
                sh "npm run build"
            }
        }
    }
}