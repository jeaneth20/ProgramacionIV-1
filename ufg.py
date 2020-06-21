#Parcial
from facebook_scraper import get_posts
import csv

face = csv.writer(open('ufg.csv','w'))
face.writerow(['POST_ID','TEXTO','LIKE'])

for post in get_posts('ufgoficial ', pages=5, ):
    #print(post.keys())
    print(post['post_id'], post['text'], post['like'], sep=' - ')
    try:
        face.writerow([post['post_id'], post['text'], post['like']])
    except:
        None