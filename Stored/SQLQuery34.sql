DROP DATABASE Moghtrap  ;
create database Moghtrap;
Use Moghtrap ;

CREATE TABLE Users(
userid int identity(1,1) primary key  ,
name varchar(100)not null,
phone varchar(11) not null ,
adress varchar(100) ,
email varchar(100)not null unique,
pasword varchar (100)not null
);

CREATE TABLE Admin_(

 Admin_id int  primary key FOREIGN KEY REFERENCES Users(userid)

);


CREATE TABLE Student(
Student_id int primary key  FOREIGN KEY REFERENCES Users(Userid),
Faculty varchar(100)
);

CREATE TABLE Housing_Owner(

Housing_id int primary key FOREIGN KEY REFERENCES Users(Userid)

);
CREATE TABLE apartment(
apartment_id int primary key,
Num_room int,
Price float,
Price_services float,
num_beds int,
adress varchar(100) ,
Descrip varchar(500),
Housing_id int FOREIGN KEY REFERENCES Housing_Owner (Housing_id)
);

CREATE TABLE BOOKING(
book_id int primary key,
booking_Date DATE NOT NULL,
Reservation_Period varchar(100) NOT NULL,
Creditcard Varchar(100)NOT NULL,
Room_id int FOREIGN KEY REFERENCES apartment(apartment_id),
Student_id int  FOREIGN KEY REFERENCES Student(Student_id)
);



CREATE TABLE Services_det(
Services_name varchar (100),
Build_id int primary key  FOREIGN KEY REFERENCES apartment(apartment_id)

);

CREATE TABLE Feedback(
Rate int,
Comment varchar(100),
Student_id int primary key  FOREIGN KEY REFERENCES Student(Student_id),
Build int FOREIGN KEY REFERENCES  apartment(apartment_id)
);

CREATE TABLE Images(
  imag_id varchar(500),
  Room_id int primary key  FOREIGN KEY REFERENCES apartment(apartment_id)

);