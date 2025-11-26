pipeline {
    // added docker cli in jenkins container and added docker.sock in the jenkins container
    // added docker group id using groupadd -g (GID of DOKCER) docker, and then adding the jenkins user to it using (usermod -aG docker jenkins)
    agent any
    // tools {
    //     nodejs "node 22"
    // }

    stages {
        stage('build'){
            steps{
            // NOT USED AS NEEDS APPROVAL
            //    script {dockerImage = docker.buld("myapp:latest")}
            // USE THIS INSTEAD
            sh """ docker build -t my-app:latest ."""
            }
        }
    }
}