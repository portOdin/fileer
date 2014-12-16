fileer
======

CollectionFS Meteor with which to upload and download files.

## Installation

```bash
$ git clone https://github.com/yasaricli/fileer.git
$ cd fileer
$ meteor update
$ meteor run 
``` 

#### Deploy on Forever

change build script **ROOT_URL, PORT**

```bash
$ npm install forever -g
$ cd fileer
$ ./build 
``` 

Add the following line to http or server or location context to increase the size limit in nginx.conf, enter:

    # set client body size to 2M #
    client_max_body_size 5M; 
    
    
