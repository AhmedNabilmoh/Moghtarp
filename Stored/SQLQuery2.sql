DROP DATABASE Moghtrap ;
create database Moghtrap;
Use Moghtrap ;

CREATE TABLE Users(
userid int identity(1,1) primary key  ,
name varchar(100)not null,
phone varchar(11) not null ,
City varchar(100) ,
Town varchar(100),
email varchar(100)not null unique,
pasword varchar (10)not null
 
);

CREATE TABLE Admin_(

 Admin_id int primary key FOREIGN KEY REFERENCES Users(userid)

);


CREATE TABLE Student(
Student_id int primary key  FOREIGN KEY REFERENCES Users(Userid),
Faculty varchar(100)
);

CREATE TABLE Housing_Owner(

Housing_id int primary key FOREIGN KEY REFERENCES Users(Userid)

);
CREATE TABLE Build(
Build_id int primary key,
Num_room int,
City varchar(100) ,
Town varchar(100),
Housing_id int FOREIGN KEY REFERENCES Housing_Owner (Housing_id)
);

CREATE TABLE Room(
Room_id int primary key,
Price float,
Price_services float,
num_beds int,
Descrip varchar(500),
Build_id int FOREIGN KEY REFERENCES Build(Build_id)
);
CREATE TABLE BOOKING(
booking_id int primary key,
Check_IN_Date DATE NOT NULL,
Reservation_Period varchar(100) NOT NULL,
Creditcard Varchar(100)NOT NULL,
Room_id int FOREIGN KEY REFERENCES Room(Room_id),
Student_id int  FOREIGN KEY REFERENCES Student(Student_id)
);



CREATE TABLE Services_det(
Services_name varchar (100),
Type__name varchar(100),
Build_id int FOREIGN KEY REFERENCES Build(Build_id)

);


CREATE TABLE Feedback(
Rate int,
Comment varchar(100),
Student_id int  FOREIGN KEY REFERENCES Student(Student_id),
Build int FOREIGN KEY REFERENCES  Build(Build_id)
);

CREATE TABLE Images(
  imag_id varchar(500),
  Room_id int FOREIGN KEY REFERENCES  Room(Room_id)

);
