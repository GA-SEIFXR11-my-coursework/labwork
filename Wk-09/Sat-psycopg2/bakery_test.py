import psycopg2

password = open('.password').read().strip()
connection = psycopg2.connect(dbname="bakery", user="postgres", port=5432, password=password)
cursor = connection.cursor()

cursor.execute("SELECT * FROM cakes")
results = cursor.fetchall()
print(results)

connection.commit()

connection.close()
