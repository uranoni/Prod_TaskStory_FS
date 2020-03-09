--create schema
create schema taskstory;


--create table 
-- create table taskstory.person
-- (
--     id serial primary key,
--     first_name text not null check (char_length(first_name) < 80),
--     last_name text check (char_length(last_name) < 80),
--     about text,
--     created_at timestamp default now()
-- );


-- create table taskstory.person
-- (
--     id uuid primary key default gen_random_uuid(),
--     first_name text not null check (char_length(first_name) < 80),
--     last_name text check (char_length(last_name) < 80),
--     about text,
--     created_at timestamp default now()
-- );



create table taskstory.story
(
    id uuid primary key default gen_random_uuid(),
    title text not null check (char_length(title) <20),
    storydesc text check (char_length(storydesc) < 100),
    imgsrc text,
    created_at timestamp default now()
);

CREATE TABLE taskstory.usertype (
   id uuid primary key default gen_random_uuid(),
   story_id uuid,
   title text,
   FOREIGN KEY (story_id) REFERENCES taskstory.story (id)
);

CREATE TABLE taskstory.useractivity (
   id uuid primary key default gen_random_uuid(),
   usertype_id uuid,
   title text,
   FOREIGN KEY (usertype_id) REFERENCES taskstory.usertype (id)
);

CREATE TABLE taskstory.userstep (
   id uuid primary key default gen_random_uuid(),
   activity_id uuid,
   title text,
   FOREIGN KEY (activity_id) REFERENCES taskstory.useractivity (id)
);

CREATE TABLE taskstory.usertask (
   id uuid primary key default gen_random_uuid(),
   step_id uuid,
   title text,
   FOREIGN KEY (step_id) REFERENCES taskstory.userstep (id)
);
-- insert value




INSERT INTO taskstory.story(title, storydesc) VALUES('金腦獎專案', '金腦userstory討論');
INSERT INTO taskstory.usertype(title, story_id) VALUES('管理員', '74ea68ff-8b66-4950-b8db-47f163a978c6');
INSERT INTO taskstory.useractivity(title, usertype_id) VALUES('註冊', '8ef8997d-1449-4e9f-ac5f-6e9c014023ce');
INSERT INTO taskstory.usertask(title, step_id) VALUES('註冊', '8ef8997d-1449-4e9f-ac5f-6e9c014023ce');