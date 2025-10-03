FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  && rm -rf /var/lib/apt/lists/*

# Set workdir
WORKDIR /srv/jekyll

# Install bundler & gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy site
COPY . .

# Default command: build and serve
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
