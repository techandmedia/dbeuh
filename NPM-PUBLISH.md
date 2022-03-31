https://sergiodxa.com/articles/github-actions-npm-publish

### Membuat action di github

Cari template bertuliskan npm-publish

Perhatikan file
.github\workflows\npm-publish.yml

```yml
# jika bertuliskan on release, maka harus release 'manual' melalui menu github. Jangan lupa untuk memberikan tag version number pada saat sebelum melakukan release
on:
  release:
    types: [created]
#
# ---
```
