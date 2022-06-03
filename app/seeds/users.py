from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
       full_name='Demo Moore', username='Demo', email='demo@aa.io', password='password', image_url='https://i.pinimg.com/originals/85/5b/fa/855bfad3aee07326d0681677fc56da63.jpg')
    marnie = User(
        full_name='Marnie Marn', username='marnie', email='marnie@aa.io', password='password', image_url='https://staticg.sportskeeda.com/editor/2022/02/7b353-16439509782499.png', description='Tryna workout until I go bald 💪🏾')
    bobbie = User(
        full_name='Bobbie Dolo', username='bobbie', email='bobbie@aa.io', password='password', image_url='https://data.whicdn.com/images/333421372/original.jpg',description='Impatiently waiting for the 3rd season of Demon Slayer...😒')
    kris = User(
        full_name='Kris Read', username='kris', email='kris@aa.io', password='password', image_url='https://64.media.tumblr.com/94fb3cc3352fe5d471b3206de32089e2/tumblr_inline_pf1b2qQ2QU1rbr94y_500.jpg', description='Kris by day. Yoruchi by night...')
    stevie = User(
        full_name='Stevie Nix', username='nixie', email='nixie@aa.io', password='password', image_url='https://avatarfiles.alphacoders.com/799/79905.png')
    eren = User(
        full_name='Eren Yeags', username='eren', email='eren@aa.io', password='password', image_url='https://www.otaquest.com/wp-content/uploads/2021/07/eren-yeager-feature-image-1024x576.png')

    db.session.add_all([demo, marnie, bobbie, kris, stevie, eren])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
