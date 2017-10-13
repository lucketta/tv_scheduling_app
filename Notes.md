1. 'rails new [name] --database=postgresql --webpack=react --skip-coffee'
2. add git repo
3. change development to sql [maybe not though]
4. 'create-react-app client' for front end front end
5. package.json in client to run 3001 port
    - "proxy": "http://localhost:3001",

5. Procfile and Procfile.dev
    - web: bundle exec rails s
    - web: cd client && PORT=3000 npm start
      api: PORT=3001 && bundle exec rails s

6. gem 'foreman' and bundle install/update
7. start.rake in lib/tasks
    - namespace :start do
      task :development do
        exec 'foreman start -f Procfile.dev'
      end

      desc 'Start production server'
      task :production do
        exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
      end
    end

    desc 'Start development server'
    task :start => 'start:development'


8. scripts in package.json root
  - "build": "cd client && npm install && npm run build && cd ..",
   "deploy": "cp -a client/build/. public/",
   "postinstall": "npm run build && npm run deploy && echo 'Client built!'"

9. heroku apps:create
10. rename -
11. terminal: heroku config:set NPM_CONFIG_PRODUCTION=false
12. rename: heroku apps:rename [newname]
