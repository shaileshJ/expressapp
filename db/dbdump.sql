create table users(
    id int, 
    name varchar(20),
    phone varchar(20), 
    email varchar(20)
);
insert into users(
        id,
        name,
        phone,email) 
values(
        1,
        'Kss',
        '3333333',
        'kss@abc.com'
);
insert into users(
        id,
        name,
        phone,
        email) 
values(
        2,
        'Rat',
        '3333333',
        'rtt@abc.com'
);
insert into users(
        id,
        name,
        phone,
        email) 
values(
        3,
        'Rima Smith',
        '3333333',
        'rima@abc.com'
);
insert into users(
        id,
        name,
        phone,
        email) 
values(
        4,
        'Meena Take',
        '44444',
        'meena@abc.com'
);
insert into users(
        id,
        name,
        phone,
        email) 
values(
        5,
        'Kane Hate',
        '5555',
        'kane@abc.com'
);
insert into users(
        id,
        name,
        phone,
        email) 
values(
        6,
        'Kat Sen',
        '666666',
        'kat@abc.com'
);
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;