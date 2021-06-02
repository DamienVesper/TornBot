FROM node:lts-alpine

# Install Yarn
RUN npm i -g yarn

# Create the working directory.
RUN mkdir /opt/TornBot
WORKDIR /opt/TornBot

# Copy package.json.
COPY package.json .

# Install packages.
RUN yarn install

# Copy the rest of the files.
COPY . .

# Build and run the project.
CMD ["yarn", "dist"]
