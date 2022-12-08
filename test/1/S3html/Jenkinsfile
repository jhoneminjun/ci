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
          sh 'docker login -u AWS -p $(aws ecr get-login-password --region ap-northeast-2) 880363532320.dkr.ecr.ap-northeast-2.amazonaws.com'
          sh 'docker build -t main .'
          sh 'docker tag main 880363532320.dkr.ecr.ap-northeast-2.amazonaws.com/bebehw:main""$BUILD_ID""'
          sh 'docker push 880363532320.dkr.ecr.ap-northeast-2.amazonaws.com/bebehw:main""$BUILD_ID""'
        }
      }
    }
    stage('Push Yaml'){
      steps{
        script {
          try {
            git url: 'https://github.com/bespinbaby/argocd', branch: "master", credentialsId: 'bespinbaby'
            // sh "rm -rf /var/lib/jenkins/workspace/${env.JOB_NAME}/*"
            sh """
            #!/bin/bash
            cat>main.yaml<<-EOF
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
      - image: 880363532320.dkr.ecr.ap-northeast-2.amazonaws.com/bebehw:main${env.BUILD_NUMBER}
        name: web-login
EOF"""
            //sh "cat /var/lib/jenkins/workspace/${env.JOB_NAME}/yaml/main.yaml"
                        withCredentials([gitUsernamePassword(credentialsId: 'bespinbaby')]) {
                            sh """
                            git add main.yaml
                            git commit -m "Deploy ${env.JOB_NAME} ${env.BUILD_NUMBER}"
                            git push https://github.com/bespinbaby/ArgoCD.git
                            """
                        }                     
                        env.pushYamlResult=true
                        } catch (error) {
                        print(error)
                        }
                        
                        env.pushYamlResult=false
                        currentBuild.result = 'FAILURE'
        }
      }
    }
  }
}
