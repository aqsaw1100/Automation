#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node14.16.0-chrome90-ff88
#Create the folder where our project will be stored
RUN mkdir -p /cypress-docker
#We make it our workdirectory
WORKDIR /cypress-docker

#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.json .
COPY ./package-lock.json .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx" , "cypress", "run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.