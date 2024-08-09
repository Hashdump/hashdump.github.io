hashdump.github.io
==================

This is the backend for https://hashdumpsecurity.org and our associated wiki

Look in the **\_data** directory to modify officers and meetings.

### Local Development

Please consult the helpful guide on [Jekyll's website](https://jekyllrb.com/docs/installation/#guides) for local development.

If Bundler encounters a permission error when attempting to install the dependencies, try using a custom .bundle path as described on [this page](https://wiki.archlinux.org/title/Ruby#Bundler).

```
bundle config set --local path '.bundle'
bundle install
bundle exec jekyll serve
```
