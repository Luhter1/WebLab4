cd back
mvn clean package
cd ..
cd front
sudo npm run build
cd ..
sudo docker compose build
# java -jar ./back/target/web4-0.0.1-SNAPSHOT.jar
# sudo docker compose up

