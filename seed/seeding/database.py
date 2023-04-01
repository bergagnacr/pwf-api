import psycopg2
from time import sleep, time

# config
check_timeout = 60
check_interval = 2
interval_unit = "second" if check_interval == 2 else "seconds"
start_time = time()

class Database():
    def __init__(self, logger):
        self.logger = logger
        self.conn = None
            

    def connect(self):
        try:
            self.logger.info("Connecting to database")
            self.conn = psycopg2.connect(database="postgres", user="postgres", password="postgres", host="pwf-db",port=5432)
            self.conn.autocommit = True
        except ConnectionError as error:
            self.logger.info(f'Connection error: {error}')
    
    def wait_until_table_exists(self, table_name):
        self.logger.info(f"Checking if table {table_name} exists")
        with self.conn.cursor() as cursor:
            while time() - start_time < check_timeout:
                cursor.execute(f"SELECT EXISTS (SELECT * FROM information_schema.tables WHERE table_name ='{table_name}')")
                table_exists = cursor.fetchone()
                if table_exists:
                    self.logger.info("Table exists ✨ 💅")
                    sleep(2)
                    return True
                else:
                    self.logger.info("Table does not exist ❌")
                    sleep(check_interval)
            self.logger.error(
                f"We could not connect to table within {check_timeout} seconds.")
            return False
        
    def insert_sprocket(self, id, sprocket):
        self.logger.info(f"Inserting sprocket {id}")
        with self.conn.cursor() as cursor:
            cursor.execute(f"""INSERT INTO sprockets (id,teeth,pitch_diameter,outside_diameter,pitch) VALUES ('{id}', {sprocket['teeth']}, {sprocket['pitch_diameter']}, {sprocket['outside_diameter']},{sprocket['pitch']})""")

    def insert_factory(self, id):
        self.logger.info(f"Inserting factory {id}")
        with self.conn.cursor() as cursor:
            cursor.execute(f"""INSERT INTO factory (id) VALUES ('{id}')""")
    
    def insert_factory_chart_data(self, id, sprocket_production_actual, sprocket_production_goal, time, factory_id):
        self.logger.info(f"Inserting factory chart data {id}")
        with self.conn.cursor() as cursor:
            cursor.execute(f"""INSERT INTO factory_chart_data VALUES ('{id}', '{sprocket_production_actual}', '{sprocket_production_goal}', '{time}', (SELECT id FROM factory WHERE id='{factory_id}'))""")
