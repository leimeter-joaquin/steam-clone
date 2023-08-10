FROM node:18

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

ENV PYTHON=/path/to/python3

WORKDIR /app

COPY package*.json ./ 

COPY pnpm-lock.yaml ./ 


RUN npm install -g pnpm

RUN pnpm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:459632OPA%23opa@db.oyagjhnvmasvxmtxatdf.supabase.co:5432/postgres"

ENV SUPABASE_URL="https://oyagjhnvmasvxmtxatdf.supabase.co"

ENV SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95YWdqaG52bWFzdnhtdHhhdGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NjA1NTMsImV4cCI6MTk4OTAzNjU1M30.FfDNguMQzEXbqwBiCxDSdEBHNF4vb26IFF707gdqD8E"

RUN npx prisma generate

RUN pnpm run build

EXPOSE 3000/tcp

CMD [ "node", "dist/src/main.js" ]

# generate prisma