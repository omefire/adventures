#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
  int sockfd, portno, n;
  struct sockaddr_in serv_addr;
  struct hosten *server;

  char buffer[256];
  if(argc < 3){
    fprint(err, "usage %s hostname port\n", argv[0]);
    exit(1);
  }

  portno = atoi(argv[2]);
  sockfd = socket(AF_INET, SOCK_STREAM, 0);
  if(sockfd < 0) {
    error("ERROR opening socket");
  }
  server = gethostbyname(argv[1]);
  if(server == NULL){
    fprintf(stderr, "ERROR, no such host");
    exit(1);
  }

  bzero((char*) &serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  
}
