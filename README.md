In this project you will validate form input for a user who is entering his personal data. The user must enter a valid city and zip code for a Georgia address. For this purpose, you need to use a comma-separated list of Georgia zip codes and cities (supplied). This information comes from http://www.brainyzip.com/state.html.

Your first task is to edit this list into a set of Javascript declarations so that it can be included into your page. So, there is no need to read the list from a file or store it in a database.

Write Javascript event handlers to check the entries into the form below:

First name:  last Name:
Telephone:
City:    Zip code:

When the user leaves the firstName and lastName fields, reformat the entries into proper case (uppercase first character and any character following a space or hyphen; all other chars lowercase). Do this as soon as the focus leaves the entry box.

The phoneNumber must contain ten digits, but could be formatted in a number of different ways such as 706.123.4567 or 706-123-4567. As soon as the focus leaves the telephone box, alert if the number does not contain ten digits, grouped as

    <something>ddd<something>ddd<something>dddd.

Use Javascript Regular Expressions for this part.

As the user types characters into the city field, check the contents as a prefix of the cities in your list. If the prefix identifies a unique city in the list, autocomplete the text box. If there is no city with that prefix, alert the user (Hint: use the onkeyup handler to capture the aftermath of a key press). When a city is identified, populate the zipCode selection list with all the appropriate zip codes for that city. 
