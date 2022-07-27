#!/bin/bash

func(){
  echo "Use one of the following options:"
}

while true
do
  func
  read input
  case ${input} in
    P|p)
      pwd
      ;;
    s|S)
      echo $0
      ;;
    d|D)
      date "+%Y-%m-%d %H:%M:%S"
      
