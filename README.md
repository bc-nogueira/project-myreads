# MyReads Project

This is a project from Udacity's React Nanodegree course.

It's a library where you can select and classify books that you want to read, you are reading or you already read.

It consists of two pages:

* Main page

This is where your books are shown. They are classified in three different shelfs: read, want to read and reading.
Here you can change books between shelfs, remove a book from any of your shelfs and get more info about a book.

* Search page

Here you can search for different books. It also shows the books you have in your library.
You can add a book for a shelf, change the ones that you already have in your library and get more info about a book.

`Atention:` The search is limited to a particular set of terms. You can find these terms at the end of this README.

In each book that appears, that are two buttons:

* The left one, with an info icon, opens a modal that contains more informations about the book. 
It shows informations like, title, subtitle, authors, pages, descriptions and some others.

* The right one is where you change (or add) the book from the shelfs. 
If the book you are looking is already in a shelf, it shows in the select menu. 
This button can have two different icons:
    1. A arrow down: it means this book isn't in any of your shelfs.
    2. A refresh icon: it means this book is already at one of the shelfs.

## How to run

1. Clone or download this repository. (https://github.com/bc-nogueira/project-myreads)
2. Go to the folder that the project is located.
3. To install dependencies run: `npm install` or `yarn install`
4. To start the app run `npm start` or `yarn start`
5. A new browser tab should open automatically but if it doesn't you can access it at `localhost:3000` 

## Backend Server

This application is provided with a backend server that performs some basic actions.

Among these actions is the search that is limited to a particular set of terms. They are:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

