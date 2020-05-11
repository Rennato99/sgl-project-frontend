FROM node:12.16.3

# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli@8 && npm cache clean --force

RUN apt update

#RUN adduser --disabled-password --gecos '' newuser \
 #   && adduser newuser sudo \
  #  && echo '%sudo ALL=(ALL:ALL) ALL' >> /etc/sudoers

RUN mkdir /app

#RUN chown newuser $HOME
#USER newuser 

WORKDIR /app

COPY . /app/



# Puerto entorno dev
EXPOSE 4201
# Puerto livereload
EXPOSE 49154
# Puerto Test
EXPOSE 9877
# Puerto e2e
EXPOSE 49153


RUN npm cache clean --force
# RUN npm install --yes
CMD [ "npm", "install", "--yes" ]

