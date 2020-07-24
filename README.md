# devrik backend API

This API powers and will power my portfolio website.

Eventually, it will have admin login feature for me, and for those, who will edit projects, skills, and any other future content on the page.

It's far from done...

# Endpoints

**GET** minified projects

```
/projects
```

**GET** project pages which can be transered to a web page

```
/project-pages
```

**GET** skills

```
/skills
```

**If you put a /id after each endpoint, it will respond with an individual item.**

---

**POST** add a new minified project

```
/projects/preview
```

**POST** add a new project page

```
/projects/extended
```

**POST** add a new skill

```
/skills
```

---

**PUT** and **DELETE** endpoints are follow the same structure as POST endpoints with a /id at the end, where id is the database id.
