from app.models.db import db, Comment, environment, SCHEMA

def seed_comments():
    if environment == "production":
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
         # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    comment1= Comment(
        description='Tokyo Ghoul is such a great anime! Great ending as well.', user_id=4, post_id=1
    )
    comment2= Comment(
        description='THE ONE-EYED KING!', user_id=1, post_id=1
    )
    comment3= Comment(
        description='They definietly should have built on her character and strength 💯', user_id=3, post_id=2
    )
    comment4= Comment(
        description='Nelliel aka the OG Number 3 >> Tia Harribel', user_id=1, post_id=2
    )
    comment5= Comment(
        description='I can\'t wait!!', user_id=3, post_id=3
    )
    comment6= Comment(
        description='SO EXCITED!!', user_id=4, post_id=3
    )
    comment7= Comment(
        description='Jaw dropping episode fa sho.', user_id=3, post_id=4
    )
    comment8= Comment(
        description='Such a great show! This episode was NUTS!', user_id=2, post_id=4
    )
    comment9= Comment(
        description='Mikasa > Levi', user_id=2, post_id=5
    )
    comment10= Comment(
        description='Levi definitely GOATed.', user_id=4, post_id=5
    )
    comment11= Comment(
        description='RIP Nujabes and Keiko Nobumoto', user_id=4, post_id=6
    )
    comment12= Comment(
        description='This show and Cowboy Beebop definitely are major classics. Both soundtracks are a vibe.', user_id=2, post_id=6
    )


    db.session.add_all([comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8, comment9, comment10, comment11, comment12])

    seed_comments()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
