pipeline {
  agent any
  stages {
    stage ('build') {
      steps {
        sh 'printenv'
      }
    }
    stage ('Publish ECR') {
      steps {
        withEnv (["AWS_ACCESS_KEY=${env.AWS_ACCESS_KEY_ID}", "AWS_SECRET_ACCESS_KEY=${env.AWS_SECRET_ACCESS_KEY}", "AWS_DEFAULT_REGION=${env.AWS_DEFAULT_REGION}"]) {
          sh 'docker login -u AWS -p $(aws ecr get-login-password --region ap-northeast-2) 548021806095.dkr.ecr.ap-northeast-2.amazonaws.com'
          sh 'docker build -t login .'
          sh 'docker tag login 548021806095.dkr.ecr.ap-northeast-2.amazonaws.com/test-ecr:login""$BUILD_ID""'
          sh 'docker push 548021806095.dkr.ecr.ap-northeast-2.amazonaws.com/test-ecr:login""$BUILD_ID""'
        }
      }
    }
    stage('Push Yaml'){
      steps{
        script {
          try {
            git url: 'https://github.com/jhoneminjun/argocd', branch: "main", credentialsId: 'github'
            // sh "rm -rf /var/lib/jenkins/workspace/${env.JOB_NAME}/*"
            sh """
            #!/bin/bash
            cat>deploy.yaml<<-EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-login
  labels:
    app: web
spec:
  replicas: 1
  selector:
    matchLabels:
       app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - image: 548021806095.dkr.ecr.ap-northeast-2.amazonaws.com/test-ecr:login${env.BUILD_NUMBER}
        name: web-login
EOF"""
            //sh "cat /var/lib/jenkins/workspace/${env.JOB_NAME}/yaml/deploy.yaml"
                        withCredentials([gitUsernamePassword(credentialsId: 'github')]) {
                            sh """
                            git add deploy.yaml
                            git commit -m "Deploy ${env.JOB_NAME} ${env.BUILD_NUMBER}"
                            git push https://github.com/jhoneminjun/argocd.git
                            """
                        }
            //sh "sudo rm -rf /var/lib/jenkins/workspace/${env.JOB_NAME}/*"

                        env.pushYamlResult=true
                        } catch (error) {
                        print(error)
                        }
          //sh "sudo rm -rf /var/lib/jenkins/workspace/${env.JOB_NAME}/*"

                        
                        env.pushYamlResult=false
                        currentBuild.result = 'FAILURE'
        }
      }
    }
  }
}
