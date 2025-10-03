# Sunboxlabs

This is a Jekyll-generated site offering DIY hacks for solar power systems.

Follow the project on https://sunboxlabs.com


## Podman install

`podman build -t sunboxlabs .`

```
podman run --rm -it \
  -p 4000:4000 -p 35729:35729 \
  -v .:/srv/sunboxlabs \
  sunboxlabs
```

## Native install

Build with [Jekyll](https://jekyllrb.com/).

`brew install ruby`

`gem install bundler jekyll` # sometimes, to update jekyll

`bundle install` to install the Jekyll dependencies

`./serve.sh` or `bundle exec jekyll serve --livereload` to run

`./deploy.sh` to deploy
