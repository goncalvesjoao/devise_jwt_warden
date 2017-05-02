# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# https://medium.com/statuscode/introducing-webpacker-7136d66cddfb

Gemfile
```
source 'https://rubygems.org'

ruby '2.3.1'

gem 'rails', '~> 5.1.x'
gem 'sprockets', '~> 4.x'
```

.ruby-gemset
```
devise_jwt_warden
```

$> rails new . --webpack=react --force


Add to config/application.rb:
```
# https://github.com/activerecord-hackery/ransack#using-simpleform
ENV['RANSACK_FORM_BUILDER'] = '::SimpleForm::FormBuilder'
```


./bin/server

http://localhost:5000/


# https://mattbrictson.com/dynamic-rails-error-pages
