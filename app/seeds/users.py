from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
       full_name='Demo Moore', username='Demo', email='demo@aa.io', password='password', image_url='https://i.pinimg.com/originals/85/5b/fa/855bfad3aee07326d0681677fc56da63.jpg')
    marnie = User(
        full_name='Marnie Marn', username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        full_name='Bobbie Dolo', username='bobbie', email='bobbie@aa.io', password='password')
    kris = User(
        full_name='Kris Read', username='kris', email='kris@aa.io', password='password', image_url='https://64.media.tumblr.com/94fb3cc3352fe5d471b3206de32089e2/tumblr_inline_pf1b2qQ2QU1rbr94y_500.jpg', description='Kris by day. Yoruchi by night...')


    db.session.add_all([demo, marnie, bobbie, kris])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
