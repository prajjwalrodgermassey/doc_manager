pipeline {
    // added docker cli in jenkins container and added docker.sock in the jenkins container
    // added docker group id using groupadd -g (GID of DOKCER) docker, and then adding the jenkins user to it using (usermod -aG docker jenkins)
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