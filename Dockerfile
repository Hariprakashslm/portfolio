# Build stage
FROM node:20.19.0 AS builder

WORKDIR /portfolio

# Copy only package files first (better layer caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .
RUN npm run build

# Production stage
FROM node:20.19.0 AS runner

WORKDIR /portfolio

# Copy only necessary runtime files from builder
COPY --from=builder /portfolio/.next ./.next
COPY --from=builder /portfolio/public ./public
COPY --from=builder /portfolio/package*.json ./
COPY --from=builder /portfolio/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
