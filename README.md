# devrik backend API

This API powers and will power my portfolio website (and maybe other things in the future).

It has an admin login feature for me, and for those, who will edit projects, skills, and any other future content on the page.

# Endpoints

**GET** projects

```
/projects
```

**GET** skills

```
/skills
```

**If you put a /id after each endpoint, it will respond with an individual item.**

---

**POST** add a new minified project

```
/projects
```

**POST** add a new skill

```
/skills
```

---

**PUT** and **DELETE** endpoints are follow the same structure as POST endpoints with a /id at the end, where id is the database id.
