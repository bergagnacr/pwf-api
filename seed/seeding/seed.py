import logging
import os
import json
import uuid
from database import Database
from time import sleep

logger = logging.getLogger()
logger.setLevel(logging.INFO)
logger.addHandler(logging.StreamHandler())

PACKAGE_DIR = os.path.dirname(os.path.abspath(__file__))
SPROCKETS_DATA = os.path.join(
    os.path.join(PACKAGE_DIR, 'data'), 'seed_sprocket_types.json')
FACTORIES_DATA =  os.path.join(
    os.path.join(PACKAGE_DIR, 'data'), 'seed_factory_data.json')

def seed_sprockets_data(database):
    logger.info("Reading Sprockets data")
    with open(SPROCKETS_DATA, 'r') as f:
        data = json.load(f)
        for sprocket in data.get('sprockets'):
            new_sprocket = sprocket
            new_sprocket["id"] = uuid.uuid4()
            database.insert_sprocket(new_sprocket["id"], new_sprocket)
    f.close()

def seed_factories_data(database):
    logger.info("Reading Factories data")
    with open(FACTORIES_DATA, 'r') as f:
        data = json.load(f)
        for factory in data.get('factories'):
            new_factory_id = uuid.uuid4()
            chart_data = factory.get('factory').get('chart_data')
            logger.info(factory)
            database.insert_factory(new_factory_id)
            for value in range(0, len(chart_data.get('sprocket_production_actual'))-1):
                new_chart_data_id = uuid.uuid4()
                database.insert_factory_chart_data(new_chart_data_id, 
                                            chart_data.get('sprocket_production_actual')[value], 
                                            chart_data.get('sprocket_production_goal')[value], 
                                            chart_data.get('time')[value], 
                                            new_factory_id)
                
    f.close()
        
logger.info("waiting for database...")
sleep(30)
database = Database(logger)
database.connect()
if database.wait_until_table_exists("sprockets"):
    logger.info("Starting seeding")
    seed_sprockets_data(database)
    seed_factories_data(database)
else:
    logger.error("Table sprockets does not exist")