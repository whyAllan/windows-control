from subprocess import call

def youtube():

    result = call("start https://www.youtube.com", shell=True)

    if result != 0:  return False
    return True


def netflix():
    
    result = call("start https://www.netflix.com")
    if result 