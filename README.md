1. Name of the project:

-Database Design Final Project - Recipes

2. Name of the team:

-Team 11

3. Team members and sections: 

-Raymond Eah(section 4), Duo Hong(section 4), Jinyu Liu(section 4), Samuel Wang(section 4)

4. Brief description of the project:

-In this project, our goal is to design and implement a normalized database in the domain of 
food. We will also implement a web user interface that allows CRUDing of object models

5. Link to the latest data model (UML class diagaram):

-https://drive.google.com/file/d/1i98dcx-EWTecU628D2wsu-P9Jk7FwqJC/view

6. Description of user data model:

-A user is represented with a first name, last name, username, password, email, and date of birth.

7. Description of domain object data models:

-recipe: a recipe is represented with a title, a set of instructions, and a category
-ingredient: an ingredient is represented by its name.

8. Description of user to domain object relationship: 

-User/Recipe: Each user can write many recipes. A recipe is written by 1 user. 
If a user is removed, then so are their related recipes.

9. Description of domain object to domain object relationship:

-Recipe/Ingredient: A recipe can have many ingredients, and an ingredient can be
used in many recipes. A recipe must have at least 1 ingredient. If a recipe is 
deleted, all ingredients used in that recipe will not be deleted.  

10. Description of portable enumeration:

-Every recipe has a category. A category can be one of: Breakfast, Lunch, Dinner, Snack.

11. Description of user interface requirements

-User List: displays a list of all users

-User Editor: displays a particular user for editing or allows for creating a new user.
Also allows for navigation to all recipes written by that particular users.


-Recipe List: displays a list of all recipes

-Recipe Editor: displays a particular recipe for editing or allows for creating a new recipe.
Also allows for navigation to all ingredients used in that particular recipe as well as
the author of that recipe.


-Ingredient List: displays a list of all ingredients

-Ingredient Editor: displays a particular ingredient for editing or allows for creating a
new ingredient. Also allows for navigation to all recipes that use that particular ingredient.
