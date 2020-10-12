-- Procedure for to automatize insert into table 'streets', field foreign key
use db_api_praiagrande;
-- Altering fields to default value now(), cause they're will insertings through of MySQL
ALTER TABLE streets
modify COLUMN createdAt datetime default now();

ALTER TABLE streets
modify COLUMN updatedAt datetime default now();

-- Procedure Code
delimiter $$
	CREATE PROCEDURE sp_insert_street (IN p_street varchar(100), IN p_district varchar(45))
    BEGIN
		DECLARE id_search int; 
		SELECT id_district from districts WHERE nm_district = p_district INTO id_search;
        -- getting value primaryKey of table 'district'
        INSERT INTO streets (id_street, nm_street,createdAt,updatedAt,districtIdDistrict)
        VALUES 				(default,p_street,default,default,id_search);
    END $$
delimiter ;


SHOW PROCEDURE STATUS;
CALL sp_insert_street ("RUA D","CANTO DO FORTE");
SELECT * FROM streets;
-- Test was success - 200
