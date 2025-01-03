DELETE p1 FROM Person p1
JOIN ( SELECT email, MIN(id) as MinId FROM Person Group BY email) p2
ON p1.email = p2.email
AND p1.id > p2.MinId 