pipeline {
    agent {
        docker {
            image 'alpine:3.21'
        }
    }

    // tools {
    //     nodejs "node 22"
    // }

    stages {
        stage('build'){
            steps{
                sh "npm install"
                sh "npm run build"
            }
        }
    }
}