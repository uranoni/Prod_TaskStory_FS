select uuid_generate_v4()

CREATE EXTENSION "uuid-ossp";
DROP EXTENSION "uuid-ossp";


select * from pg_extension;

select * from pg_available_extensions;


create extension if not exists "pgcrypto";