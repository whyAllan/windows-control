from subprocess import call
from utils.check_result import result_check  


# Native apps
def spotify():
    result = call("start spotify", shell=True)
    return result_check(result)

# Web sites
def youtube():
    result = call("start https://www.youtube.com", shell=True)
    return result_check(result)



def netflix():
    result = call("start https://www.netflix.com", shell=True)
    return result_check(result)

def google():
    result = call("start https://google.com", shell=True)
    return result_check(result)

def prime():
    result = call("start https://www.primevideo.com", shell=True)
    return result_check(result)

def disney():
    result = call("start https://www.disneyplus.com", shell=True)
    return result_check(result)

def twitch():
    result = call("start https://www.twitch.tv", shell=True)
    return result_check(result)

