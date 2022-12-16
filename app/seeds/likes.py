from app.models import db, Like


def seed_likes():
    like1 = Like(user_id=1, post_id=1)
    like2 = Like(user_id=2, post_id=2)
    like3 = Like(user_id=3, post_id=3)
    like4 = Like(user_id=4, post_id=4)
    like5 = Like(user_id=2, post_id=5)
    like6 = Like(user_id=1, post_id=6)


    db.session.add_all([like1, like2, like3, like4, like5, like6])

    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
