FROM openjdk:17-jdk-slim

WORKDIR /opt/project

COPY ./back ./

EXPOSE 8080

CMD ["java", "-jar", "/opt/project/target/web4-0.0.1-SNAPSHOT.jar"]