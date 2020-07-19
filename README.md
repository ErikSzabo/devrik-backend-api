# devrik backend API

This API powers and will power my portfolio website.

Eventually, it will have admin login feature for me, and for those, who will edit projects, skills, and any other future content on the page.

It's far from done...

# Endpoints

**GET** minified projects

```
/api/v1/projects
```

**GET** project pages which can be transered to a web page

```
/api/v1/projects-pages
```

**GET** skills

```
/api/v1/skills
```

**If you put a /id after each endpoint, it will respond with an individual item.**

---

**POST** add a new minified project

```
/api/v1/projects/preview
```

**POST** add a new project page

```
/api/v1/projects/extended
```

**POST** add a new skill

```
/api/v1/skills
```

---

**PATCH** and **DELETE** endpoints are follow the same structure as POST endpoints with a /id at the end, where id is the database id.
