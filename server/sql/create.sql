--create schema
create schema taskstory;


--create table 
create table taskstory.person
(
    id serial primary key,
    first_name text not null check (char_length(first_name) < 80),
    last_name text check (char_length(last_name) < 80),
    about text,
    created_at timestamp default now()
);


create table taskstory.person
(
    id uuid primary key default gen_random_uuid(),
    first_name text not null check (char_length(first_name) < 80),
    last_name text check (char_length(last_name) < 80),
    about text,
    created_at timestamp default now()
);



create table taskstory.story
(
    id uuid primary key default gen_random_uuid(),
    title text not null check (char_length(title) <20),
    storydesc text check (char_length(storydesc) < 100),
    imgsrc text,
    created_at timestamp default now()
);



-- insert value

INSERT INTO taskstory.person
    (first_name, last_name, about)
VALUES
    ("YU-CHIAO", "CHANG", "Master degree student");


INSERT INTO taskstory.story
    (title, storydesc, imgsrc)
VALUES
    ("金腦獎專案", "金腦userstory討論");