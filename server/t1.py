from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
import time

def watchnow(e):
    s = Service("C:\chromedriver-win64\chromedriver.exe")
    
    options=webdriver.ChromeOptions()
    
    options.add_experimental_option("detach",True)

    
    driver = webdriver.Chrome(service=s)
    if e[1]=='Netflix':
        driver.get("https://www.netflix.com/login")
        id = driver.find_element('xpath',"""/html/body/div[1]/div/div/div[2]/div/form/div[1]/div/div/input""")
        id.send_keys(e[0])

        pas = driver.find_element('xpath',"""/html/body/div[1]/div/div/div[2]/div/form/div[2]/div/div/input""") 
        pas.send_keys(e[2])

        pas.send_keys(Keys.ENTER)
        time.sleep(10)
        driver.close()