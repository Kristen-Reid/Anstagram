from app.models import db, Post


def seed_posts():
    post1 = Post(
        media_url='https://wallpaperaccess.com/full/5707282.jpg', summary='Love Tokyo Ghoul! Ken Kaneki is my favorite character!!', user_id=2
        )
    post2 = Post(
        media_url='https://i.pinimg.com/originals/04/c3/7a/04c37aaa4fc48abc09ddb7fab1220a1b.png', summary='One of my favorite charaters from who did not get enough air time. Nelliel is such a boss!', user_id=4
        )
    post3 = Post(
        media_url='https://i.pinimg.com/originals/29/63/8a/29638abfcef4f4217dcc615604a44d91.jpg', summary='So hype for the return of Bleach!', user_id=1
        )
    post4 = Post(
        media_url='https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwGGbbe8J8bLKCAaiBnFFrc0', summary='This episode was soooo good!! 🔥', user_id=1
        )
    post5 = Post(
        media_url='https://blacknerdproblems.com/wp-content/uploads/2018/08/attack-on-titan-season-3-levi-ackerman-kick-ass.jpg', summary='Levi definitely the GOAT on AOT! 🐐', user_id=1
        )
    post6 = Post(
        media_url='https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/01/Samurai-Champloo.jpg', summary='A classic with an amazing soundtrack. Samurai Champloo will always be great to me.', user_id=3
        )


    db.session.add_all([post1, post2, post3, post4, post5, post6])

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
